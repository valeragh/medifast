class NewsController < ApplicationController
  def index
    @posts = Post.all
    @posts_slide = Post.all.sample(5)
  end

  def show
    @post = Post.friendly.find(params[:id])
  end

  def stacionar
    @posts = Post.where(("category = 'Стационар'"))
    @posts_slide = Post.all.sample(5)
  end

  def policlinica
    @posts = Post.where(("category = 'Поликлиника'"))
    @posts_slide = Post.all.sample(5)
  end

  def filialy
    @posts = Post.where(("category = 'Филиалы'"))
    @posts_slide = Post.all.sample(5)
  end

  def specialisty
    @posts = Post.where(("category = 'Специалисты'"))
    @posts_slide = Post.all.sample(5)
  end

end
