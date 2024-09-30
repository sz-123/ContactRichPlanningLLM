// Define the task description as a JavaScript string
var task_planning_user_request_cap_2= `
When executing the plan generated in your previous answer, the first cap_skill_library.tighten() exits with success.
Based on your this result, adjust your plan for tightenting the cap if it is necessary.
`;

// Insert the task description into the user-request-cap-container element
document.getElementById('task-planning-user-request-cap-2-container').innerHTML = '<p>' + task_planning_user_request_cap_2.trim().replace(/\n/g, '<br>') + '</p>';