
exports.seed = function(knex) {
  return knex('resources').del()
    .then(function () {
      return knex('projects').insert([
        {
          id: 1, 
          project_name: 'Building Apis',
          description: 'In this project, we will be building apis',
          completed: false,
        },
        {
          id: 2, 
          project_name: 'Building backend',
          description: 'In this project, we will build backend',
          completed: false,
        },
        {
          id: 3, 
          project_name: 'Building for lambda school',
          description: 'In this module, we are building projects to be endorsed by Lambda',
          completed: false,
        }
      ]);
    });  
};
