ActiveAdmin.register ServiceCategory do

  permit_params :name, :tail, :rang, :image_url, :image_small_url, :video_url, :clinic_ids => []
  before_filter :find_resource, :only => [:show, :edit, :update, :destroy]
  actions :all

  filter :name, label: 'Название категории'
  filter :tail, label: 'Приоритет'
  filter :rang, label: 'Cлайд', as: :select, collection: ServiceCategory::RANG_TYPES
  filter :created_at, label: 'Дата создания'

  form do |f|
    f.inputs 'Название категории' do
      f.input :name
    end
    f.inputs 'Приоритет' do
      f.input :tail
    end
    f.inputs 'Cлайд' do
      f.input :rang, as: :select, collection: ServiceCategory::RANG_TYPES
    end
    f.inputs 'Клиники' do
      f.input :clinic_ids, as: :check_boxes, collection: Clinic.all.map { |m| [m.address, m.id] }, multiple: true
    end
    f.inputs 'Изображение большое 1684X893', :multipart => true do
      f.input :image_url
    end
    f.inputs 'Изображение маленькое 656X478', :multipart => true do
      f.input :image_small_url
    end
    f.inputs 'Видео с YouTube' do
      f.input :video_url
    end
    f.actions
  end

  show title: :name do
    panel "Данные" do
      attributes_table_for service_category do
        row('Приоритет') { |b| service_category.tail}
        row('Cлайд') { |b| service_category.rang}
        row('Видео с YouTube') { |b| service_category.video_url}
        row('Изображение маленькое') do
          image_tag service_category.image_small_url
        end
        row('Изображение большое') do
          image_tag service_category.image_url
        end
      end
    end
    active_admin_comments
  end

   sidebar "Детали", only: :show do
    table_for service_category.services do
      column("Услуги") do |service|
         link_to service.name, [ :admin, service ]
      end
    end
    table_for service_category.clinics do
      column("Клиники") do |clinic|
        link_to clinic.address, [ :admin, clinic ]
      end
    end
    table_for service_category.doctors do
      column("Персонал") do |doctor|
        link_to doctor.name, [ :admin, doctor ]
      end
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
    column("Название"){|service_category| service_category.name}
    column("Приоритет"){|service_category| service_category.tail}
    column("Cлайд"){|service_category| service_category.rang}
    column "Дата создания", :created_at
    actions
  end

end
