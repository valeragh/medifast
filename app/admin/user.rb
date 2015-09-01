ActiveAdmin.register User do

  permit_params :name, :position, :clinic_id, :description, :image_url, :email, :password, :password_confirmation, :role

  index do
      column("Имя"){|user| user.name}
      column :email
      #column("Дата текущего посещения"){|user| user.current_sign_in_at}
      #column("Дата последнего посещения"){|user| user.last_sign_in_at}
      column("Посещаемость"){|user| user.sign_in_count}
      column("Роль"){|user| user.role}
      actions
  end

  filter :email
  filter :role, label: 'Роль', as: :select, collection: {None: "none", Administrator: "admin", Manager: "manager", Security: "security", Doctor: "doctor" }

  form do |f|
    f.inputs 'Имя доктора' do
      f.input :name
    end
    f.inputs 'Должность' do
      f.input :position
    end
    f.inputs 'Клиника' do
      f.input :clinic_id, as: :select, collection: Clinic.all.map { |m| [m.address, m.id] }
    end
    f.inputs 'Резюме доктора' do
      f.input :description, as: :wysihtml5, commands: [ :bold, :italic, :underline, :ul, :ol, :outdent, :indent ], blocks: :basic
    end
    f.inputs 'Изображение маленькое 324X268', :multipart => true do
      f.input :image_url
    end
    f.inputs 'Роль' do
      f.input :role, as: :radio, collection: {None: "none", Administrator: "admin", Manager: "manager", Security: "security", Doctor: "doctor" }
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
      attributes_table_for user do
        row('Email') { |b| user.email}
        row('Роль') { |b| user.role}
        #row('Должность') { |b| user.position}
        #row('Клиника') { |b| user.clinic.address}
        #row('Описание') { |b| user.description.html_safe}
        row('Посещаемость') { |b| user.sign_in_count}
        row('Текущая посещаемость') { |b| user.current_sign_in_at}
        row('Последняя посещаемость') { |b| user.last_sign_in_at}
        row('Текущий IP') { |b| user.current_sign_in_ip}
        row('Последний IP') { |b| user.last_sign_in_ip}
        row('Создано') { |b| user.created_at}
        row('Обновлено') { |b| user.updated_at}
        row('Изображение') do
          image_tag user.image_url
        end
      end
    end
    active_admin_comments
  end

   sidebar "Детали", only: :show do
    table_for user.conversations do
      column("Сессии") do |conversation|
        link_to conversation.recipient.name, [ :admin, conversation ]
      end
    end
  end

end
