class TagsController < ApplicationController
  before_filter :authenticate_user!, only: [:create]


  def index
    respond_with Tag.all
  end

  def create
    post = Post.find(params[:post_id])
    post.tags << Tag.find_or_create_by(tag_params)
    respond_with post
  end

  def show
    respond_with Tag.find(params[:id])
  end

  private
  def tag_params
    params.require(:tag).permit(:name)
  end

end
