
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'Project Name Here', description: 'Description Here', completed: false },
        { name: 'Project Name Here', description: 'Description Here', completed: false },
        { name: 'Project Name Here', description: 'Description Here', completed: false },
        { name: 'Project Name Here', description: 'Description Here', completed: false },
        { name: 'Project Name Here', description: 'Description Here', completed: false },
      ]);
    });
};
