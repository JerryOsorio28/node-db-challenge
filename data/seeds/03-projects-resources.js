
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project-resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project-resources').insert([
        { project_id: 0, resource_id: 0 }
      ]);
    });
};
