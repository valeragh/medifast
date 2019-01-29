ActiveAdmin.register Post do
  menu label: "Новости", priority: 4, parent: "Информация", parent_priority: 8

  permit_params :name, :title, :image_url, :description, :category
  before_filter :find_resource, :only => [:show, :edit, :update, :destroy]
  actions :all

  filter :name, label: 'Заголовок'
  filter :category, label: 'Категория', as: :select, collection: Post::CATEGORY_TYPES
  filter :created_at, label: 'Дата создания'

  form do |f|
    f.inputs 'Заголовок' do
      f.input :name
    end
    f.inputs 'Категория' do
      f.input :category, as: :select, collection: Post::CATEGORY_TYPES
    end
    f.inputs 'Вступительный текст' do
      f.input :title, as: :wysihtml5, commands: [ :bold, :italic, :underline, :ul, :ol, :outdent, :indent ], blocks: :basic
    end
    f.inputs 'Описание новости' do
      f.input :description, as: :wysihtml5, commands: [ :bold, :italic, :underline, :ul, :ol, :outdent, :indent ], blocks: :basic
    end
    f.inputs 'Изображение маленькое 656X478', :multipart => true do
      f.input :image_url
    end
    f.actions
  end

  show title: :name do
    panel "Данные" do
      attributes_table_for post do
        row('Вступительный текст') { |b| post.title.html_safe}
        row('Описание новости') { |b| post.description.html_safe}
        row('Изображение маленькое') do
          image_tag post.image_url
        end
      end
    end
    active_admin_comments
  end

   sidebar "Детали", only: :show do
    attributes_table_for post do
      row("Категория"){|b| post.category}
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
    column("Название"){|post| post.name}
    column("Категория"){|post| post.category}
    column("Вступительный текст"){|post| post.title.split(/\s+/).slice(0,10).join(' ').html_safe}
    column "Дата создания", :created_at
    actions
  end


end
