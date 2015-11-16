class DropSurveyTable < ActiveRecord::Migration
  def up
    drop_table :survey_answers
    drop_table :survey_attempts
    drop_table :survey_options
    drop_table :survey_questions
    drop_table :survey_surveys
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
