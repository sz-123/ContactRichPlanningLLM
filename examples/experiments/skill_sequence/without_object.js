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

const without_object_skills = ["move_object cable",
"move_object cable",
"move_object cable",
"insert cable down clip8",
"insert cable down clip8",
"move_object cable",
"move_object cable",
"insert cable down clip5",
"insert cable down clip5",
"insert cable down clip5"
];


const without_object_reasonings = ["Because the cable is being moved towards clip8.",
"Because the cable is still being moved towards clip8.",
"Because the cable is almost at the position of clip8.",
"Because the cable is being inserted into clip8 in the downward direction.",
"Because the cable is still being inserted into clip8 in the downward direction.",
"Because the cable is being moved towards clip5.",
"Because the cable is still being moved towards clip5.",
"Because the cable is being inserted into clip5 in the downward direction.",
"Because the cable is still being inserted into clip5 in the downward direction.",
"Because the cable is still being inserted into clip5 in the downward direction."
];

const without_object_demo_plan =`
cable_skill_library = CableSkillLibrary()

# Executable plan
cable_skill_library.move_object(get_object_property('clip8', 'position'))
cable_skill_library.insert(get_object_property('clip8', 'insertion_direction'), 'clip8')
cable_skill_library.move_object(get_object_property('clip5', 'position'))
cable_skill_library.insert(get_object_property('clip5', 'insertion_direction'), 'clip5')
`;





let currentFrame_without_object = 0;

const frameElement_withoutOb = document.getElementById('without-object-frame');
const skillElement_withoutOb = document.getElementById('without-object-skill');
const reasoningElement_withoutOb = document.getElementById('without-object-reasoning');
const prevButton_withoutOb = document.getElementById('without-object-prevButton');
const nextButton_withoutOb = document.getElementById('without-object-nextButton');
const resetButton_withoutOb = document.getElementById('without-object-resetButton');

function updateFrame_withoutOb() {
    // Update the image frame
    frameElement_withoutOb.src = without_object_frames[currentFrame_without_object];
    
    // Update the skill and reasoning text
    skillElement_withoutOb.innerText = common_skill_text + without_object_skills[currentFrame_without_object];
    reasoningElement_withoutOb.innerText =without_object_reasonings[currentFrame_without_object];
    
    // Disable buttons if necessary
    prevButton_withoutOb.disabled = currentFrame_without_object === 0;
    nextButton_withoutOb.disabled = currentFrame_without_object === without_object_frames.length - 1;
}

prevButton_withoutOb.addEventListener('click', () => {
    if (currentFrame_without_object > 0) {
        currentFrame_without_object--;
        updateFrame_withoutOb();
    }
});

nextButton_withoutOb.addEventListener('click', () => {
    if (currentFrame_without_object < without_object_frames.length - 1) {
        currentFrame_without_object++;
        updateFrame_withoutOb();
    }
});

resetButton_withoutOb.addEventListener('click', () => {
    currentFrame_without_object = 0; // Reset to the first frame
    updateFrame_withoutOb();
});

// Initial state
updateFrame_withoutOb();

const planElement_withoutOb = document.getElementById('without-object-plan');
planElement_withoutOb.textContent = without_object_demo_plan; // Use textContent to preserve formatting
Prism.highlightElement(planElement_withoutOb); // Apply Prism.js highlighting
