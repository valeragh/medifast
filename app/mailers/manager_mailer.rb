class ManagerMailer < ActionMailer::Base
  default to: Proc.new { User.where("role = 'manager'").pluck(:email) },
          from: "klinikmedifast@gmail.com"

  def manager_conversation_user_doctor(message)
    @user = message

    mail(subject: "Пользователь #{message.conversation.sender.name}/#{message.conversation.sender.email} вопрос Доктору #{message.conversation.recipient.name}")
  end

  def manager_conversation_doctor_user(message)
    @user = message

    mail(subject: "Доктор #{message.conversation.recipient.name} пользователю #{message.conversation.sender.name}/#{message.conversation.sender.email}")
  end
end
