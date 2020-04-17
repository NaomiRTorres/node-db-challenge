
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          id: 1,
          project_resource_id: 3,
          name: 'Lambda Student',
          description: 'a soon to be hired developer'
        },
        {
          id: 2, 
          project_resource_id: 2,
          name: 'MacBook Pro',
          description: 'an amazing and expensive laptop'
        },
        {
          id: 3, 
          project_resource_id: 1,
          name: 'Conference Room',
          description: 'a room to use for conferences'
        }
      ]);
    });
};
