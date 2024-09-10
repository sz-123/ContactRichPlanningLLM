const promptSkillLibTranslate = "You are reasoning about skills and skill parameters at each frame of a video step by step. You must pick only skills from the given skill library. Your reasoning will be based on PDDL. Before reasoning, generate a PDDL domain of the + prompt_library_name+: + prompt_skill_library  + Format your answer strictly in the way: (define (domain robot_skills)";

// Get references to buttons and prompt container
const SkillLibTranslateButton = document.getElementById('skilllib-translate-button');
const promptSkillLibTranslateContainer = document.getElementById('skilllib-translate-prompt-container');

// Function to show the text on hover
function showText() {
    promptSkillLibTranslateContainer.textContent = promptSkillLibTranslate;
}

// Function to hide the text when not hovering
function hideText() {
    promptSkillLibTranslateContainer.textContent = "";
}

// Function to permanently show the text once clicked
function showTextForever() {
    promptSkillLibTranslateContainer.textContent = promptSkillLibTranslate;
    // Remove the hover event listeners after clicking to show text permanently
    SkillLibTranslateButton.removeEventListener('mouseover', showText);
    SkillLibTranslateButton.removeEventListener('mouseout', hideText);
}

// Add event listeners for hover
SkillLibTranslateButton.addEventListener('mouseover', showText);
SkillLibTranslateButton.addEventListener('mouseout', hideText);

// Add event listener for click
SkillLibTranslateButton.addEventListener('click', showTextForever);
