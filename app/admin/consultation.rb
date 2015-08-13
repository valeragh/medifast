ActiveAdmin.register Consultation do


  permit_params :name, :phone, :service_id, :email, :description, :checked_out_at

  config.per_page = 10

  menu :priority => 3
  actions :index, :show, :edit, :update

  filter :created_at, label: 'Дата создания'
  filter :checked_out_at, label: 'Дата ответа'
  filter :name, label: 'Имя'
  filter :service, label: 'Процедура', as: :select, collection: proc { Service.find(Consultation.pluck(:service_id)).map { |m| [m.name, m.id] } }


  scope "Все", :all, :default => true
  scope "Новый", :in_progress
  scope "Обработанный", :complete

  form do |f|
    f.inputs 'Дата ответа' do
      f.date_select :checked_out_at, order: [:day, :month, :year]
    end
    actions
  end

  show do
    panel "Данные" do
      attributes_table_for consultation do
        row('Дата создания') { |b| l consultation.created_at, format: :long}
        row("Услуга"){|b| consultation.service.name}
        row("Вопрос"){|b| consultation.description}
        row("Статус"){|b| status_tag(consultation.state)}
        row('Дата ответа') { |b| consultation.checked_out_at}
      end
    end
    active_admin_comments
  end

  sidebar "Детали", only: :show do
    attributes_table_for consultation do
      row("Имя"){|b| consultation.name}
      row("Телефон"){|b| consultation.phone}
      row("Email"){|b| consultation.email}

    end
  end

  index do
    column("Дата создания"){|consultation| l consultation.created_at, format: :long}
    column("Имя"){|consultation| consultation.name }
    column("Телефон"){|consultation| consultation.phone}
    column("Услуга"){|consultation| consultation.service.name}
    column("Вопрос"){|consultation| consultation.description}
    column("Статус"){|consultation| status_tag(consultation.state)}
    actions
  end



end
