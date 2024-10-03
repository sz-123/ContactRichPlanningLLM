// Define the task planning as a JavaScript string
// TODO CHECK PLAN HERE, IT SEEMS NOT CORRECT

var task_planning_cap= `
# Initialize the CapSkillLibrary
cap_skill_library = CapSkillLibrary()

# Executable plan
cap_skill_library.grasp()
cap_skill_library.move_object(get_object_property('bottle1', 'position'))
cap_skill_library.release()

cap_skill_library.grasp()
cap_skill_library.tighten()
cap_skill_library.release()

cap_skill_library.grasp()
cap_skill_library.tighten()
cap_skill_library.release()

cap_skill_library.grasp()
cap_skill_library.tighten()
cap_skill_library.release()

cap_skill_library.grasp()
cap_skill_library.tighten()
cap_skill_library.release()

cap_skill_library.grasp()
cap_skill_library.tighten()
cap_skill_library.release()

cap_skill_library.grasp()
cap_skill_library.tighten()
cap_skill_library.release()

cap_skill_library.grasp()
cap_skill_library.tighten()
cap_skill_library.release()
`;

// Insert the task description into the user-request-cap-container element
var task_planning_cap_description = `
As an example, this was the task plan from a human demonstration to attach one cap onto a bottle.
`;

// Insert the description, code, and footer separately into the container
document.getElementById('demo-task-plan-cap-container').innerHTML = 
  '<p>' + task_planning_cap_description.trim() + '</p>' +
  '<pre style="background-color: #f8f9fa; overflow: visible; white-space: pre-wrap; word-wrap: break-word;"><code class="language-python">' + Prism.highlight(task_planning_cap.trim(), Prism.languages.python, 'python') + '</code></pre>';