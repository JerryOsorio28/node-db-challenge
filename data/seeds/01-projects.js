
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { project_name: 'Project 1', project_description: 'Description Here', completed: false }, //1
        { project_name: 'Project 2', project_description: 'Description Here', completed: true }, //2
        { project_name: 'Project 3', project_description: 'Description Here', completed: false }, //3
        { project_name: 'Project 4', project_description: 'Description Here', completed: true }, //4
        { project_name: 'Project 5', project_description: 'Description Here', completed: false }, //5
      ]);
    });
};
