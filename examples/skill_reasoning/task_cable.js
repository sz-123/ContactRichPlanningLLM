// Define the task description as a JavaScript string
var prompt_task_description = `
The video is about two robot hands mounting a cable onto several clips.
Each frame has been annotated with the status of the cable collected by the tactile sensor, and the clip positions (red bounding box) and opening directions (yellow arrow).
The blue curve in the view is the cable.
`;

// Insert the task description into the task-cable-container element
document.getElementById('task-cable-container').innerHTML = '<p>' + prompt_task_description.trim().replace(/\n/g, '<br>') + '</p>';