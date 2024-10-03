// Define the task description as a JavaScript string
var task_planning_user_request_cap= `
You will generate an executable plan to finish a certain task.
Your plan will consist only of skills from a given skill library.

The task is to attach firstly an inner cap and then an outer cap onto a target bottle.
`;

// Insert the task description into the user-request-cap-container element
document.getElementById('task-planning-user-request-cap-container').innerHTML = '<p>' + task_planning_user_request_cap.trim().replace(/\n/g, '<br>') + '</p>';

// Insert the image after the first task description
var img_new_task_cap = document.createElement('img');
// TODO CHANGE cap FIGURE  THIS IS A SCREENSHOT
img_new_task_cap.src = "examples/task_planning/new_task_cap.jpg"; 
img_new_task_cap.alt = 'new task cap'; // Optional: Alt text for accessibility
img_new_task_cap.style.width = '400px'; // Optional: Set the image size

// Append the image to the container
document.getElementById('task-planning-user-request-cap-container').appendChild(img_new_task_cap);