// Define the task description as a JavaScript string
var task_planning_cable= `
# Initialize the CableSkillLibrary
cable_skill_library = CableSkillLibrary()

# Executable plan
cable_skill_library.move_object(database['clip8']['position'])
cable_skill_library.grasp()
cable_skill_library.stretch()
cable_skill_library.insert(database['clip8']['insertion_direction'], 'clip8')
cable_skill_library.open_hand()
cable_skill_library.move_object(database['clip5']['position'])
cable_skill_library.grasp()
cable_skill_library.stretch()
cable_skill_library.insert(database['clip5']['insertion_direction'], 'clip5')
cable_skill_library.open_hand()
`;

// Insert the task description into the user-request-cap-container element
document.getElementById('demo-task-plan-cable-container').innerHTML = 
'<pre><code class="language-python">' + Prism.highlight(task_planning_cable.trim(), Prism.languages.python, 'python') + '</code></pre>';