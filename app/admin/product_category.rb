ActiveAdmin.register ProductCategory do


  permit_params :name, :status, :slug
  before_filter :find_resource, :only => [:show, :edit, :update, :destroy]
  actions :all, except: [:show]

  filter :name, label: 'Название категории'
  filter :status, label: 'Статус', as: :select, collection: ProductCategory::STATUS_TYPES
  filter :created_at, label: 'Дата создания'

  form do |f|
    f.inputs 'Название категории' do
      f.input :name
    end
    f.inputs 'Статус' do
      f.input :status, as: :select, collection: ProductCategory::STATUS_TYPES
    end
    f.actions
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
    column("Название"){|product_category| product_category.name}
    column("Статус"){|product_category| product_category.status}
    column "Дата создания", :created_at
    actions
  end


end
