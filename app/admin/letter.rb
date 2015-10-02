ActiveAdmin.register Letter do

  permit_params :name, :email, :phone, :description, :checked_out_at

  config.per_page = 10

  menu :priority => 3


  filter :created_at, label: 'Дата создания'
  filter :checked_out_at, label: 'Дата ответа'
  filter :name, label: 'Имя'
  filter :email, label: 'Email'


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
      attributes_table_for letter do
        row('Дата создания') { |b| l letter.created_at, format: :long}
        row("Сообщение"){|b| letter.description}
        row("Статус"){|b| status_tag(letter.state)}
        row('Дата ответа') { |b| letter.checked_out_at}
      end
    end
    active_admin_comments
  end

  sidebar "Детали", only: :show do
    attributes_table_for letter do
      row("Имя"){|b| letter.name}
      row("Email"){|b| letter.email}
      row("Телефон"){|b| letter.phone}
    end
  end

  index do
    column("Дата создания"){|letter| l letter.created_at, format: :long}
    column("Имя"){|letter| letter.name }
    column("Email"){|letter| letter.email}
    column("Телефон"){|letter| letter.phone}
    column("Сообщение"){|letter| letter.description}
    column("Статус"){|letter| status_tag(letter.state)}
    actions
  end




end
