json.array!(@orders) do |order|
  json.extract! order, :id, :name, :address, :email, :pay_type, :shipping_type, :phone
  json.url order_url(order, format: :json)
end
