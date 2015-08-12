ActiveAdmin.register Personal do

  permit_params :name, :clinic, :description, :position, :image_url, :email, :password, :password_confirmation
  actions :all

  filter :clinic, label: 'Клиника'
  filter :position, label: 'Должность'
  filter :name, label: 'Имя доктора'
  filter :email, label: 'Email'

  form do |f|
    f.inputs 'Имя доктора' do
      f.input :name
    end
    f.inputs 'Должность' do
      f.input :position
    end
    f.inputs 'Клиника' do
      f.input :clinic
    end
    f.inputs 'Резюме доктора' do
      f.input :description, as: :wysihtml5, commands: [ :bold, :italic, :underline, :ul, :ol, :outdent, :indent ], blocks: :basic
    end
    f.inputs 'Изображение маленькое 324X268' do
      f.input :image_url
    end
    f.inputs 'Email' do
      f.input :email
    end
    f.inputs 'Пароль' do
      f.input :password
    end
    f.inputs 'Повторите пароль' do
      f.input :password_confirmation
    end
    f.actions
  end

  show title: :name do
    panel "Данные" do
      attributes_table_for personal do
        row('Резюме доктора') { |b| personal.description.html_safe}
        row('Изображение маленькое') do
          image_tag personal.image_url
        end
      end
    end
    active_admin_comments
  end

   sidebar "Детали", only: :show do
    attributes_table_for personal do
      row("Должность"){|b| personal.position}
      row("Клиника"){|b| personal.clinic}
      row("Email"){|b| personal.email}
    end
  end

  index do
    column("Имя"){|personal| personal.name}
    column("Должность"){|personal| personal.position}
    column("Клиника"){|personal| personal.clinic}
    column("Email"){|personal| personal.email}
    column "Дата создания", :created_at
    actions
  end

end
