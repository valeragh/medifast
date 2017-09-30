class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :conversations, :foreign_key => :sender_id, :dependent => :destroy
  belongs_to :clinic
  mount_uploader :image_url, ImageUploader

  validates :name, :email, presence: true
  validates :password, :password_confirmation, presence: true, on: :create
  #validates :password, confirmation: true

  RANG_TYPES = [ "Показать", "Скрыть" ]

  def role?(r)
    role.include? r.to_s
  end

end
