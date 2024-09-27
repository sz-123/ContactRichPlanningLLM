// Define the task description as a JavaScript string
var prompt_task_description_cap = `
The video is about a robot hand tighteninhg a cap onto a bottle. 
Each frame has been annotated with the status of the cap collected by the tactile sensor. The blue part in the view is the cap. The brown part is the bottle.
`;

// Insert the task description into the task-cap-container element
document.getElementById('task-cap-container').innerHTML = '<p>' + prompt_task_description_cap.trim() + '</p>';