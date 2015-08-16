ActiveAdmin.register Doctor do

  permit_params :name, :clinic_id, :description, :position, :image_url
  before_filter :find_resource, :only => [:show, :edit, :update, :destroy]
  actions :all

  filter :position, label: 'Должность'
  filter :name, label: 'Имя доктора'
  filter :clinic, label: 'Клиника', as: :select, collection: proc { Clinic.find(Doctor.pluck(:clinic_id)).map { |m| [m.address, m.id] } }
  
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
    f.inputs 'Изображение маленькое 656X478' do
      f.input :image_url
    end
    f.actions
  end

  show title: :name do
    panel "Данные" do
      attributes_table_for doctor do
        row('Резюме доктора') { |b| doctor.description.html_safe}
        row('Изображение маленькое') do
          image_tag doctor.image_url
        end
      end
    end
    active_admin_comments
  end

   sidebar "Детали", only: :show do
    attributes_table_for doctor do
      row("Должность"){|b| doctor.position}
      row("Клиника"){|b| doctor.clinic.address}
    end
  end

  controller do
    def find_resource
      begin
        scoped_collection.where(slug: params[:id]).first!
      rescue ActiveRecord::RecordNotFound
        scoped_collection.find(params[:id])
      end
    end
  end

  index do
    column("Имя"){|doctor| doctor.name}
    column("Должность"){|doctor| doctor.position}
    column("Клиника"){|doctor| doctor.clinic.address}
    column "Дата создания", :created_at
    actions
  end  

end
