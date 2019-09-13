
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', row => {

        row.increments(); //ID auto increments

        row
            .string('name', 100)
            .unique()
            .notNullable()

        row
            .string('description', 500)

        row
            .boolean(false)    
    })

    .createTable('resources', row => {

        row.increments();

        row
            .string('name', 100)
            .unique()
            .notNullable()

        row
            .string('description')
    })

    .createTable('project-resources', row => {

        //Foreign Keys
        row
            .integer('project_id', 100)
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

        row
            .integer('resource_id', 100)
            .unsigned()
            .references('id')
            .inTable('resources')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

            row.primary(['project_id', 'resource_id'])
    })
        
    .createTable('tasks', row => {

        row.increments();
            
        //Foreign Keys
        row
            .integer('project_id', 100)
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

        row
            .string('description', 500)
            .notNullable()
        row
            .string('notes', 1000)
        
        row
            .boolean(false)
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropIfTableExists('tasks')
        .dropIfTableExists('project-resources')
        .dropIfTableExists('resources')
        .dropIfTableExists('projects')
};
