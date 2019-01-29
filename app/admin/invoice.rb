ActiveAdmin.register Invoice do
  menu label: "Номер карты", priority: 4, parent: "Аптеки", parent_priority: 4
  permit_params :name, :number
  actions :all, except: [:show]

  filter :name, label: 'Имя'
  filter :number, label: 'Номер карты'

  form do |f|
    f.inputs 'Имя' do
      f.input :name
    end
    f.inputs 'Номер карты' do
      f.input :number
    end
    f.actions
  end

  index do
    column("Имя"){|invoice| invoice.name}
    column("Номер карты"){|invoice| invoice.number}
    column "Дата создания", :created_at
    actions
  end

end
