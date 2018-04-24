ActiveAdmin.register Consultation do


  permit_params :name, :phone, :service_category_id, :email, :description, :checked_out_at

  config.per_page = 10

  menu :priority => 3
  actions :index, :show, :edit, :update

  filter :created_at, label: 'Дата создания'
  filter :checked_out_at, label: 'Дата ответа'
  filter :name, label: 'Имя'
  #filter :service_category, label: 'Процедура', as: :select, collection: proc { ServiceCategory.find(Consultation.pluck(:service_category_id)).map { |m| [m.name, m.id] } }


  scope "Все", :all, :default => true
  scope "Новый", :in_progress
  scope "Обработанный", :complete

  form do |f|
    f.inputs 'Дата ответа' do
      f.time_select :checked_out_at, :default => Time.now.change(:hour => 11, :min => 30), :minute_interval => 15, :start_hour => 7, :start_minute => 30, :end_hour => 18, :end_minute => 30
    end
    actions
  end

  show do
    panel "Данные" do
      attributes_table_for consultation do
        row('Дата создания') { |b| l consultation.created_at, format: :long}
        row("Услуга"){|b| consultation.service_category.present? ? (consultation.service_category.name) : "Нет в системе"}
        row("Вопрос"){|b| consultation.description}
        row("Статус"){|b| status_tag(consultation.state)}
        if consultation.checked_out_at?
          row('Дата ответа') { |b| l consultation.checked_out_at, format: :short}
        else
          row('Дата ответа') { |b| consultation.checked_out_at}
        end
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
    column("Email"){|consultation| consultation.email }
    column("Телефон"){|consultation| consultation.phone}
    column("Услуга"){|consultation| consultation.service_category.present? ? (consultation.service_category.name) : "Нет в системе"}
    column("Вопрос"){|consultation| consultation.description.split(/\s+/).slice(0,10).join(' ')}
    column("Статус"){|consultation| status_tag(consultation.state)}
    actions
  end



end
