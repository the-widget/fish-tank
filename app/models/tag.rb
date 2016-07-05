class Tag < ActiveRecord::Base
  has_many :interests
  has_many :posts, through: :interests

  def as_json(options= {})
    super(options.merge(include: [:posts]))
  end

end