class Message < ApplicationRecord
  validates :from_user_id, presence: true
  validates :to_user_id, presence: true
  validates :body, presence: true
end
