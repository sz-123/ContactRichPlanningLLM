const raw_video_cap_frames = [
    "examples/experiments/skill_sequence/raw_video_cap/frame_0.png",
    "examples/experiments/skill_sequence/raw_video_cap/frame_1.png",
    "examples/experiments/skill_sequence/raw_video_cap/frame_2.png",
    "examples/experiments/skill_sequence/raw_video_cap/frame_3.png",
    "examples/experiments/skill_sequence/raw_video_cap/frame_4.png",
    "examples/experiments/skill_sequence/raw_video_cap/frame_5.png",
    "examples/experiments/skill_sequence/raw_video_cap/frame_6.png",
    "examples/experiments/skill_sequence/raw_video_cap/frame_7.png",
    "examples/experiments/skill_sequence/raw_video_cap/frame_8.png",
    "examples/experiments/skill_sequence/raw_video_cap/frame_9.png",
    "examples/experiments/skill_sequence/raw_video_cap/frame_10.png",
    "examples/experiments/skill_sequence/raw_video_cap/frame_11.png",
    "examples/experiments/skill_sequence/raw_video_cap/frame_12.png",
    "examples/experiments/skill_sequence/raw_video_cap/frame_13.png",
    "examples/experiments/skill_sequence/raw_video_cap/frame_14.png",
    "examples/experiments/skill_sequence/raw_video_cap/frame_15.png",
    "examples/experiments/skill_sequence/raw_video_cap/frame_16.png",
    "examples/experiments/skill_sequence/raw_video_cap/frame_17.png",
    "examples/experiments/skill_sequence/raw_video_cap/frame_18.png",
    "examples/experiments/skill_sequence/raw_video_cap/frame_19.png",
    "examples/experiments/skill_sequence/raw_video_cap/frame_20.png",
    "examples/experiments/skill_sequence/raw_video_cap/frame_21.png",
    "examples/experiments/skill_sequence/raw_video_cap/frame_22.png",
    "examples/experiments/skill_sequence/raw_video_cap/frame_23.png",
    "examples/experiments/skill_sequence/raw_video_cap/frame_24.png",
    "examples/experiments/skill_sequence/raw_video_cap/frame_25.png",
    "examples/experiments/skill_sequence/raw_video_cap/frame_26.png",
    "examples/experiments/skill_sequence/raw_video_cap/frame_27.png",
    "examples/experiments/skill_sequence/raw_video_cap/frame_28.png",
    "examples/experiments/skill_sequence/raw_video_cap/frame_29.png",
    "examples/experiments/skill_sequence/raw_video_cap/frame_30.png",
    "examples/experiments/skill_sequence/raw_video_cap/frame_31.png",
    "examples/experiments/skill_sequence/raw_video_cap/frame_32.png",
];


const raw_video_cap_skills = [
    "move_object cap bottle1",
    "move_object cap bottle1",
    "grasp cap",
    "move_object cap bottle1",
    "move_object cap bottle1",
    "move_object cap bottle1",
    "move_object cap bottle1",
    "move_object cap bottle1",
    "move_object cap bottle1",
    "move_object cap bottle1",
    "move_object cap bottle1",
    "move_object cap bottle1",
    "move_object cap bottle1",
    "move_object cap bottle1",
    "move_object cap bottle1",
    "move_object cap bottle1",
    "move_object cap bottle1",
    "move_object cap bottle1",
    "move_object cap bottle1",
    "move_object cap bottle1",
    "move_object cap bottle1",
    "move_object cap bottle1",
    "move_object cap bottle1",
    "move_object cap bottle1",
    "move_object cap bottle1",
    "move_object cap bottle1",
    "move_object cap bottle1",
    "move_object cap bottle1",
    "move_object cap bottle1",
    "move_object cap bottle1",
    "move_object cap bottle1",
    "move_object cap bottle1",
    "move_object cap bottle1"
];





const raw_video_cap_reasonings = [
"Because the robot on the right is moving the cable towards clip8.",
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

const raw_video_cap_demo_plan =`
# Initialize the CapSkillLibrary
cap_skill_library = CapSkillLibrary()

# Executable plan
cap_skill_library.move_object(get_object_property('cap1', 'position'))
cap_skill_library.grasp()
cap_skill_library.move_object(get_object_property('bottle1', 'position'))
cap_skill_library.tighten()
`;





let currentFrame_raw_video_cap = 0;

const frameElement_rawVi_cap = document.getElementById('raw-video-cap-frame');
const skillElement_rawVi_cap = document.getElementById('raw-video-cap-skill');
const reasoningElement_rawVi_cap = document.getElementById('raw-video-cap-reasoning');
const prevButton_rawVi_cap = document.getElementById('raw-video-cap-prevButton');
const nextButton_rawVi_cap = document.getElementById('raw-video-cap-nextButton');
const resetButton_rawVi_cap = document.getElementById('raw-video-cap-resetButton');

function updateFrame_rawVi_cap() {
    // Update the image frame
    frameElement_rawVi_cap.src = raw_video_cap_frames[currentFrame_raw_video_cap];
    
    // Update the skill and reasoning text
    skillElement_rawVi_cap.innerText = common_skill_text + raw_video_cap_skills[currentFrame_raw_video_cap];
    reasoningElement_rawVi_cap.innerText =raw_video_cap_reasonings[currentFrame_raw_video_cap];
    
    // Disable buttons if necessary
    prevButton_rawVi_cap.disabled = currentFrame_raw_video_cap === 0;
    nextButton_rawVi_cap.disabled = currentFrame_raw_video_cap === raw_video_cap_frames.length - 1;
}

prevButton_rawVi_cap.addEventListener('click', () => {
    if (currentFrame_raw_video_cap > 0) {
        currentFrame_raw_video_cap--;
        updateFrame_rawVi_cap();
    }
});

nextButton_rawVi_cap.addEventListener('click', () => {
    if (currentFrame_raw_video_cap < raw_video_cap_frames.length - 1) {
        currentFrame_raw_video_cap++;
        updateFrame_rawVi_cap();
    }
});

resetButton_rawVi_cap.addEventListener('click', () => {
    currentFrame_raw_video_cap = 0; // Reset to the first frame
    updateFrame_rawVi_cap();
});

// Initial state
updateFrame_rawVi_cap();

const planElement_rawVi_cap = document.getElementById('raw-video-cap-plan');
planElement_rawVi_cap.textContent = raw_video_cap_demo_plan; // Use textContent to preserve formatting
Prism.highlightElement(planElement_rawVi_cap); // Apply Prism.js highlighting
