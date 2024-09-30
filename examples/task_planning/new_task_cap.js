// Define the first task description as a JavaScript string
var new_task_cap_1 = `

`;

// Insert the first task description into the user-request-cap-container element
document.getElementById('new-task-cap-container').innerHTML = '<p>' + new_task_cap_1.trim().replace(/\n/g, '<br>') + '</p>';

// Insert the image after the first task description
var img_new_task_cap = document.createElement('img');
// TODO CHANGE cap FIGURE  THIS IS A SCREENSHOT
img_new_task_cap.src = "examples/task_planning/new_task_cap.jpg"; 
img_new_task_cap.alt = 'new task cap'; // Optional: Alt text for accessibility
img_new_task_cap.style.width = '700px'; // Optional: Set the image size

// Append the image to the container
document.getElementById('new-task-cap-container').appendChild(img_new_task_cap);

// Define the second task description as a JavaScript string
var new_task_cap_2 = `
And this is the world knowledge about environmental objects in this new scenario:
str(new_db_content)
`;

// Append the second task description into the user-request-cap-container element
var secondTaskElement = document.createElement('p');
secondTaskElement.innerHTML = new_task_cap_2.trim().replace(/\n/g, '<br>');

// Append the second task description to the container
document.getElementById('new-task-cap-container').appendChild(secondTaskElement);
