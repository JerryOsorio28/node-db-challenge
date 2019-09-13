
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'Project 1', description: 'Description Here', completed: false }, //1
        { name: 'Project 2', description: 'Description Here', completed: true }, //2
        { name: 'Project 3', description: 'Description Here', completed: false }, //3
        { name: 'Project 4', description: 'Description Here', completed: true }, //4
        { name: 'Project 5', description: 'Description Here', completed: false }, //5
      ]);
    });
};
