ActiveAdmin.register Vacancy do

  permit_params :name, :description, :status
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
    f.inputs 'Статус' do
      f.input :status, as: :select, collection: Vacancy::STATUS_TYPES
    end
    actions
  end

  index do
    column("Специальность"){|vacancy| vacancy.name}
    column("Требование"){|vacancy| vacancy.description.split(/\s+/).slice(0,10).join(' ').html_safe}
    column("Статус"){|vacancy| vacancy.status}
    column "Дата создания", :created_at
    actions
  end



end
