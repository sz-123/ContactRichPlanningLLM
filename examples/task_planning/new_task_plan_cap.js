// Define the task description as a JavaScript string
var new_task_plan_cap= `
# Initialize the CapSkillLibrary
cap_skill_library = CapSkillLibrary()

# Grasp the inner cap
cap_skill_library.target_object = 'inner_cap2'
cap_skill_library.grasp()

# Move the inner cap to the bottle's position
bottle_position = get_object_property('bottle2', 'position')
cap_skill_library.move_object(bottle_position)
cap_skill_library.release()

# Tighten the inner cap
for _ in range(3):  # Adjust the number of attempts as needed
    inner_cap_skill_library.grasp()
    inner_cap_skill_library.tighten()
    inner_cap_skill_library.release()


# Grasp the outer cap
cap_skill_library.target_object = 'outer_cap2'
cap_skill_library.grasp()

# Move the outer cap to the bottle's position
cap_skill_library.move_object(bottle_position)
cap_skill_library.release()

# Tighten the outer cap
for _ in range(3):  # Adjust the number of attempts as needed
    inner_cap_skill_library.grasp()
    inner_cap_skill_library.tighten()
    inner_cap_skill_library.release()
`;

// Insert the task description into the user-request-cap-container element
// Use Prism.js to highlight code
document.getElementById('task-planning-new-cap-container').innerHTML = 
  '<pre style="background-color: #f8f9fa; overflow: visible; white-space: pre-wrap; word-wrap: break-word;"><code class="language-python">' + Prism.highlight(new_task_plan_cap.trim(), Prism.languages.python, 'python') + '</code></pre>';