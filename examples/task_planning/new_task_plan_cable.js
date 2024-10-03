// Define the task description as a JavaScript string
var new_task_plan_cable= `
# Initialize the CableSkillLibrary
cable_skill_library = CableSkillLibrary()

# Executable plan
# Clip 5
cable_skill_library.move_object(get_object_property('clip5', 'position'))
cable_skill_library.grasp()
cable_skill_library.stretch()
cable_skill_library.insert(get_object_property('clip5', 'insertion_direction'), 'clip5', get_object_property('clip5', 'clip_type'))
cable_skill_library.release()

# Clip 6
cable_skill_library.move_object(get_object_property('clip6', 'position'))
cable_skill_library.grasp()
cable_skill_library.stretch()
cable_skill_library.insert(get_object_property('clip6', 'insertion_direction'), 'clip6', get_object_property('clip6', 'clip_type'))
cable_skill_library.release()

# Clip 8
cable_skill_library.move_object(get_object_property('clip8', 'position'))
cable_skill_library.grasp()
cable_skill_library.stretch()
cable_skill_library.insert(get_object_property('clip8', 'insertion_direction'), 'clip8', get_object_property('clip8', 'clip_type'))
cable_skill_library.release()
`;

// Insert the task description into the user-request-cap-container element
document.getElementById('task-planning-new-cable-container').innerHTML = 
'<pre style="background-color: #f8f9fa; overflow: visible; white-space: pre-wrap; word-wrap: break-word;"><code class="language-python">' + Prism.highlight(new_task_plan_cable.trim(), Prism.languages.python, 'python') + '</code></pre>';