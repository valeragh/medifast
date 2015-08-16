ActiveAdmin.register Record do


  permit_params :name, :phone, :service_id, :email, :clinic_id, :description, :checked_out_at

  config.per_page = 10

  menu :priority => 3
  actions :index, :show, :edit, :update

  filter :created_at, label: 'Дата создания'
  filter :checked_out_at, label: 'Дата ответа'
  filter :name, label: 'Имя'
  filter :service, label: 'Процедура', as: :select, collection: proc { Service.find(Record.pluck(:service_id)).map { |m| [m.name, m.id] } }
  filter :clinic, label: 'Клиника', as: :select, collection: proc { Clinic.find(Record.pluck(:clinic_id)).map { |m| [m.address, m.id] } }

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
      attributes_table_for record do
        row('Дата создания') { |b| l record.created_at, format: :long}
        row("Услуга"){|b| record.service.name}
        row("Клиника"){|b| record.clinic.address}
        row("Статус"){|b| status_tag(record.state)}
        row('Дата ответа') { |b| record.checked_out_at}
      end
    end
    active_admin_comments
  end

  sidebar "Детали", only: :show do
    attributes_table_for record do
      row("Имя"){|b| record.name}
      row("Телефон"){|b| record.phone}
      row("Email"){|b| record.email}
      row("Сообщение"){|b| record.description}
    end
  end

  index do
    column("Дата создания"){|record| l record.created_at, format: :long}
    column("Имя"){|record| record.name }
    column("Телефон"){|record| record.phone}
    column("Услуга"){|record| record.service.name}
    column("Клиника"){|record| record.clinic.address}
    column("Статус"){|record| status_tag(record.state)}
    actions
  end


end
