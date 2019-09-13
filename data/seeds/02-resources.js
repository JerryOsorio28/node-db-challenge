
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { name: 'Resource 1', description: 'Description here'}, //1
        { name: 'Resource 2', description: 'Description here'}, //2
        { name: 'Resource 3', description: 'Description here'}, //3
        { name: 'Resource 4', description: 'Description here'}, //4
        { name: 'Resource 5', description: 'Description here'}, //5
      ]);
    });
};
