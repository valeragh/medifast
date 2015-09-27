class UserMailer < ActionMailer::Base
  default from: "medifastklinik@gmail.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.signup_confirmation.subject
  #
  def record_admin_confirmation(record)
    @user = record

    mail to: "medifastklinik@gmail.com", subject: "Новая запись на прием"
  end

  def record_confirmation(record)
    @user = record

    mail to: record.email, subject: "Подтверждения запроса на запись в клинику Медифаст"
  end

  def consultation_admin_confirmation(consultation)
    @user = consultation

    mail to: "medifastklinik@gmail.com", subject: "Новая запись на консультацию"
  end

  def consultation_confirmation(consultation)
    @user = consultation

    mail to: consultation.email, subject: "Подтверждения запроса на консультацию в клинику Медифаст"
  end

  def answer_admin_confirmation(answer)
    @user = answer

    mail to: "medifastklinik@gmail.com", subject: "Новый ответ на вакансию"
  end

  def answer_confirmation(answer)
    @user = answer

    mail to: answer.email, subject: "Подтверждения запроса на вакансию в клинику Медифаст"
  end

  def letter_confirmation(letter)
    @user = letter

    mail to: letter.email, subject: "Подтверждения отправки письма в клинику Медифаст"
  end

  def letter_admin_confirmation(letter)
    @user = letter

    mail to: "medifastklinik@gmail.com", subject: "Новое письмо"
  end
end
