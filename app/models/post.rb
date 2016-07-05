class Post < ActiveRecord::Base
  has_many :interests
  has_many :tags, through: :interests
  has_many :comments
  belongs_to :user

  def as_json(options= {})
    super(options.merge(:include => [:user, :tags, comments: {include: :user}]))
  end
  
end
