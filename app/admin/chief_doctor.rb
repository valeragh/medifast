ActiveAdmin.register ChiefDoctor do
  menu label: "Главные доктора", priority: 3, parent: "Персонал", parent_priority: 6
  permit_params :name, :position, :status, :image

  filter :position, label: 'Должность'
  filter :name, label: 'Имя доктора'
  filter :status, label: 'Статус', as: :select, collection: ChiefDoctor::STATUS_TYPES

  form do |f|
    f.inputs 'Имя доктора' do
      f.input :name
    end
    f.inputs 'Должность' do
      f.input :position
    end
    f.inputs 'Cтатус' do
      f.input :status, as: :select, collection: ChiefDoctor::STATUS_TYPES
    end
    f.inputs 'Изображение 600X903', :multipart => true do
      f.input :image
    end
    f.actions
  end

  show title: :name do
    panel "Данные" do
      attributes_table_for chief_doctor do
        row('Изображение') do
          image_tag chief_doctor.image
        end
      end
    end
    active_admin_comments
  end

  sidebar "Детали", only: :show do
    attributes_table_for chief_doctor do
      row('Имя') { |b| chief_doctor.name}
      row('Должность') { |b| chief_doctor.position}
      row('Статус') { |b| chief_doctor.status}
    end
  end

  index do
    column("Имя"){|chief_doctor| chief_doctor.name}
    column("Должность"){|chief_doctor| chief_doctor.position}
    column("Статус"){|chief_doctor| chief_doctor.status}
    column "Дата создания", :created_at
    actions
  end

end
