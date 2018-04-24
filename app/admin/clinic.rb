ActiveAdmin.register Clinic do

  permit_params :latitude, :longitude, :address, :rang, :description, :title, :city_id, :contacts, :slug
  before_filter :find_resource, :only => [:show, :edit, :update, :destroy]

  menu :priority => 3
  actions :all

  filter :city, label: 'Город', as: :select, collection: proc { City.find(Clinic.pluck(:city_id)).map { |m| [m.name, m.id] } }

  form do |f|
    f.inputs 'Адрес' do
      f.input :address, palceholder: "Скопировать с Google map"
    end
    f.inputs 'Показать в шапке сайта' do
      f.input :rang, as: :select, collection: Clinic::RANG_TYPES
    end
    f.inputs 'Контактные данные' do
      f.input :contacts, as: :wysihtml5, commands: [ :bold, :italic, :underline, :ul, :ol, :outdent, :indent ], blocks: :basic
    end
    f.inputs 'Город' do
      f.input :city_id, as: :select, collection: City.all.map { |m| [m.name, m.id] }
    end
    f.inputs 'Описание' do
      f.input :description, as: :wysihtml5, commands: [ :bold, :italic, :underline, :ul, :ol, :outdent, :indent ], blocks: :basic
    end
    f.inputs 'Компания' do
      f.input :title, palceholder: "Как и описание будет использоваться для карты"
    end
    actions
  end

  show title: :title do
    panel "Данные" do
      attributes_table_for clinic do
        row('Адрес') { |b| clinic.address}
        row('Показать в шапке сайта') { |b| clinic.rang}
        row('Город') { |b| clinic.city.present? ? (clinic.city.name) : "Нет в системе"}
        row('Описание') { |b| clinic.description.html_safe}
      end
    end
    active_admin_comments
  end

   sidebar "Детали", only: :show do
    attributes_table_for clinic do
      row("Контакты"){|b| clinic.contacts.html_safe}
    end
  end

  controller do
    def find_resource
      begin
        scoped_collection.where(slug: params[:id]).first!
      rescue ActiveRecord::RecordNotFound
        scoped_collection.find(params[:id])
      end
    end
  end

  index do
    column("Адрес"){|clinic| clinic.address}
    column("Показать в шапке сайта"){|clinic| clinic.rang}
    column("Город"){|clinic| clinic.city.present? ? (clinic.city.name) : "Нет в системе"}
    column("Контакты"){|clinic| clinic.contacts.present? ? (clinic.contacts.html_safe) : "Нет описания"}
    actions
  end

end
