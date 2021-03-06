ActiveAdmin.register_page "Dashboard" do

  menu priority: 1, label: proc{ I18n.t("active_admin.dashboard") }

  content title: proc{ I18n.t("active_admin.dashboard") } do
    columns do


      column do
        panel "Записи на прием" do
          table_for Record.order(created_at: :desc).limit(10) do
            column("Дата создания"){|record| l record.created_at, format: :short}
            column("Имя"){|record| record.name }
            column("Телефон"){|record| record.phone}
            column("Email"){|record| record.email}
            column("Услуга"){|record| record.service_category.present? ? (record.service_category.name) : "Нет в системе"}
            column("Клиника"){|record| record.clinic.present? ? (record.clinic.address) : "Нет в системе"}
            column("Статус"){|record| status_tag(record.state)}
          end
        end

        panel "Консультации" do
          table_for Consultation.order(created_at: :desc).limit(10) do
            column("Дата создания"){|consultation| l consultation.created_at, format: :short}
            column("Имя"){|consultation| consultation.name }
            column("Телефон"){|consultation| consultation.phone}
            column("Email"){|consultation| consultation.email}
            column("Услуга"){|consultation|  consultation.service_category.present? ? (consultation.service_category.name) : "Нет в системе"}
            column("Вопрос"){|consultation| consultation.description.split(/\s+/).slice(0,10).join(' ')}
            column("Статус"){|consultation| status_tag(consultation.state)}
          end
        end

        panel "Письма" do
          table_for Letter.order(created_at: :desc).limit(10) do
            column("Дата создания"){|letter| l letter.created_at, format: :short}
            column("Имя"){|letter| letter.name }
            column("Телефон"){|letter| letter.name }
            column("Email"){|letter| letter.email}
            column("Сообщение"){|letter| letter.description.split(/\s+/).slice(0,10).join(' ')}
            column("Статус"){|letter| status_tag(letter.state)}
          end
        end

        panel "Ответы на вакансии" do
          table_for Answer.order(created_at: :desc).limit(10) do
            column("Дата создания"){|answer| l answer.created_at, format: :short}
            column("Имя"){|answer| answer.name }
            column("Телефон"){|answer| answer.phone}
            column("Вакансия"){|answer| answer.vacancy.present? ? (answer.vacancy.name) : "Нет в системе"}
            column("Статус"){|answer| status_tag(answer.state)}
          end
        end
      end


    end
  end # content
end