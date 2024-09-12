const without_object_frames = [
    "examples/experiments/skill_sequence/without_object/frame_0.png",
    "examples/experiments/skill_sequence/without_object/frame_1.png",
    "examples/experiments/skill_sequence/without_object/frame_2.png",
    "examples/experiments/skill_sequence/without_object/frame_3.png",
    "examples/experiments/skill_sequence/without_object/frame_4.png",
    "examples/experiments/skill_sequence/without_object/frame_5.png",
    "examples/experiments/skill_sequence/without_object/frame_6.png",
    "examples/experiments/skill_sequence/without_object/frame_7.png",
    "examples/experiments/skill_sequence/without_object/frame_8.png",
    "examples/experiments/skill_sequence/without_object/frame_9.png"
];

const common_skill_text = "Skill: ";

const without_object_skills = ["move_object clip8",
"grasp cable",
"stretch cable",
"insert cable clip8",
"open_hand",
"move_object clip5",
"grasp cable",
"stretch cable",
"insert cable clip5",
"open_hand"
];

const common_reasoning_text = "Reasoning: ";

const without_object_reasonings = ["Because the robot is moving with the cable towards the position of clip 8.",
"Because the tactile status indicates the cable is grasped.",
"Because the tactile status indicates the cable is under linear force, suggesting a stretching action.",
"Because the tactile status indicates the cable is under torque, suggesting an insertion action into clip 8.",
"Because the tactile status indicates the cable is released, suggesting the robot has opened its hand.",
"Because the robot is moving with the cable towards the position of clip 5.",
"Because the tactile status indicates the cable is grasped.",
"Because the tactile status indicates the cable is under linear force, suggesting a stretching action.",
"Because the tactile status indicates the cable is under torque, suggesting an insertion action into clip 5.",
"Because the tactile status indicates the cable is released, suggesting the robot has opened its hand."
];

const without_object_plan =`
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





let currentFrame = 0;

const frameElement = document.getElementById('without-object-frame');
const skillElement = document.getElementById('without-object-skill');
const reasoningElement = document.getElementById('without-object-reasoning');
const prevButton = document.getElementById('without-object-prevButton');
const nextButton = document.getElementById('without-object-nextButton');
const resetButton = document.getElementById('without-object-resetButton');

function updateFrame() {
    // Update the image frame
    frameElement.src = without_object_frames[currentFrame];
    
    // Update the skill and reasoning text
    skillElement.innerText = common_skill_text + without_object_skills[currentFrame];
    reasoningElement.innerText =without_object_reasonings[currentFrame];
    
    // Disable buttons if necessary
    prevButton.disabled = currentFrame === 0;
    nextButton.disabled = currentFrame === without_object_frames.length - 1;
}

prevButton.addEventListener('click', () => {
    if (currentFrame > 0) {
        currentFrame--;
        updateFrame();
    }
});

nextButton.addEventListener('click', () => {
    if (currentFrame < without_object_frames.length - 1) {
        currentFrame++;
        updateFrame();
    }
});

resetButton.addEventListener('click', () => {
    currentFrame = 0; // Reset to the first frame
    updateFrame();
});

// Initial state
updateFrame();

const planElement = document.getElementById('without-object-plan');
planElement.textContent = full_demo_plan; // Use textContent to preserve formatting
Prism.highlightElement(planElement); // Apply Prism.js highlighting
