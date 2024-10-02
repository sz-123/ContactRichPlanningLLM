const raw_video_frames = [
    "examples/experiments/skill_sequence/raw_video/frame_0.png",
    "examples/experiments/skill_sequence/raw_video/frame_1.png",
    "examples/experiments/skill_sequence/raw_video/frame_2.png",
    "examples/experiments/skill_sequence/raw_video/frame_3.png",
    "examples/experiments/skill_sequence/raw_video/frame_4.png",
    "examples/experiments/skill_sequence/raw_video/frame_5.png",
    "examples/experiments/skill_sequence/raw_video/frame_6.png",
    "examples/experiments/skill_sequence/raw_video/frame_7.png",
    "examples/experiments/skill_sequence/raw_video/frame_8.png",
    "examples/experiments/skill_sequence/raw_video/frame_9.png",
    "examples/experiments/skill_sequence/raw_video/frame_10.png",
    "examples/experiments/skill_sequence/raw_video/frame_11.png"
];


const raw_video_skills = ["move_object cable",
"move_object cable",
"move_object cable",
"insert cable downward clip8",
"insert cable downward clip8",
"insert cable downward clip8",
"insert cable downward clip8",
"move_object cable",
"move_object cable",
"insert cable downward clip5",
"insert cable downward clip5",
"insert cable downward clip5"
];




const raw_video_reasonings = ["Because the robot on the right is moving the cable towards clip8.",
"Because the robot on the right continues to move the cable towards clip8.",
"Because the robot on the right is still moving the cable towards clip8.",
"Because the robot on the right is inserting the cable into clip8 in the downward direction.",
"Because the robot on the right continues to insert the cable into clip8 in the downward direction.",
"Because the robot on the right is still inserting the cable into clip8 in the downward direction.",
"Because the robot on the right is still inserting the cable into clip8 in the downward direction.",
"Because the robot on the left is moving the cable towards clip5.",
"Because the robot on the left continues to move the cable towards clip5.",
"Because the robot on the left is inserting the cable into clip5 in the downward direction.",
"Because the robot on the left continues to insert the cable into clip5 in the downward direction.",
"Because the robot on the left is still inserting the cable into clip5 in the downward direction."
];

const raw_video_demo_plan =`
# Initialize the skill library
cable_skill_library = CableSkillLibrary()

# Executable plan
cable_skill_library.move_object(get_object_property('clip8', 'position'))
cable_skill_library.insert(get_object_property('clip8', 'insertion_direction'), 'clip8')
cable_skill_library.move_object(get_object_property('clip5', 'position'))
cable_skill_library.insert(get_object_property('clip5', 'insertion_direction'), 'clip5')
`;





let currentFrame_raw_video = 0;

const frameElement_rawVi = document.getElementById('raw-video-frame');
const skillElement_rawVi = document.getElementById('raw-video-skill');
const reasoningElement_rawVi = document.getElementById('raw-video-reasoning');
const prevButton_rawVi = document.getElementById('raw-video-prevButton');
const nextButton_rawVi = document.getElementById('raw-video-nextButton');
const resetButton_rawVi = document.getElementById('raw-video-resetButton');

function updateFrame_rawVi() {
    // Update the image frame
    frameElement_rawVi.src = raw_video_frames[currentFrame_raw_video];
    
    // Update the skill and reasoning text
    skillElement_rawVi.innerText = common_skill_text + raw_video_skills[currentFrame_raw_video];
    reasoningElement_rawVi.innerText =raw_video_reasonings[currentFrame_raw_video];
    
    // Disable buttons if necessary
    prevButton_rawVi.disabled = currentFrame_raw_video === 0;
    nextButton_rawVi.disabled = currentFrame_raw_video === raw_video_frames.length - 1;
}

prevButton_rawVi.addEventListener('click', () => {
    if (currentFrame_raw_video > 0) {
        currentFrame_raw_video--;
        updateFrame_rawVi();
    }
});

nextButton_rawVi.addEventListener('click', () => {
    if (currentFrame_raw_video < raw_video_frames.length - 1) {
        currentFrame_raw_video++;
        updateFrame_rawVi();
    }
});

resetButton_rawVi.addEventListener('click', () => {
    currentFrame_raw_video = 0; // Reset to the first frame
    updateFrame_rawVi();
});

// Initial state
updateFrame_rawVi();

const planElement_rawVi = document.getElementById('raw-video-plan');
planElement_rawVi.textContent = raw_video_demo_plan; // Use textContent to preserve formatting
Prism.highlightElement(planElement_rawVi); // Apply Prism.js highlighting
