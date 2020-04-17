
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('taks').insert([
        {
          id: 1,
          project_id: 1,
          description: 'task descriptions 1',
          notes: 'the task notes',
          completed: false
          },
        {
          id: 2,
          project_id: 1,
          description: 'task description 2',
          notes: 'task notes 2',
          completed: false
        },
        {
          id: 3,
          project_id: 2,
          description: 'task description 3',
          notes: 'task notes 3',
          completed: false
        },
        {
          id: 4,
          project_id: 3,
          description: 'task description 4',
          notes: 'task notes 4',
          completed: false
        }
      ]);
    });
};
