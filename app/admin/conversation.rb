ActiveAdmin.register Conversation do

  actions :index, :show, :destroy

  index do
    column("Отправитель"){|conversation| conversation.sender.name}
    column("Доктор Онлайн"){|conversation| conversation.recipient.name}
    column("Создано"){|conversation| l conversation.created_at, format: :long}
    actions
  end

  filter :sender, label: "Отправитель", as: :select, collection: proc { User.find(Conversation.pluck(:sender_id)).map { |m| [m.name, m.id] } }
  filter :recipient, label: "Доктор онлайн", as: :select, collection: proc { User.find(Conversation.pluck(:recipient_id)).map { |m| [m.name, m.id] } }
  filter :created_at

  show title: :id do
    panel "Данные" do
      table_for conversation.messages do
        column('Сообщение') do |message|
          message.body
        end
        column('Отправитель') do |message|
          message.user.name
        end
        column('Дата') do |message|
          l message.created_at, format: :short
        end
      end
    end
    active_admin_comments
  end

   sidebar "Детали", only: :show do
    attributes_table_for conversation do
      row('Отправитель') { |b| conversation.sender.name}
      row('Доктор онлайн') { |b| conversation.recipient.name}
      row('Создано') { |b| conversation.created_at}
    end
  end


end
