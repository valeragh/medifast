ActiveAdmin.register Review do
  menu label: "Отзывы", priority: 3, parent: "Информация", parent_priority: 8

  permit_params :name, :description
  config.filters = false

  actions :all, except: [:show]


  form do |f|
    f.inputs 'Имя' do
      f.input :name
    end
    f.inputs 'Отзыв' do
      f.input :description
    end
    actions
  end

  index do
    column("Имя"){|review| review.name}
    column("Отзыв"){|review| review.description}
    column "Дата создания", :created_at
    actions
  end


end
