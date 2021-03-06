ActiveAdmin.register Service do
  menu label: "Услуги", priority: 1, parent: "Услуги", parent_priority: 3
  permit_params :name, :rang, :video_url, :image_url, :image_one_url, :image_two_url, :description, :description_two, :service_category_id
  before_filter :find_resource, :only => [:show, :edit, :update, :destroy]
  actions :all

  filter :name, label: 'Название услуги'
  filter :rang, label: 'Приоритет', as: :select, collection: Service::RANG_TYPES
  filter :service_category_name, as: :select,
    collection: -> { ServiceCategory.all },
    label:      'Категория'
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
    f.inputs 'Видео с YouTube' do
      f.input :video_url
    end
    f.actions
  end

  show title: :name do
    panel "Данные" do
      attributes_table_for service do
        row('Видео с YouTube') { |b| service.video_url}
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
      row("Категория"){|b| service.service_category.present? ? (service.service_category.name) : "Нет в системе"}
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
    column("Приоритет"){|service| service.rang}
    column("Категория"){|service| service.service_category.present? ? (service.service_category.name) : "Нет в системе"}
    column "Дата создания", :created_at
    actions
  end

end
