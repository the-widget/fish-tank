class Tag < ActiveRecord::Base
  has_many :interests
  has_many :posts, through: :interests
end