module ApplicationHelper
  private

  def number_of_people_who_also_answered_count option_id
    Survey::Answer.where(option_id: option_id).count
  end
end
