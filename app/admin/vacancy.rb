ActiveAdmin.register Vacancy do


  permit_params :name, :description
  config.filters = false

  menu :priority => 3
  actions :all, except: [:show]


  form do |f|
    f.inputs 'Специальность' do
      f.input :name
    end
    f.inputs 'Требование' do
      f.input :description, as: :wysihtml5, commands: [ :bold, :italic, :underline, :ul, :ol, :outdent, :indent ], blocks: :basic
    end
    actions
  end

  index do
    column("Специальность"){|review| review.name}
    column("Требование"){|review| review.description.html_safe}
    column "Дата создания", :created_at
    actions
  end



end
