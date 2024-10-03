// Define the task description as a JavaScript string
var prompt_task_description_cap = `
The video is about one robot hand picking a cap and then attaching it onto a bottle. 
Each frame has been annotated with the status of the cap collected by the tactile sensor and the bottle position (blue bounding box).
The red object in the view is the cap.
`;

// Insert the task description into the task-cap-container element
document.getElementById('task-cap-container').innerHTML = '<p>' + prompt_task_description_cap.trim().replace(/\n/g, '<br>') + '</p>';