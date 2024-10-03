// Define the task description as a JavaScript string
var task_planning_user_request_cable= `
Finally, generate an executable plan in the formatting of code script to mount the cable onto all clips from right to left in a new scenario below.
`;

// Insert the task description into the user-request-cap-container element
document.getElementById('task-planning-user-request-cable-container').innerHTML = '<p>' + task_planning_user_request_cable.trim().replace(/\n/g, '<br>') + '</p>';

// Insert the image after the first task description
var img_new_task_cable = document.createElement('img');
// TODO CHANGE CABLE FIGURE  THIS IS A SCREENSHOT
img_new_task_cable.src = "examples/task_planning/new_task_cable.jpg"; 
img_new_task_cable.alt = 'new task cable'; // Optional: Alt text for accessibility
img_new_task_cable.style.width = '400px'; // Optional: Set the image size

// Append the image to the container
document.getElementById('task-planning-user-request-cable-container').appendChild(img_new_task_cable);