const keyframes_cable_frames = [
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




let currentFrame_keyframes_cable = 0;

const frameElement_keyframes_cable = document.getElementById('keyframes-cable-frame');
const prevButton_keyframes_cable = document.getElementById('keyframes-cable-prevButton');
const nextButton_keyframes_cable = document.getElementById('keyframes-cable-nextButton');
const resetButton_keyframes_cable = document.getElementById('keyframes-cable-resetButton');

function updateFrame_keyframes_cable() {
    // Update the image frame
    frameElement_keyframes_cable.src = keyframes_cable_frames[currentFrame_keyframes_cable];
    
    // Disable buttons if necessary
    prevButton_keyframes_cable.disabled = currentFrame_keyframes_cable === 0;
    nextButton_keyframes_cable.disabled = currentFrame_keyframes_cable === keyframes_cable_frames.length - 1;
}

prevButton_keyframes_cable.addEventListener('click', () => {
    if (currentFrame_keyframes_cable > 0) {
        currentFrame_keyframes_cable--;
        updateFrame_keyframes_cable();
    }
});

nextButton_keyframes_cable.addEventListener('click', () => {
    if (currentFrame_keyframes_cable < keyframes_cable_frames.length - 1) {
        currentFrame_keyframes_cable++;
        updateFrame_keyframes_cable();
    }
});

resetButton_keyframes_cable.addEventListener('click', () => {
    currentFrame_keyframes_cable = 0; // Reset to the first frame
    updateFrame_keyframes_cable();
});

// Initial state
updateFrame_keyframes_cable();


