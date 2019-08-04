# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  current_sign_in_at     :datetime
#  current_sign_in_ip     :inet
#  description            :text
#  email                  :string(255)      default(""), not null
#  encrypted_password     :string(255)      default(""), not null
#  image_url              :string(255)
#  last_sign_in_at        :datetime
#  last_sign_in_ip        :inet
#  name                   :string(255)
#  position               :string(255)
#  provider               :string(255)
#  rang                   :string(255)
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string(255)
#  role                   :string(255)
#  sign_in_count          :integer          default(0), not null
#  uid                    :string(255)
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  clinic_id              :integer
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :conversations, :foreign_key => :sender_id, :dependent => :destroy
  belongs_to :clinic
  mount_uploader :image_url, ImageUploader

  validates :name, :email, presence: true

  RANG_TYPES = [ "Показать", "Скрыть" ]

  def role?(r)
    role.include? r.to_s
  end

end
