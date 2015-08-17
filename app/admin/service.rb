ActiveAdmin.register Service do

  permit_params :name, :rang, :image_url, :image_one_url, :image_two_url, :description, :description_two, :service_category_id
  before_filter :find_resource, :only => [:show, :edit, :update, :destroy]
  actions :all

  filter :name, label: 'Название услуги'
  filter :rang, label: 'Приоритет', as: :select, collection: Service::RANG_TYPES
  filter :service_category, label: 'Категория', as: :select, collection: proc { ServiceCategory.find(Service.pluck(:service_category_id)).map { |m| [m.name, m.id] } }
  filter :created_at, label: 'Дата создания'

  form do |f|
    f.inputs 'Название услуги' do
      f.input :name
    end
    f.inputs 'Приоритет' do
      f.input :rang, as: :select, collection: Service::RANG_TYPES
    end
    f.inputs 'Категория' do
      f.input :service_category_id, as: :select, collection: ServiceCategory.all.map { |m| [m.name, m.id] }
    end
    f.inputs 'Описание услуги' do
      f.input :description, as: :wysihtml5, commands: [ :bold, :italic, :underline, :ul, :ol, :outdent, :indent ], blocks: :basic
    end
    f.inputs 'Дополнительное описание услуги' do
      f.input :description_two, as: :wysihtml5, commands: [ :bold, :italic, :underline, :ul, :ol, :outdent, :indent ], blocks: :basic
    end
    f.inputs 'Изображение маленькое 656X478', :multipart => true do
      f.input :image_url
    end
    f.inputs 'Изображение в описание услуги', :multipart => true do
      f.input :image_one_url
    end
    f.inputs 'Изображение в описание услуги', :multipart => true do
      f.input :image_two_url
    end
    f.actions
  end

  show title: :name do
    panel "Данные" do
      attributes_table_for service do
        row('Описание услуги') { |b| service.description.html_safe}
        row('Изображение маленькое') do
          image_tag service.image_url
        end
        row('Изображение в описание') do
          image_tag service.image_one_url
        end
        row('Изображение в описание') do
          image_tag service.image_two_url
        end
      end
    end
    active_admin_comments
  end

   sidebar "Детали", only: :show do
    attributes_table_for service do
      row('Приоритет') { |b| service.rang}
      row("Категория"){|b| service.service_category.name}
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
    column("Название"){|service| service.name}
    column("Приоритет"){|service_category| service_category.rang}
    column("Категория"){|service| service.service_category.name}
    column "Дата создания", :created_at
    actions
  end

end
