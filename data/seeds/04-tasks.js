
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { project_id: 1, description: 'Description here', notes: 'Notes here', completed: true },
        { project_id: 1, description: 'Description here', notes: 'Notes here', completed: false },
        { project_id: 1, description: 'Description here', notes: 'Notes here', completed: false },
        { project_id: 1, description: 'Description here', notes: 'Notes here', completed: false },
        { project_id: 1, description: 'Description here', notes: 'Notes here', completed: true },
        { project_id: 1, description: 'Description here', notes: 'Notes here', completed: true },
      ]);
    });
};
