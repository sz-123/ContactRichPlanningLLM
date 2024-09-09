// Prompts
const promptSkillLibTranslate = `
<pre><code>You are reasoning about skills and skill parameters at each frame of a video step by step. You must pick only skills from the given skill library. Your reasoning will be based on PDDL. Before reasoning, generate a PDDL domain of the ${prompt_library_name}: ${prompt_skill_library}. Format your answer strictly in the way: (define (domain robot_skills)) </code></pre>`;

// Get references to buttons and prompt container
const SkillLibTranslateButton = document.getElementById('skilllib-translate-button');
const promptSkillLibTranslateContainer = document.getElementById('skilllib-translate-prompt-container');

// Variable to track if a button has been clicked
let lockedContent = null;

// Function to show prompt content when hovering
function showPrompt(content) {
    if (!lockedContent) {  // Only show content if nothing is "locked"
        promptSkillLibTranslateContainer.style.display = 'block';
        promptSkillLibTranslateContainer.innerHTML = content;
    }
}

// Function to lock the prompt content on click
function lockPrompt(content) {
    lockedContent = content;  // Lock the content
    promptSkillLibTranslateContainer.style.display = 'block';
    promptSkillLibTranslateContainer.innerHTML = content;
}

// Function to reset the locked content when clicking another button
function resetLockedContent() {
    lockedContent = null;
    promptSkillLibTranslateContainer.style.display = 'none';  // Optionally hide when reset
}

// // Ensure the elements exist before adding listeners
// if (SkillLibTranslateButton && promptSkillLibTranslateContainer) {
//     // Show corresponding content on hover, only if not locked
//     SkillLibTranslateButton.addEventListener('mouseenter', function() {
//         showPrompt(promptSkillLibTranslate);
//     });

//     // Hide prompt when not hovering, unless content is locked
//     SkillLibTranslateButton.addEventListener('mouseleave', function() {
//         if (!lockedContent) {
//             promptSkillLibTranslateContainer.style.display = 'none';
//         }
//     });

//     // Lock content when button is clicked
//     SkillLibTranslateButton.addEventListener('click', function() {
//         lockPrompt(promptSkillLibTranslate);
//     });
// }

showPrompt(promptSkillLibTranslate);