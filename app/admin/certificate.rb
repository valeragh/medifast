ActiveAdmin.register Certificate do

  permit_params :doctor_id, :image_url
  actions :all, except: [:show]

  filter :doctor, label: 'Доктор', as: :select, collection: proc { Doctor.find(Certificate.pluck(:doctor_id)).map { |m| [m.name, m.id] } }
  
  index do
    column("Доктор"){|certificate| certificate.doctor.name}
    column("Сертификат"){|certificate| image_tag certificate.image_url}
    column "Дата создания", :created_at
    actions
  end  

end
