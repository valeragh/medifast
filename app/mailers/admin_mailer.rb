class AdminMailer < ActionMailer::Base
  default to: Proc.new { User.where("role = 'admin'").pluck(:email) },
          from: "klinikmedifast@gmail.com"

  def answer_admin_confirmation(answer)
    @user = answer

    mail(subject: "Новый ответ на вакансию")
  end

  def letter_admin_confirmation(letter)
    @user = letter

    mail(subject: "Новое письмо")
  end

  def order_admin_confirmation(order)
    @user = order

    mail(subject: "Новый заказ")
  end
end
