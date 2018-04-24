ActiveAdmin.register Product do

  permit_params :title, :status, :unit, :image_url, :description, :price, :product_category_id
  actions :all

  filter :title, label: 'Название лекарства'
  filter :status, label: 'Статус', as: :select, collection: Product::STATUS_TYPES
  #filter :product_category, label: 'Категория', as: :select, collection: proc { ProductCategory.find(Product.pluck(:product_category_id)).map { |m| [m.name, m.id] } }
  filter :created_at, label: 'Дата создания'

  form do |f|
    f.inputs 'Название лекарства' do
      f.input :title
    end
    f.inputs 'Категория' do
      f.input :product_category_id, as: :select, collection: ProductCategory.all.map { |m| [m.name, m.id] }
    end
    f.inputs 'Единица измерения' do
      f.input :unit
    end
    f.inputs 'Стоимость лекарства' do
      f.input :price
    end
    f.inputs 'Статус' do
      f.input :status, as: :select, collection: Product::STATUS_TYPES
    end
    f.inputs 'Описание лекарства' do
      f.input :description, as: :wysihtml5, commands: [ :bold, :italic, :underline, :ul, :ol, :outdent, :indent ], blocks: :basic
    end
    f.inputs 'Изображение 656X478', :multipart => true do
      f.input :image_url
    end
    f.actions
  end

  show title: :title do
    panel "Данные" do
      attributes_table_for product do
        row('Описание лекарства') { |b| product.description.html_safe}
        row('Изображение лекарства') do
          image_tag product.image_url
        end
      end
    end
    active_admin_comments
  end

   sidebar "Детали", only: :show do
    attributes_table_for product do
      row('Статус') { |b| product.status}
      row('Единица измерения') { |b| product.unit}
      row("Категория"){|b| product.product_category.present? ? (product.product_category.name) : "Нет в системе"}
    end
  end

  index do
    column("Название лекарства"){|product| product.title}
    column("Статус"){|product_category| product_category.status}
    column("Категория"){|product| product.product_category.present? ? (product.product_category.name) : "Нет в системе"}
    column "Дата создания", :created_at
    actions
  end

end
