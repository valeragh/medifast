module ApplicationHelper
  def active_class(link_path)
    current_page?(link_path) ? "active" : ""
  end

  def isactive(route)
    'active' if request.path.try(:starts_with?, route)
  end

  def hidden_div_if(condition, attributes = {}, &block)
    if condition
      attributes["style"] = "display:none;"
    end
    content_tag("div", attributes, &block)
  end

  def embed(youtube_url)
    youtube_id = youtube_url.split("=").last
    "https://www.youtube.com/embed/#{youtube_id}?showinfo=0"
  end

  def embed_with_frame(youtube_url)
    youtube_id = youtube_url.split("=").last
    content_tag(:iframe, nil, src: "https://www.youtube.com/embed/#{youtube_id}")
  end
end
