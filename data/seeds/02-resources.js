
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { name: 'Resource Name Here', description: 'Description here'},
        { name: 'Resource Name Here', description: 'Description here'},
        { name: 'Resource Name Here', description: 'Description here'},
        { name: 'Resource Name Here', description: 'Description here'},
        { name: 'Resource Name Here', description: 'Description here'},
        { name: 'Resource Name Here', description: 'Description here'},
      ]);
    });
};
