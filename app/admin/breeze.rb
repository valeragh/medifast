ActiveAdmin.register Breeze do


  permit_params :name, :rang, :image_url, :description
  actions :all

  filter :name, label: 'Заголовок рекламы'
  filter :rang, label: 'Приоритет', as: :select, collection: Breeze::RANG_TYPES
  filter :created_at, label: 'Дата создания'

  form do |f|
    f.inputs 'Заголовок рекламы' do
      f.input :name
    end
    f.inputs 'Приоритет' do
      f.input :rang, as: :select, collection: Breeze::RANG_TYPES
    end
    f.inputs 'Описание рекламы' do
      f.input :description, as: :wysihtml5, commands: [ :bold, :italic, :underline, :ul, :ol, :outdent, :indent ], blocks: :basic
    end
    f.inputs 'Изображение 656X478', :multipart => true do
      f.input :image_url
    end
    f.actions
  end

  show title: :name do
    panel "Данные" do
      attributes_table_for breeze do
        row('Заголовок рекламы') { |b| breeze.description.html_safe}
        row('Изображение') do
          image_tag breeze.image_url
        end
      end
    end
    active_admin_comments
  end

   sidebar "Детали", only: :show do
    attributes_table_for breeze do
      row('Приоритет') { |b| breeze.rang}
    end
  end

  index do
    column("Название"){|breeze| breeze.name}
    column("Приоритет"){|breeze| breeze.rang}
    column "Дата создания", :created_at
    actions
  end


end
