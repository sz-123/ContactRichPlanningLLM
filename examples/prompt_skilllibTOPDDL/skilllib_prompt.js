// Prompts
const promptCommonSkillLib = `
<pre style="background-color: #f8f9fa; overflow: visible; white-space: pre-wrap; word-wrap: break-word;"><code>from robot_controller import Controller
from perception import Perception

robot_controller = Controller()
perception = Perception()

class ObjectSkillLibrary:
    def __init__(self, target_object):
        self.target_object = target_object

    def move_object(self, pose):
        print(f"Moving to {pose} with {self.target_object} grasped in hand")
        robot_controller.move_cart_pose(pose)

    def grasp(self):
        print(f"Grasping the {self.target_object}")
        robot_controller.grasp()

    def open_hand(self):
        print(f"Opening the robot's hand")
        robot_controller.open_gripper()
</code></pre>
`;

const promptCableSkillLib = `
<pre style="background-color: #f8f9fa; overflow: visible; white-space: pre-wrap; word-wrap: break-word;"><code style="color: #754292; font-weight: bold">class CableSkillLibrary(ObjectSkillLibrary):
    def __init__(self):
        super().__init__("cable")

    def insert(self, direction, env_object):
        print(f"Inserting the cable in {direction} into {env_object}")
        robot_controller.insert(direction, env_object)

    def stretch(self):
        print(f"Stretching the cable in opposite directions")
        robot_controller.stretch()
</code></pre>
`;

const promptCapSkillLib = `
<pre style="background-color: #f8f9fa; overflow: visible; white-space: pre-wrap; word-wrap: break-word;"><code style="color: #754292; font-weight: bold">class CapSkillLibrary(ObjectSkillLibrary):
    def __init__(self):
        super().__init__("cap")

    def tighten(self):
        print(f"Tightening the cap")
        robot_controller.screw()
</code></pre>
`;

// Get references to buttons and prompt container
const CableSkillLibButton = document.getElementById('cable-skilllib-button');
const CapSkillLibButton = document.getElementById('cap-skilllib-button');
const promptSkillLibContainer = document.getElementById('skilllib-prompt-container');

// Variable to track if a button has been clicked
let lockedContent = null;

// Function to show prompt content when hovering
function showPrompt(content) {
    if (!lockedContent) {  // Only show content if nothing is "locked"
        promptSkillLibContainer.style.display = 'block';
        promptSkillLibContainer.innerHTML = promptCommonSkillLib + content;
    }
}

// Function to lock the prompt content on click
function lockPrompt(content) {
    lockedContent = content;  // Lock the content
    promptSkillLibContainer.style.display = 'block';
    promptSkillLibContainer.innerHTML = promptCommonSkillLib + content;
}


// Show common content by default
showPrompt("");

// Show corresponding content on hover, only if not locked
CableSkillLibButton.addEventListener('mouseenter', function() {
    showPrompt(promptCableSkillLib);
});

CapSkillLibButton.addEventListener('mouseenter', function() {
    showPrompt(promptCapSkillLib);
});

// Hide prompt when not hovering, unless content is locked
CableSkillLibButton.addEventListener('mouseleave', function() {
    if (!lockedContent) {
        promptSkillLibContainer.style.display = 'block';
        promptSkillLibContainer.innerHTML = promptCommonSkillLib;
    }
});

CapSkillLibButton.addEventListener('mouseleave', function() {
    if (!lockedContent) {
        promptSkillLibContainer.style.display = 'block';
        promptSkillLibContainer.innerHTML = promptCommonSkillLib;
    }
});

// Lock content when button is clicked
CableSkillLibButton.addEventListener('click', function() {
    lockPrompt(promptCableSkillLib);
});

CapSkillLibButton.addEventListener('click', function() {
    lockPrompt(promptCapSkillLib);
});
