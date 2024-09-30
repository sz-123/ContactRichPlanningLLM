// Define the task description as a JavaScript string
var new_task_plan_cable= `
cable_skill_library = CableSkillLibrary()

# Executable plan to mount the cable onto all clips from right to left
cable_skill_library.move_object(get_object_property('clip8', 'position'))
cable_skill_library.grasp()
cable_skill_library.stretch()
cable_skill_library.insert(get_object_property('clip8', 'insertion_direction'), 'clip8')
cable_skill_library.open_hand()

cable_skill_library.move_object(get_object_property('clip5', 'position'))
cable_skill_library.grasp()
cable_skill_library.stretch()
cable_skill_library.insert(get_object_property('clip5', 'insertion_direction'), 'clip5')
cable_skill_library.open_hand()

cable_skill_library.move_object(get_object_property('clip0', 'position'))
cable_skill_library.grasp()
cable_skill_library.stretch()
cable_skill_library.insert(get_object_property('clip0', 'insertion_direction'), 'clip0')
cable_skill_library.open_hand()
`;

// Insert the task description into the user-request-cap-container element
document.getElementById('task-planning-new-cable-container').innerHTML = 
'<pre><code class="language-python">' + Prism.highlight(new_task_plan_cable.trim(), Prism.languages.python, 'python') + '</code></pre>';