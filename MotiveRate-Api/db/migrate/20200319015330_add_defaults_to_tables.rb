class AddDefaultsToTables < ActiveRecord::Migration[6.0]
  def change
    change_column_default(
      :updates,
      :supporters,
      0
    )
    change_column_default(
      :goals,
      :completed,
      false
    )
    change_column_default(
      :goals,
      :archived,
      false
    )
  end
end
