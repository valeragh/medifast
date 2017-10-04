ActiveAdmin.register Order do

  permit_params :name, :email, :phone, :dop_info, :checked_out_at
  config.per_page = 10
  menu :priority => 3

  filter :created_at, label: 'Дата создания'
  filter :checked_out_at, label: 'Дата ответа'
  filter :name, label: 'Имя'
  filter :email, label: 'Email'


  scope "Все", :all, :default => true
  scope "Новый", :in_progress
  scope "Обработанный", :complete

  form do |f|
    f.inputs 'Дата ответа' do
      f.time_select :checked_out_at, :default => Time.now, :minute_interval => 15, :time_separator => "", :start_hour => 7, :start_minute => 30, :end_hour => 18, :end_minute => 30
    end
    actions
  end

  show do
    panel "Данные" do
      attributes_table_for order do
        row('Дата создания') { |b| l order.created_at, format: :long}
        row("Статус"){|b| status_tag(order.state)}
        if order.checked_out_at?
          row('Дата ответа') { |b| l order.checked_out_at, format: :short}
        else
          row('Дата ответа') { |b| order.checked_out_at}
        end
        table_for order.line_items do
          column("Продукция") do |line_item|
            line_item.product.present? ? (line_item.product.title) : "Нет в системе"
          end
          column("Количество") do |line_item|
            line_item.quantity
          end
          column("Итого") do |line_item|
            line_item.total_price
          end
        end
      end
    end
    active_admin_comments
  end

  sidebar "Детали", only: :show do
    attributes_table_for order do
      row("Имя"){|b| order.name}
      row("Email"){|b| order.email}
      row("Телефон"){|b| order.phone}
    end
  end

  index do
    column("Дата создания"){|order| l order.created_at, format: :long}
    column("Имя"){|order| order.name }
    column("Email"){|order| order.email}
    column("Телефон"){|order| order.phone}
    column("Статус"){|order| status_tag(order.state)}
    actions
  end

end
