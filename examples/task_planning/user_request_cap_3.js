// Define the task description as a JavaScript string
var task_planning_user_request_cap_3= `
Based on the decision in your previous answer, adjust your plan for tightenting the cap if it is necessary.
`;

// Insert the task description into the user-request-cap-container element
document.getElementById('task-planning-user-request-cap-3-container').innerHTML = '<p>' + task_planning_user_request_cap_3.trim().replace(/\n/g, '<br>') + '</p>';