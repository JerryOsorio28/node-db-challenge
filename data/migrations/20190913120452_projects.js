
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {

        tbl.increments(); //ID auto increments

        tbl
            .string('name', 100)
            .notNullable()

        tbl
            .string('description', 500)

        tbl
            .boolean('completed')
            .notNullable()    
    })

    .createTable('resources', tbl => {

        tbl.increments();

        tbl
            .string('name', 100)
            .notNullable()

        tbl
            .string('description')
    })

    .createTable('project-resources', tbl => {

        //Foreign Keys
        tbl
            .integer('project_id', 100)
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

        tbl
            .integer('resource_id', 100)
            .unsigned()
            .references('id')
            .inTable('resources')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

        tbl.primary(['project_id', 'resource_id']) // the combination of the two keys becomes our primary key will enforce unique combinations of ids
    })
        
    .createTable('tasks', tbl => {

        //Foreign Keys
        tbl
            .integer('project_id', 100)
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE') 

        tbl
            .string('description', 500)
            .notNullable();
        tbl
            .string('notes', 1000)
        
        tbl
            .boolean('completed')
            .notNullable()

    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('project-resources')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
