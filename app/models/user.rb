class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :conversations, :foreign_key => :sender_id
  belongs_to :clinic
  mount_uploader :image_url, ImageUploader

  validates :name, presence: true

  def role?(r)
    role.include? r.to_s
  end


end
