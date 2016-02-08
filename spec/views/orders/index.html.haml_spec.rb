require 'spec_helper'

describe "orders/index" do
  before(:each) do
    assign(:orders, [
      stub_model(Order,
        :name => "Name",
        :address => "MyText",
        :email => "Email",
        :pay_type => "Pay Type",
        :shipping_type => "Shipping Type",
        :phone => "Phone"
      ),
      stub_model(Order,
        :name => "Name",
        :address => "MyText",
        :email => "Email",
        :pay_type => "Pay Type",
        :shipping_type => "Shipping Type",
        :phone => "Phone"
      )
    ])
  end

  it "renders a list of orders" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
    assert_select "tr>td", :text => "Email".to_s, :count => 2
    assert_select "tr>td", :text => "Pay Type".to_s, :count => 2
    assert_select "tr>td", :text => "Shipping Type".to_s, :count => 2
    assert_select "tr>td", :text => "Phone".to_s, :count => 2
  end
end
