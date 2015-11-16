# Change this to your host. See the readme at https://github.com/lassebunk/dynamic_sitemaps
# for examples of multiple hosts and folders.
host "medifast.com.ua"

sitemap :site do
  url root_url, last_mod: Time.now, change_freq: "daily", priority: 1.0
  url about_us_url, last_mod: Time.now, change_freq: "daily", priority: 1.0
  url faqs_url, last_mod: Time.now, change_freq: "daily", priority: 1.0
  url vacansies_url, last_mod: Time.now, change_freq: "daily", priority: 1.0
  url personals_url, last_mod: Time.now, change_freq: "daily", priority: 1.0
  url records_url, last_mod: Time.now, change_freq: "daily", priority: 1.0
  url letters_url, last_mod: Time.now, change_freq: "daily", priority: 1.0
  url consultations_url, last_mod: Time.now, change_freq: "daily", priority: 1.0
  url answers_url, last_mod: Time.now, change_freq: "daily", priority: 1.0
  url new_user_registration_url, last_mod: Time.now, change_freq: "daily", priority: 1.0
  url new_user_session_url, last_mod: Time.now, change_freq: "daily", priority: 1.0
  url news_url, last_mod: Time.now, change_freq: "daily", priority: 1.0
  Post.all.each do |post|
    url show_news_url(post[:slug]), last_mod: post.updated_at, priority: 1.0
  end
  url doctors_url, last_mod: Time.now, change_freq: "daily", priority: 1.0
  Doctor.all.each do |doctor|
    url show_doctors_url(doctor[:slug]), last_mod: doctor.updated_at, priority: 1.0
  end
  url contacts_url, last_mod: Time.now, change_freq: "daily", priority: 1.0
  City.all.each do |city|
    url contacts_city_url(city[:slug]), last_mod: city.updated_at, priority: 1.0
    city.clinics.each do |clinic|
      url contacts_clinic_url(city[:slug], clinic[:slug]), last_mod: clinic.updated_at, priority: 1.0
    end
  end
  url procedures_url, last_mod: Time.now, change_freq: "daily", priority: 1.0
  ServiceCategory.all.each do |service_category|
    url procedure_category_url(service_category[:slug]), last_mod: service_category.updated_at, priority: 1.0
    service_category.services.each do |service|
      url procedure_url(service_category[:slug], service[:slug]), last_mod: service.updated_at, priority: 1.0
    end
  end

end

# You can have multiple sitemaps like the above – just make sure their names are different.

# Automatically link to all pages using the routes specified
# using "resources :pages" in config/routes.rb. This will also
# automatically set <lastmod> to the date and time in page.updated_at:
#
#   sitemap_for Page.scoped

# For products with special sitemap name and priority, and link to comments:
#
#   sitemap_for Product.published, name: :published_products do |product|
#     url product, last_mod: product.updated_at, priority: (product.featured? ? 1.0 : 0.7)
#     url product_comments_url(product)
#   end

# If you want to generate multiple sitemaps in different folders (for example if you have
# more than one domain, you can specify a folder before the sitemap definitions:
#
#   Site.all.each do |site|
#     folder "sitemaps/#{site.domain}"
#     host site.domain
#
#     sitemap :site do
#       url root_url
#     end
#
#     sitemap_for site.products.scoped
#   end

# Ping search engines after sitemap generation:
#
ping_with "http://#{host}/sitemap.xml"