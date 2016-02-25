class DruggistMailer < ActionMailer::Base
  default to: Proc.new { User.where("role = 'druggist'").pluck(:email) },
          from: "klinikmedifast@gmail.com"

  def order_admin_confirmation(order)
    @user = order

    mail(subject: "Новый заказ")
  end
end
