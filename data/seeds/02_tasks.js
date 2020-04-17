
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          id: 1,
          project_id: 1,
          task_description: 'task descriptions 1',
          notes: 'the task notes',
          completed_task: false
          },
        {
          id: 2,
          project_id: 1,
          task_description: 'task description 2',
          notes: 'task notes 2',
          completed_task: false
        },
        {
          id: 3,
          project_id: 2,
          task_description: 'task description 3',
          notes: 'task notes 3',
          completed_task: false
        },
        {
          id: 4,
          project_id: 3,
          task_description: 'task description 4',
          notes: 'task notes 4',
          completed_task: false
        }
      ]);
    });
};
