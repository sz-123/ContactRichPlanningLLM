// Define the first task description as a JavaScript string
var new_task_cable_1 = `
Clips to be mounted are marked with red bounding box and their openning directions are marked with yellow arrow.
`;

// Insert the first task description into the user-request-cap-container element
document.getElementById('new-task-cable-container').innerHTML = '<p>' + new_task_cable_1.trim().replace(/\n/g, '<br>') + '</p>';

// Insert the image after the first task description
var img_new_task_cable = document.createElement('img');
// TODO CHANGE CABLE FIGURE  THIS IS A SCREENSHOT
img_new_task_cable.src = "examples/task_planning/new_task_cable.jpg"; 
img_new_task_cable.alt = 'new task cable'; // Optional: Alt text for accessibility
img_new_task_cable.style.width = '700px'; // Optional: Set the image size

// Append the image to the container
document.getElementById('new-task-cable-container').appendChild(img_new_task_cable);

// Define the second task description as a JavaScript string
var new_task_cable_2 = `
And this is the world knowledge about environmental objects in this new scenario:
str(new_db_content)
`;

// Append the second task description into the user-request-cap-container element
var secondTaskElement = document.createElement('p');
secondTaskElement.innerHTML = new_task_cable_2.trim().replace(/\n/g, '<br>');

// Append the second task description to the container
document.getElementById('new-task-cable-container').appendChild(secondTaskElement);
