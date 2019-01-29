ActiveAdmin.register Record do
  menu label: "Записи на прием", priority: 1, parent: "Записи", parent_priority: 2

  permit_params :name, :phone, :service_category_id, :email, :clinic_id, :description, :checked_out_at

  config.per_page = 30
  actions :all, :except => [:new, :create, :destroy]

  filter :created_at, label: 'Дата создания'
  filter :checked_out_at, label: 'Дата ответа'
  filter :name, label: 'Имя'
  filter :service_category_title, as: :select,
    collection: -> { ServiceCategory.all },
    label:      'Категория'
  filter :clinic_address, as: :select,
    collection: -> { Clinic.all },
    label:      'Клиника'

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
        row("Услуга"){|b| record.service_category.present? ? (record.service_category.name) : "Нет в системе"}
        row("Клиника"){|b| record.clinic.present? ? (record.clinic.address) : "Нет в системе"}
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
    column("Услуга"){|record| record.service_category.present? ? (record.service_category.name) : "Нет в системе"}
    column("Клиника"){|record| record.clinic.present? ? (record.clinic.address) : "Нет в системе"}
    column("Статус"){|record| status_tag(record.state)}
    actions
  end


end
