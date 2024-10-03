const full_demo_cap_frames = [
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

const common_skill_text = "Skill: ";

const full_demo_cap_skills = [
    "grasp cap",
    "move_object cap bottle1",
    "move_object cap bottle1",
    "move_object cap bottle1",
    "release cap",
    "idle",
    "grasp cap",
    "tighten cap",
    "release cap",
    "idle",
    "grasp cap",
    "tighten cap",
    "release cap",
    "idle",
    "grasp cap",
    "tighten cap",
    "release cap",
    "idle",
    "grasp cap",
    "tighten cap",
    "release cap",
    "idle",
    "grasp cap",
    "tighten cap",
    "release cap",
    "idle",
    "grasp cap",
    "tighten cap",
    "release cap",
    "idle",
    "grasp cap",
    "tighten cap",
    "release cap",
    "idle",
    "grasp cap",
    "tighten cap",
    "release cap",
    "idle",
    "grasp cap",
    "tighten cap",
    "release cap",
    "idle"
];

const common_reasoning_text = "Reasoning: ";

const full_demo_cap_reasonings = ["Because the tactile status is 'grasped' and the cap is in the robot's grip.",
    "Because the robot is moving the cap towards the bottle while maintaining the 'grasped' status.",
    "Because the robot continues moving the cap towards the bottle, still 'grasped.'",
    "Because the robot is positioning the cap over the bottle, maintaining the 'grasped' status.",
    "Because the tactile status changes to 'released,' indicating the cap is placed on the bottle.",
    "Because the tactile status is 'idle,' indicating no active manipulation.",
    "Because the robot re-grasps the cap, as indicated by the 'grasped' status.",
    "Because the tactile status is 'under torque,' indicating the robot is tightening the cap.",
    "Because the tactile status changes to 'released,' indicating the cap is tightened and released.",
    "Because the tactile status is 'idle,' indicating no active manipulation.",
    "Because the robot re-grasps the cap, as indicated by the 'grasped' status.",
    "Because the tactile status is 'under torque,' indicating the robot is tightening the cap.",
    "Because the tactile status changes to 'released,' indicating the cap is tightened and released.",
    "Because the tactile status is 'idle,' indicating no active manipulation.",
    "Because the robot re-grasps the cap, as indicated by the 'grasped' status.",
    "Because the tactile status is 'under torque,' indicating the robot is tightening the cap.",
    "Because the tactile status changes to 'released,' indicating the cap is tightened and released.",
    "Because the tactile status is 'idle,' indicating no active manipulation.",
    "Because the robot re-grasps the cap, as indicated by the 'grasped' status.",
    "Because the tactile status is 'under linear force,' indicating the robot is applying force to tighten the cap.",
    "Because the tactile status changes to 'released,' indicating the cap is tightened and released.",
    "Because the tactile status is 'idle,' indicating no active manipulation.",
    "Because the robot re-grasps the cap, as indicated by the 'grasped' status.",
    "Because the tactile status is 'under torque,' indicating the robot is tightening the cap.",
    "Because the tactile status changes to 'released,' indicating the cap is tightened and released.",
    "Because the tactile status is 'idle,' indicating no active manipulation.",
    "Because the robot re-grasps the cap, as indicated by the 'grasped' status.",
    "Because the tactile status is 'under torque,' indicating the robot is tightening the cap.",
    "Because the tactile status changes to 'released,' indicating the cap is tightened and released.",
    "Because the tactile status is 'idle,' indicating no active manipulation.",
    "Because the robot re-grasps the cap, as indicated by the 'grasped' status.",
    "Because the tactile status is 'under linear force,' indicating the robot is applying force to tighten the cap.",
    "Because the tactile status changes to 'released,' indicating the cap is tightened and released."
];

const full_demo_cap_plan =`
# Initialize the CapSkillLibrary
cap_skill_library = CapSkillLibrary()

# Executable plan
cap_skill_library.grasp()
cap_skill_library.move_object(get_object_property('bottle1', 'position'))
cap_skill_library.release()

cap_skill_library.grasp()
cap_skill_library.tighten()
cap_skill_library.release()

cap_skill_library.grasp()
cap_skill_library.tighten()
cap_skill_library.release()

cap_skill_library.grasp()
cap_skill_library.tighten()
cap_skill_library.release()

cap_skill_library.grasp()
cap_skill_library.tighten()
cap_skill_library.release()

cap_skill_library.grasp()
cap_skill_library.tighten()
cap_skill_library.release()

cap_skill_library.grasp()
cap_skill_library.tighten()
cap_skill_library.release()

cap_skill_library.grasp()
cap_skill_library.tighten()
cap_skill_library.release()
`;





let currentFrame_full_cap = 0;

const frameElement_full_cap = document.getElementById('full-demo-cap-frame');
const skillElement_full_cap = document.getElementById('full-demo-cap-skill');
const reasoningElement_full_cap = document.getElementById('full-demo-cap-reasoning');
const prevButton_full_cap = document.getElementById('full-demo-cap-prevButton');
const nextButton_full_cap = document.getElementById('full-demo-cap-nextButton');
const resetButton_full_cap = document.getElementById('full-demo-cap-resetButton');

function updateFrame_full_cap() {
    // Update the image frame
    frameElement_full_cap.src = full_demo_cap_frames[currentFrame_full_cap];
    
    // Update the skill and reasoning text
    skillElement_full_cap.innerText = common_skill_text + full_demo_cap_skills[currentFrame_full_cap];
    reasoningElement_full_cap.innerText =full_demo_cap_reasonings[currentFrame_full_cap];
    
    // Disable buttons if necessary
    prevButton_full_cap.disabled = currentFrame_full_cap === 0;
    nextButton_full_cap.disabled = currentFrame_full_cap === full_demo_cap_frames.length - 1;
}

prevButton_full_cap.addEventListener('click', () => {
    if (currentFrame_full_cap > 0) {
        currentFrame_full_cap--;
        updateFrame_full_cap();
    }
});

nextButton_full_cap.addEventListener('click', () => {
    if (currentFrame_full_cap < full_demo_cap_frames.length - 1) {
        currentFrame_full_cap++;
        updateFrame_full_cap();
    }
});

resetButton_full_cap.addEventListener('click', () => {
    currentFrame_full_cap = 0; // Reset to the first frame
    updateFrame_full_cap();
});

// Initial state
updateFrame_full_cap();

const planElement_full_cap = document.getElementById('full-demo-cap-plan');
planElement_full_cap.textContent = full_demo_cap_plan; // Use textContent to preserve formatting
Prism.highlightElement(planElement_full_cap); // Apply Prism.js highlighting

