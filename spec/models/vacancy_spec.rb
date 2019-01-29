# == Schema Information
#
# Table name: vacancies
#
#  id          :integer          not null, primary key
#  description :text
#  name        :string(255)
#  status      :string(255)      default("Показать")
#  created_at  :datetime
#  updated_at  :datetime
#

require 'spec_helper'

describe Vacancy do
  pending "add some examples to (or delete) #{__FILE__}"
end
