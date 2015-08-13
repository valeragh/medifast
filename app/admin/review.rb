ActiveAdmin.register Review do


  permit_params :name, :description
  config.filters = false

  menu :priority => 3
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
