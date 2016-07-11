class Post < ActiveRecord::Base
  has_many :interests
  has_many :tags, through: :interests
  has_many :comments
  has_many :post_votes
  belongs_to :user
  accepts_nested_attributes_for :tags

  def as_json(options= {})
    super(options.merge(:include => [:user, :post_votes, :tags, comments: {include: :user}]))
  end
  
end
