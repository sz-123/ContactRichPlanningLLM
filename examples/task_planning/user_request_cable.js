// Define the task description as a JavaScript string
var task_planning_user_request_cable= `
Finally, generate an executable plan in the formatting of code script to mount the cable onto all clips from right to left in a new scenario below.
`;

// Insert the task description into the user-request-cap-container element
document.getElementById('task-planning-user-request-cable-container').innerHTML = '<p>' + task_planning_user_request_cable.trim().replace(/\n/g, '<br>') + '</p>';