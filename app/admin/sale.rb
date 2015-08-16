ActiveAdmin.register Sale do

  permit_params :name, :rang, :image_url, :description
  actions :all

  filter :name, label: 'Название акции'
  filter :rang, label: 'Приоритет', as: :select, collection: Sale::RANG_TYPES
  filter :created_at, label: 'Дата создания'

  form do |f|
    f.inputs 'Название услуги' do
      f.input :name
    end
    f.inputs 'Приоритет' do
      f.input :rang, as: :select, collection: Sale::RANG_TYPES
    end
    f.inputs 'Описание услуги' do
      f.input :description, as: :wysihtml5, commands: [ :bold, :italic, :underline, :ul, :ol, :outdent, :indent ], blocks: :basic
    end
    f.inputs 'Изображение', :multipart => true do
      f.input :image_url
    end
    f.actions
  end

  show title: :name do
    panel "Данные" do
      attributes_table_for sale do
        row('Описание услуги') { |b| sale.description.html_safe}
        row('Изображение маленькое') do
          image_tag sale.image_url
        end
      end
    end
    active_admin_comments
  end

   sidebar "Детали", only: :show do
    attributes_table_for sale do
      row('Приоритет') { |b| sale.rang}
    end
  end

  index do
    column("Название"){|sale| sale.name}
    column("Приоритет"){|sale| sale_category.rang}
    column "Дата создания", :created_at
    actions
  end
  


end
