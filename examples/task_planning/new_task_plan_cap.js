// Define the task description as a JavaScript string
var new_task_plan_cap= `
# Initialize the skill library for the cap
cap_skill_library = CapSkillLibrary()

# Define the sequence of actions for the new scenario
bottle1_position = get_object_property('bottle1', 'position')

cap_skill_library.move_object(bottle1_position)
cap_skill_library.grasp()
cap_skill_library.tighten()
cap_skill_library.open_hand()
cap_skill_library.grasp()
cap_skill_library.tighten()
cap_skill_library.open_hand()
cap_skill_library.grasp()
cap_skill_library.tighten()
cap_skill_library.open_hand()
`;

// Insert the task description into the user-request-cap-container element
// Use Prism.js to highlight code
document.getElementById('task-planning-new-cap-container').innerHTML = 
  '<pre><code class="language-python">' + Prism.highlight(new_task_plan_cap.trim(), Prism.languages.python, 'python') + '</code></pre>';