ActiveAdmin.register Advertising do


  permit_params :name, :rang, :image_url, :description
  actions :all

  filter :name, label: 'Заголовок рекламы'
  filter :rang, label: 'Приоритет', as: :select, collection: Advertising::RANG_TYPES
  filter :created_at, label: 'Дата создания'

  form do |f|
    f.inputs 'Заголовок рекламы' do
      f.input :name
    end
    f.inputs 'Приоритет' do
      f.input :rang, as: :select, collection: Advertising::RANG_TYPES
    end
    f.inputs 'Описание рекламы' do
      f.input :description, as: :wysihtml5, commands: [ :bold, :italic, :underline, :ul, :ol, :outdent, :indent ], blocks: :basic
    end
    f.inputs 'Изображение', :multipart => true do
      f.input :image_url
    end
    f.actions
  end

  show title: :name do
    panel "Данные" do
      attributes_table_for advertising do
        row('Заголовок рекламы') { |b| advertising.description.html_safe}
        row('Изображение') do
          image_tag advertising.image_url
        end
      end
    end
    active_admin_comments
  end

   sidebar "Детали", only: :show do
    attributes_table_for advertising do
      row('Приоритет') { |b| advertising.rang}
    end
  end

  index do
    column("Название"){|advertising| advertising.name}
    column("Приоритет"){|advertising| advertising.rang}
    column "Дата создания", :created_at
    actions
  end


end
