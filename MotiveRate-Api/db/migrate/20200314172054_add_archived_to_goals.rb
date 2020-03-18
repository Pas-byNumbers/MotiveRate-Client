class AddArchivedToGoals < ActiveRecord::Migration[6.0]
  def change
    add_column :goals, :archived, :boolean
  end
end
