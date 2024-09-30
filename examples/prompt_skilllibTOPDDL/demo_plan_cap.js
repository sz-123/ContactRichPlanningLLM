// Define the task description as a JavaScript string
var capDemoPlan= `
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
// Use Prism.js to highlight code
document.getElementById('demo-plan-cap-container').innerHTML = 
  '<pre><code class="language-python">' + Prism.highlight(capDemoPlan.trim(), Prism.languages.python, 'python') + '</code></pre>';