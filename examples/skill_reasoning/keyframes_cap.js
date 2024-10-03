const keyframes_cap_frames = [
    "examples/experiments/skill_sequence/full_demo_cap/frame_0.png",
    "examples/experiments/skill_sequence/full_demo_cap/frame_1.png",
    "examples/experiments/skill_sequence/full_demo_cap/frame_2.png",
    "examples/experiments/skill_sequence/full_demo_cap/frame_3.png",
    "examples/experiments/skill_sequence/full_demo_cap/frame_4.png",
    "examples/experiments/skill_sequence/full_demo_cap/frame_5.png",
    "examples/experiments/skill_sequence/full_demo_cap/frame_6.png",
    "examples/experiments/skill_sequence/full_demo_cap/frame_7.png",
    "examples/experiments/skill_sequence/full_demo_cap/frame_8.png",
    "examples/experiments/skill_sequence/full_demo_cap/frame_9.png",
    "examples/experiments/skill_sequence/full_demo_cap/frame_10.png",
    "examples/experiments/skill_sequence/full_demo_cap/frame_11.png",
    "examples/experiments/skill_sequence/full_demo_cap/frame_12.png",
    "examples/experiments/skill_sequence/full_demo_cap/frame_13.png",
    "examples/experiments/skill_sequence/full_demo_cap/frame_14.png",
    "examples/experiments/skill_sequence/full_demo_cap/frame_15.png",
    "examples/experiments/skill_sequence/full_demo_cap/frame_16.png",
    "examples/experiments/skill_sequence/full_demo_cap/frame_17.png",
    "examples/experiments/skill_sequence/full_demo_cap/frame_18.png",
    "examples/experiments/skill_sequence/full_demo_cap/frame_19.png",
    "examples/experiments/skill_sequence/full_demo_cap/frame_20.png",
    "examples/experiments/skill_sequence/full_demo_cap/frame_21.png",
    "examples/experiments/skill_sequence/full_demo_cap/frame_22.png",
    "examples/experiments/skill_sequence/full_demo_cap/frame_23.png",
    "examples/experiments/skill_sequence/full_demo_cap/frame_24.png",
    "examples/experiments/skill_sequence/full_demo_cap/frame_25.png",
    "examples/experiments/skill_sequence/full_demo_cap/frame_26.png",
    "examples/experiments/skill_sequence/full_demo_cap/frame_27.png",
    "examples/experiments/skill_sequence/full_demo_cap/frame_28.png",
    "examples/experiments/skill_sequence/full_demo_cap/frame_29.png",
    "examples/experiments/skill_sequence/full_demo_cap/frame_30.png",
    "examples/experiments/skill_sequence/full_demo_cap/frame_31.png",
    "examples/experiments/skill_sequence/full_demo_cap/frame_32.png",

];




let currentFrame_keyframes_cap = 0;

const frameElement_keyframes_cap = document.getElementById('keyframes-cap-frame');
const prevButton_keyframes_cap = document.getElementById('keyframes-cap-prevButton');
const nextButton_keyframes_cap = document.getElementById('keyframes-cap-nextButton');
const resetButton_keyframes_cap = document.getElementById('keyframes-cap-resetButton');

function updateFrame_keyframes_cap() {
    // Update the image frame
    frameElement_keyframes_cap.src = keyframes_cap_frames[currentFrame_keyframes_cap];
    
    // Disable buttons if necessary
    prevButton_keyframes_cap.disabled = currentFrame_keyframes_cap === 0;
    nextButton_keyframes_cap.disabled = currentFrame_keyframes_cap === keyframes_cap_frames.length - 1;
}

prevButton_keyframes_cap.addEventListener('click', () => {
    if (currentFrame_keyframes_cap > 0) {
        currentFrame_keyframes_cap--;
        updateFrame_keyframes_cap();
    }
});

nextButton_keyframes_cap.addEventListener('click', () => {
    if (currentFrame_keyframes_cap < keyframes_cap_frames.length - 1) {
        currentFrame_keyframes_cap++;
        updateFrame_keyframes_cap();
    }
});

resetButton_keyframes_cap.addEventListener('click', () => {
    currentFrame_keyframes_cap = 0; // Reset to the first frame
    updateFrame_keyframes_cap();
});

// Initial state
updateFrame_keyframes_cap();


