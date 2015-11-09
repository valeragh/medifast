ActiveAdmin.register Survey::Survey do
  menu :label => I18n.t("surveys")
  permit_params(Survey::Survey::AccessibleAttributes << :survey_type)

  filter  :name,
          :as => :select,
          :collection => proc {
              Survey::Survey.select("distinct(name)").collect { |c|
                [c.name, c.name]
              }
          }
  filter :active,
         :as => :select,
         :collection => ["true", "false"]

  filter :created_at

  index do
    column :name
    column :description
    column :active
    column :attempts_number
    column :finished
    column :created_at
    actions
  end

  show title: :name do
    panel "Данные" do
      attributes_table_for survey_survey do
        row('Описание') { |b| survey_survey.description}
        row('Кол-во ответов') { |b| survey_survey.attempts_number}
        row('Дата оканчания') { |b| survey_survey.finished}
        row('Дата создания') { |b| survey_survey.created_at}
      end
    end
    active_admin_comments
  end



  form do |f|
    f.inputs I18n.t("survey_details") do
      f.input  :name
      f.input  :description
      f.input  :active, :as => :select, :collection => ["true", "false"]
      f.input  :attempts_number
    end
    f.inputs I18n.t("questions") do
      f.has_many :questions do |q|
        q.input :text
        q.has_many :options do |a|
          a.input  :text
          a.input  :correct
        end
      end
    end
    f.actions
  end

end