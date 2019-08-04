ActiveAdmin.register MedifastVideo do
  menu label: "Видео", priority: 5, parent: "Информация", parent_priority: 8
  
  permit_params :video_url, :category, :title, :description, :video_id

  filter :title
  filter :created_at
  filter :video_url
  filter :category, as: :select, collection: MedifastVideo::CATEGORY_TYPES

  index do
    selectable_column
    column("Дата создания"){|medifast_video| l medifast_video.created_at, format: :short}
    column :title
    column("Ссылка"){|medifast_video| link_to medifast_video.video_url, medifast_video.video_url, html_options: { target: :blank } }
    column :category
    actions
  end

  form do |f|
    f.inputs 'Вставте ссылку с YouTube' do
      f.input :video_url, hint: "Например: https://www.youtube.com/watch?v=HdjO8HKc14k"
    end
    f.inputs do
      f.input :title
    end
    f.inputs do
      f.input :description
    end
    f.inputs do
      f.input :category, as: :select, collection: MedifastVideo::CATEGORY_TYPES
    end
    f.actions
  end

  show do
    panel "Описание" do
      attributes_table_for medifast_video do
        row :description
      end
    end
    panel "Видео" do
      attributes_table_for medifast_video do
        row('Видео') { |b| embed_with_frame(medifast_video.video_url)}
      end
    end
    active_admin_comments
  end

  sidebar "Детали", only: :show do
    attributes_table_for medifast_video do
      row :created_at
      row :category
    end
  end
end
