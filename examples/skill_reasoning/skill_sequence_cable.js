document.addEventListener("DOMContentLoaded", function() {
    const skill_sequence_cable_code = `
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

const codeContainer_skill_sequence_cable = document.getElementById("skill-sequence-cable-container");

// Create <pre> and <code> elements for code display
const pre = document.createElement("pre");
const code = document.createElement("code");

// Add the class for Prism syntax highlighting
code.className = "language-python";

// Insert the code content
code.textContent = skill_sequence_cable_code.trim();

// Append code to pre element and pre to container
pre.appendChild(code);
codeContainer_skill_sequence_cable.appendChild(pre);

// Manually trigger Prism to highlight the code
Prism.highlightElement(code);
});