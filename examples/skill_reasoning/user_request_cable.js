// Define the task description as a JavaScript string
var user_request_cable = `
As the first step of your reasoning, reason which skill in the given skill library (defined already as PDDL domain) the robot performs at each frame. 
Format your reasoning as strings strictly in 'frame number(timestamp): skill and reason' format. 
For example, Frame 1 (19:35:27.208): (move_object clip2) ; Because one of the robot is moving with cable grasped to the position of clip 2.
Consider the annotated obejct status and also the robot movement in video frames in your reasoning.
`;

// Insert the task description into the user-request-cable-container element
document.getElementById('user-request-cable-container').innerHTML = '<p>' + user_request_cable.trim().replace(/\n/g, '<br>') + '</p>';