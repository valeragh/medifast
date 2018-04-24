ActiveAdmin.register Pharmacy do


  permit_params :latitude, :longitude, :address, :description, :rang, :title, :city_id, :contacts

  menu :priority => 3
  actions :all

  #filter :city, label: 'Город', as: :select, collection: proc { City.find(Pharmacy.pluck(:city_id)).map { |m| [m.name, m.id] } }

  form do |f|
    f.inputs 'Адрес' do
      f.input :address, palceholder: "Скопировать с Google map"
    end
    f.inputs 'Показать в шапке сайта' do
      f.input :rang, as: :select, collection: Pharmacy::RANG_TYPES
    end
    f.inputs 'Контактные данные' do
      f.input :contacts, as: :wysihtml5, commands: [ :bold, :italic, :underline, :ul, :ol, :outdent, :indent ], blocks: :basic
    end
    f.inputs 'Описание' do
      f.input :description, as: :wysihtml5, commands: [ :bold, :italic, :underline, :ul, :ol, :outdent, :indent ], blocks: :basic
    end
    f.inputs 'Город' do
      f.input :city_id, as: :select, collection: City.all.map { |m| [m.name, m.id] }
    end
    f.inputs 'Компания' do
      f.input :title, palceholder: "Как и описание будет использоваться для карты"
    end
    actions
  end

  show title: :title do
    panel "Данные" do
      attributes_table_for pharmacy do
        row('Адрес') { |b| pharmacy.address}
        row('Описание') { |b| pharmacy.description.html_safe}
        row('Показать в шапке сайта') { |b| pharmacy.rang}
        row('Город') { |b| pharmacy.city.present? ? (pharmacy.city.name) : "Нет в системе"}
      end
    end
    active_admin_comments
  end

   sidebar "Детали", only: :show do
    attributes_table_for pharmacy do
      row("Контакты"){|b| pharmacy.contacts.html_safe}
    end
  end

  index do
    column("Адрес"){|pharmacy| pharmacy.address}
    column("Показать в шапке сайта"){|pharmacy| pharmacy.rang}
    column("Город"){|pharmacy| pharmacy.city.present? ? (pharmacy.city.name) : "Нет в системе"}
    column("Контакты"){|pharmacy| pharmacy.contacts.html_safe}
    actions
  end


end
