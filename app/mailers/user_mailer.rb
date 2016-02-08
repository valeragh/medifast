class UserMailer < ActionMailer::Base
  default from: "klinikmedifast@gmail.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.signup_confirmation.subject
  #
  def record_admin_confirmation(record)
    @user = record

    mail to: "klinikmedifast@gmail.com", subject: "Новая запись на прием"
  end

  def record_confirmation(record)
    @user = record

    mail to: record.email, subject: "Подтверждения запроса на запись в клинику Медифаст"
  end

  def consultation_admin_confirmation(consultation)
    @user = consultation

    mail to: "klinikmedifast@gmail.com", subject: "Новая запись на консультацию"
  end

  def consultation_confirmation(consultation)
    @user = consultation

    mail to: consultation.email, subject: "Подтверждения запроса на консультацию в клинику Медифаст"
  end



  def answer_confirmation(answer)
    @user = answer

    mail to: answer.email, subject: "Подтверждения запроса на вакансию в клинику Медифаст"
  end

  def letter_confirmation(letter)
    @user = letter
    attachments.inline['foto_email_template_letter.jpg'] = File.read("#{Rails.root}/app/assets/images/foto_email_template_letter.jpg")
    mail to: letter.email, subject: "Подтверждения отправки письма в клинику Медифаст"
  end

  def letter_admin_confirmation(letter)
    @user = letter

    mail to: "klinikmedifast@gmail.com", subject: "Новое письмо"
  end

  def order_confirmation(order)
    @user = order
    attachments.inline['foto_email_template_letter.jpg'] = File.read("#{Rails.root}/app/assets/images/foto_email_template_letter.jpg")
    mail to: order.email, subject: "Подтверждения получения заказа аптеки Медифаст"
  end

  def order_admin_confirmation(order)
    @user = order

    mail to: "klinikmedifast@gmail.com", subject: "Новый заказ"
  end

  def user_send_confirmation(message)
    @user = message
    attachments.inline['foto_email_template.jpg'] = File.read("#{Rails.root}/app/assets/images/foto_email_template.jpg")
    mail to: message.user.email, subject: "Подтверждения отправки вопроса доктору #{message.conversation.recipient.name} клиники Медифаст"
  end

  def doctor_send_confirmation(message)
    @user = message

    mail to: message.conversation.recipient.email, subject: "У Вас новый вопрос доктор #{message.conversation.recipient.name}"
  end

  def user_answer_confirmation(message)
    @user = message
    attachments.inline['foto_email_template.jpg'] = File.read("#{Rails.root}/app/assets/images/foto_email_template.jpg")
    mail to: message.conversation.sender.email, subject: "Ответ на Ваш вопрос от доктора #{message.conversation.recipient.name} клиники Медифаст"
  end

  def doctor_answer_confirmation(message)
    @user = message

    mail to: message.conversation.recipient.email, subject: "Доктор #{message.conversation.recipient.name} Ваше письмо отправлено"
  end


end
