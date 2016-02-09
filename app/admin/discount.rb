ActiveAdmin.register Discount do

  permit_params :name, :status, :image_url, :description
  actions :all

  filter :name, label: 'Название акции'
  filter :status, label: 'Статус', as: :select, collection: Discount::STATUS_TYPES
  filter :created_at, label: 'Дата создания'

  form do |f|
    f.inputs 'Заголовок' do
      f.input :name
    end
    f.inputs 'Статус' do
      f.input :status, as: :select, collection: Discount::STATUS_TYPES
    end
    f.inputs 'Описание скидки' do
      f.input :description, as: :wysihtml5, commands: [ :bold, :italic, :underline, :ul, :ol, :outdent, :indent ], blocks: :basic
    end
    f.inputs 'Изображение 1684X893', :multipart => true do
      f.input :image_url
    end
    f.actions
  end

  show title: :name do
    panel "Данные" do
      attributes_table_for discount do
        row('Описание скидки') { |b| discount.description.html_safe}
        row('Изображение') do
          image_tag discount.image_url
        end
      end
    end
    active_admin_comments
  end

   sidebar "Детали", only: :show do
    attributes_table_for discount do
      row('Статус') { |b| discount.status}
    end
  end

  index do
    column("Заголовок"){|discount| discount.name}
    column("Статус"){|discount| discount.status}
    column "Дата создания", :created_at
    actions
  end
end
