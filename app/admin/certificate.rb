ActiveAdmin.register Certificate do
  menu label: "Сертификаты", priority: 2, parent: "Персонал", parent_priority: 6
  permit_params :doctor_id, :image_url
  actions :all, except: [:show]

  filter :doctor_name, as: :select,
    collection: -> { Doctor.all },
    label:      'Доктор'

  form do |f|
    f.inputs 'Доктор' do
      f.input :doctor_id, as: :select, collection: Doctor.all.map { |m| [m.name, m.id] }
    end
    f.inputs 'Изображение маленькое 328X239', :multipart => true do
      f.input :image_url
    end
    actions
  end

  index do
    column("Доктор"){|certificate| certificate.doctor.present? ? (certificate.doctor.name) : "Нет в системе"}
    column("Сертификат"){|certificate| image_tag certificate.image_url}
    column "Дата создания", :created_at
    actions
  end

end
