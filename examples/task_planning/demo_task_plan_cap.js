// Define the task planning as a JavaScript string
// TODO CHECK PLAN HERE, IT SEEMS NOT CORRECT

var task_planning_cap= `
# Executable plan
cap_skill_library = CapSkillLibrary()

# Grasp the cap
cap_skill_library.grasp()
cap_skill_library.move_object(get_object_property('bottle5', 'position'))
cap_skill_library.open_hand()
cap_skill_library.grasp()
cap_skill_library.open_hand()
cap_skill_library.grasp()
cap_skill_library.open_hand()
cap_skill_library.grasp()
cap_skill_library.tighten()
cap_skill_library.open_hand()
cap_skill_library.grasp()
cap_skill_library.tighten()
cap_skill_library.open_hand()

# Grasp the cap again
cap_skill_library.grasp()

# Tighten the cap
cap_skill_library.tighten()

# Open hand to release the cap
cap_skill_library.open_hand()

# Grasp the cap again
cap_skill_library.grasp()

# Tighten the cap
cap_skill_library.tighten()

# Open hand to release the cap
cap_skill_library.open_hand()

# Grasp the cap again
cap_skill_library.grasp()

# Tighten the cap
cap_skill_library.tighten()

# Open hand to release the cap
cap_skill_library.open_hand()
`;

// Insert the task description into the user-request-cap-container element
document.getElementById('demo-task-plan-cap-container').innerHTML = 
'<pre style="background-color: #f8f9fa; overflow: visible; white-space: pre-wrap; word-wrap: break-word;"><code class="language-python">' + Prism.highlight(task_planning_cap.trim(), Prism.languages.python, 'python') + '</code></pre>';