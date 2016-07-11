class PostsController < ApplicationController
  before_filter :authenticate_user!, only: [:create, :upvote, :downvote]

  def index
    @user = current_user
    respond_with Post.all
  end

  def create
    respond_with current_user.posts.create(post_params)
  end

  def show
    respond_with Post.find(params[:id])
  end

  def upvote
    post = Post.find(params[:id])
    if !!post.post_votes.find_by(user_id: current_user.id)
      respond_with post
    else 
      post.post_votes.create(user_id: current_user.id)
      post.increment!(:upvotes)
      respond_with post
    end
  end

  def downvote
    post = Post.find(params[:id])
    if !!post.post_votes.find_by(user_id: current_user.id)
      respond_with post
    else 
      post.post_votes.create(user_id: current_user.id)
      post.decrement!(:upvotes)
      respond_with post
    end
  end

  private
  def post_params
    params.require(:post).permit(:link, :title, tags_attributes: [:name])
  end

end
