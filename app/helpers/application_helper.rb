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
end
