FactoryGirl.define do
  factory :user do
  	email { FFaker::Internet.email }
  	name "MyString"
    password "password"
    password_confirmation "password"
  end

  factory :invalid_user, parent: :user do
	  email nil
  end
end