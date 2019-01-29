ActiveAdmin.register Sale do
  menu label: "Акции", priority: 1, parent: "Информация", parent_priority: 8
  permit_params :name, :rang, :image_url, :description

  filter :name, label: 'Название акции'
  filter :rang, label: 'Приоритет', as: :select, collection: Sale::RANG_TYPES
  filter :created_at, label: 'Дата создания'

  form do |f|
    f.inputs 'Заголовок' do
      f.input :name
    end
    f.inputs 'Приоритет' do
      f.input :rang, as: :select, collection: Sale::RANG_TYPES
    end
    f.inputs 'Описание скидки' do
      f.input :description, as: :wysihtml5, commands: [ :bold, :italic, :underline, :ul, :ol, :outdent, :indent ], blocks: :basic
    end
    f.inputs 'Изображение 500X500', :multipart => true do
      f.input :image_url
    end
    f.actions
  end

  show title: :name do
    panel "Данные" do
      attributes_table_for sale do
        row('Описание скидки') { |b| sale.description.html_safe}
        row('Изображение') do
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
    column("Заголовок"){|sale| sale.name}
    column("Приоритет"){|sale| sale.rang}
    column "Дата создания", :created_at
    actions
  end



end
