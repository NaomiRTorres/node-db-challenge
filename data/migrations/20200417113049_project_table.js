
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
      tbl.integer('id')
      .primary()
      .unique();
      
      tbl.string('project_name', 128)
      .unique()
      .notNullable();

      tbl.string('description', 255);

      tbl.boolean('completed').defaultsTo(false).notNullable()
  })
  
  .createTable('tasks', tbl => {
      tbl.integer('id')
      .primary()
      .unique();
      
      tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');

      tbl.string('task_description', 255)
      .notNullable();

      tbl.string('notes', 255);

      tbl.boolean('completed_task').defaultsTo(false).notNullable();
  })

  .createTable('resources', tbl => {
      tbl.integer('id')
      .primary()
      .unique();
      
      tbl.integer('project_resource_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');

      tbl.string('resource_name', 255)
      .unique()
      .notNullable();

      tbl.string('res_description', 255);
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('projects');
};
