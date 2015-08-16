ActiveAdmin.register ServiceCategory do

  permit_params :name, :rang, :image_url, :image_small_url
  before_filter :find_resource, :only => [:show, :edit, :update, :destroy]
  actions :all

  filter :name, label: 'Название категории'
  filter :rang, label: 'Приоритет', as: :select, collection: Service::RANG_TYPES
  filter :created_at, label: 'Дата создания'

  form do |f|
    f.inputs 'Название категории' do
      f.input :name
    end
    f.inputs 'Приоритет' do
      f.input :rang, as: :select, collection: ServiceCategory::RANG_TYPES
    end
    f.inputs 'Изображение большое 1684X893' do
      f.input :image_url
    end
    f.inputs 'Изображение маленькое 656X478' do
      f.input :image_small_url
    end
    f.actions
  end

  show title: :name do
    panel "Данные" do
      attributes_table_for service_category do
        row('Приоритет') { |b| service_category.rang}
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
    attributes_table_for service_category.services do
      row("Услуги") do |service|
         link_to service.name, [ :admin, service ]
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
    column("Приоритет"){|service_category| service_category.rang}
    column "Дата создания", :created_at
    actions
  end

end
