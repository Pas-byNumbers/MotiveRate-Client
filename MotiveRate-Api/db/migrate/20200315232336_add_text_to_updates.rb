class AddTextToUpdates < ActiveRecord::Migration[6.0]
  def change
    add_column :updates, :text, :string
  end
end
