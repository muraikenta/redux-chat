class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :messages_from_me, class_name: :Message, foreign_key: :from_user_id
  has_many :messages_to_me, class_name: :Message, foreign_key: :to_user_id

  validates :name, presence: true
end
