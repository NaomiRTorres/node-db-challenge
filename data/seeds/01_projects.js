
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1, 
          name: 'Building Apis',
          description: 'In this project, we will be building apis',
          completed: false,
          tasks: [],
          resources: []
        },
        {
          id: 2, 
          name: 'Building backend',
          description: 'In this project, we will build backend',
          completed: false,
          tasks: [],
          resources: []
        },
        {
          id: 3, 
          name: 'Building for lambda school',
          description: 'In this module, we are building projects to be endorsed by Lambda',
          completed: false,
          tasks: [],
          resources: []
        }
      ]);
    });
};
