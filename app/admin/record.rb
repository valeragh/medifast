ActiveAdmin.register Record do


  permit_params :name, :phone, :service_category_id, :email, :clinic_id, :description, :checked_out_at

  config.per_page = 10

  menu :priority => 3
  actions :all

  filter :created_at, label: 'Дата создания'
  filter :checked_out_at, label: 'Дата ответа'
  filter :name, label: 'Имя'
  filter :service_category, label: 'Услуга', as: :select, collection: proc { ServiceCategory.find(Record.pluck(:service_category_id)).map { |m| [m.name, m.id] } }
  filter :clinic, label: 'Клиника', as: :select, collection: proc { Clinic.find(Record.pluck(:clinic_id)).map { |m| [m.address, m.id] } }

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
      attributes_table_for record do
        row('Дата создания') { |b| l record.created_at, format: :short}
        row("Услуга"){|b| record.service_category.name}
        row("Клиника"){|b| record.clinic.address}
        row("Статус"){|b| status_tag(record.state)}
        if record.checked_out_at?
          row('Дата ответа') { |b| l record.checked_out_at, format: :short}
        else
          row('Дата ответа') { |b| record.checked_out_at}
        end
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
    column("Дата создания"){|record| l record.created_at, format: :short}
    column("Имя"){|record| record.name }
    column("Телефон"){|record| record.phone}
    column("Услуга"){|record| record.service_category.name}
    column("Клиника"){|record| record.clinic.address}
    column("Статус"){|record| status_tag(record.state)}
    actions
  end


end
