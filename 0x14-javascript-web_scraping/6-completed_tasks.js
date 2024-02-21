#!/usr/bin/node
// Computes tasksCompleted by userID

const request = require('request');

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

request.get(apiUrl, { json: true }, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('Error:', response.statusCode);
    return;
  }

  const tasksCompleted = {};

  // Iterate through each todo item
  body.forEach((todo) => {
    // If the task is completed, increment the count for that user ID
    if (todo.completed) {
      if (!tasksCompleted[todo.userId]) {
        tasksCompleted[todo.userId] = 1;
      } else {
        tasksCompleted[todo.userId]++;
      }
    }
  });

  // Print users with completed tasks
  for (const userId in tasksCompleted) {
    console.log(`User ID ${userId}: ${tasksCompleted[userId]} tasks completed`);
  }
});
