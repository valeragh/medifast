ActiveAdmin.register City do


  permit_params :name, :image_url, :slug
  before_filter :find_resource, :only => [:show, :edit, :update, :destroy]

  menu :priority => 3
  actions :all, except: [:show]

  filter :name, label: 'Город'

  form do |f|
    f.inputs 'Город' do
      f.input :name
    end
    f.inputs 'Изображение 656X478', :multipart => true do
      f.input :image_url
    end
    actions
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
    column("Город"){|city| city.name}
    column "Дата создания", :created_at
    actions
  end

end
