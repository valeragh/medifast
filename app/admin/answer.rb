ActiveAdmin.register Answer do


  permit_params :name, :phone, :file, :vacancy_id, :email, :description, :checked_out_at

  config.per_page = 10

  menu :priority => 3
  actions :all

  filter :created_at, label: 'Дата создания'
  filter :checked_out_at, label: 'Дата ответа'
  filter :name, label: 'Имя'
  filter :vacancy, label: 'Вакансия', as: :select, collection: proc { Vacancy.find(Answer.pluck(:vacancy_id)).map { |m| [m.name, m.id] } }

  scope "Все", :all, :default => true
  scope "Новый", :in_progress
  scope "Обработанный", :complete

  form do |f|
    f.inputs 'Дата ответа' do
      f.date_select :checked_out_at, :combined => true, :default => Time.now.change(:hour => 11, :min => 30), :minute_interval => 15, :time_separator => "", :start_hour => 7, :start_minute => 30, :end_hour => 18, :end_minute => 30
    end
    actions
  end

  show do
    panel "Данные" do
      attributes_table_for answer do
        row('Дата создания') { |b| l answer.created_at, format: :short}
        row("Вакансия"){|b| answer.vacancy.name}
        row("Резюме"){|b| answer.description}
        row("Статус"){|b| status_tag(answer.state)}
        if answer.checked_out_at?
          row('Дата ответа') { |b| l answer.checked_out_at, format: :short}
        else
          row('Дата ответа') { |b| answer.checked_out_at}
        end
      end
    end
    active_admin_comments
  end

  sidebar "Детали", only: :show do
    attributes_table_for answer do
      row("Имя"){|b| answer.name}
      row("Телефон"){|b| answer.phone}
      row("Email"){|b| answer.email}
    end
  end

  index do
    column("Дата создания"){|answer| l answer.created_at, format: :short}
    column("Имя"){|answer| answer.name }
    column("Телефон"){|answer| answer.phone}
    column("Вакансия"){|answer| answer.vacancy.name}
    column("Статус"){|answer| status_tag(answer.state)}
    actions
  end


end
