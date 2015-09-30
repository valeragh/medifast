class MessagesController < ApplicationController
  before_filter :authenticate_user!
  #skip_before_filter  :verify_authenticity_token

  def create
    @conversation = Conversation.find(params[:conversation_id])
    @message = @conversation.messages.build(message_params)
    @message.user_id = current_user.id
    @message.save!
    if current_user.role != 'doctor'
      UserMailer.user_send_confirmation(@message).deliver
      UserMailer.doctor_send_confirmation(@message).deliver
      ManagerMailer.manager_conversation_user_doctor(@message).deliver
    else
      UserMailer.user_answer_confirmation(@message).deliver
      UserMailer.doctor_answer_confirmation(@message).deliver
      ManagerMailer.manager_conversation_doctor_user(@message).deliver
    end

    @path = conversation_path(@conversation)
  end

  private

  def message_params
    params.require(:message).permit(:body)
  end
end
