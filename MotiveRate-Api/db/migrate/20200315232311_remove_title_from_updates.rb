class RemoveTitleFromUpdates < ActiveRecord::Migration[6.0]
  def change

    remove_column :updates, :title, :string
  end
end
