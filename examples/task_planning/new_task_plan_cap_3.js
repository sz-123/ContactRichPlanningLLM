// Define the task description as a JavaScript string
var new_task_plan_cap_3 = `
# Initialize the skill library for the cap
cap_skill_library = CapSkillLibrary()

# Define the sequence of actions for the new scenario
bottle1_position = get_object_property('bottle1', 'position')

cap_skill_library.move_object(bottle1_position)
cap_skill_library.grasp()
if not cap_skill_library.tighten():
    cap_skill_library.open_hand()
    cap_skill_library.grasp()
    if not cap_skill_library.tighten():
        cap_skill_library.open_hand()
        cap_skill_library.grasp()
        cap_skill_library.tighten()
cap_skill_library.open_hand()
`;

// Use Prism.js to highlight code
document.getElementById('task-planning-new-cap-3-container').innerHTML = 
  '<pre><code class="language-python">' + Prism.highlight(new_task_plan_cap_3.trim(), Prism.languages.python, 'python') + '</code></pre>';