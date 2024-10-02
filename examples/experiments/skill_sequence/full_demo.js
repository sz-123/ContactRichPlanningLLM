const full_demo_frames = [
    "examples/experiments/skill_sequence/full_demo/frame_0.png",
    "examples/experiments/skill_sequence/full_demo/frame_1.png",
    "examples/experiments/skill_sequence/full_demo/frame_2.png",
    "examples/experiments/skill_sequence/full_demo/frame_3.png",
    "examples/experiments/skill_sequence/full_demo/frame_4.png",
    "examples/experiments/skill_sequence/full_demo/frame_5.png",
    "examples/experiments/skill_sequence/full_demo/frame_6.png",
    "examples/experiments/skill_sequence/full_demo/frame_7.png",
    "examples/experiments/skill_sequence/full_demo/frame_8.png",
    "examples/experiments/skill_sequence/full_demo/frame_9.png"
];

const common_skill_text = "Skill: ";

const full_demo_skills = ["move_object clip8",
"grasp cable",
"stretch cable",
"insert cable down clip8",
"release cable",
"move_object clip5",
"grasp cable",
"stretch cable",
"insert cable down clip5",
"release cable"
];

const common_reasoning_text = "Reasoning: ";

const full_demo_reasonings = ["Because one of the robots is moving the cable towards the position of clip 8.",
"Because the tactile status indicates that the cable is grasped.",
"Because the tactile status indicates that the cable is under linear force, suggesting a stretching action.",
"Because the tactile status indicates that the cable is under torque, suggesting an insertion into clip 8.",
"ecause the tactile status indicates that the cable is released.",
"Because one of the robots is moving the cable towards the position of clip 5.",
"Because the tactile status indicates that the cable is grasped.",
"Because the tactile status indicates that the cable is under linear force, suggesting a stretching action.",
"Because the tactile status indicates that the cable is under torque, suggesting an insertion into clip 5.",
"Because the tactile status indicates that the cable is released."
];

const full_demo_plan =`
# Initialize the CableSkillLibrary
cable_skill_library = CableSkillLibrary()

# Executable plan
cable_skill_library.move_object(get_object_property('clip8', 'position'))
cable_skill_library.grasp()
cable_skill_library.stretch()
cable_skill_library.insert(get_object_property('clip8', 'insertion_direction'), 'clip8')
cable_skill_library.release()
cable_skill_library.move_object(get_object_property('clip5', 'position'))
cable_skill_library.grasp()
cable_skill_library.stretch()
cable_skill_library.insert(get_object_property('clip5', 'insertion_direction'), 'clip5')
cable_skill_library.release()
`;





let currentFrame = 0;

const frameElement = document.getElementById('full-demo-frame');
const skillElement = document.getElementById('full-demo-skill');
const reasoningElement = document.getElementById('full-demo-reasoning');
const prevButton = document.getElementById('full-demo-prevButton');
const nextButton = document.getElementById('full-demo-nextButton');
const resetButton = document.getElementById('full-demo-resetButton');

function updateFrame() {
    // Update the image frame
    frameElement.src = full_demo_frames[currentFrame];
    
    // Update the skill and reasoning text
    skillElement.innerText = common_skill_text + full_demo_skills[currentFrame];
    reasoningElement.innerText =full_demo_reasonings[currentFrame];
    
    // Disable buttons if necessary
    prevButton.disabled = currentFrame === 0;
    nextButton.disabled = currentFrame === full_demo_frames.length - 1;
}

prevButton.addEventListener('click', () => {
    if (currentFrame > 0) {
        currentFrame--;
        updateFrame();
    }
});

nextButton.addEventListener('click', () => {
    if (currentFrame < full_demo_frames.length - 1) {
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

const planElement = document.getElementById('full-demo-plan');
planElement.textContent = full_demo_plan; // Use textContent to preserve formatting
Prism.highlightElement(planElement); // Apply Prism.js highlighting

