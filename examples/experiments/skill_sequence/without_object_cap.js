const without_object_cap_frames = [
    "examples/experiments/skill_sequence/without_object_cap/frame_0.png",
    "examples/experiments/skill_sequence/without_object_cap/frame_1.png",
    "examples/experiments/skill_sequence/without_object_cap/frame_2.png",
    "examples/experiments/skill_sequence/without_object_cap/frame_3.png",
    "examples/experiments/skill_sequence/without_object_cap/frame_4.png",
    "examples/experiments/skill_sequence/without_object_cap/frame_5.png",
    "examples/experiments/skill_sequence/without_object_cap/frame_6.png",
    "examples/experiments/skill_sequence/without_object_cap/frame_7.png",
    "examples/experiments/skill_sequence/without_object_cap/frame_8.png",
    "examples/experiments/skill_sequence/without_object_cap/frame_9.png",
    "examples/experiments/skill_sequence/without_object_cap/frame_10.png",
    "examples/experiments/skill_sequence/without_object_cap/frame_11.png",
    "examples/experiments/skill_sequence/without_object_cap/frame_12.png",
    "examples/experiments/skill_sequence/without_object_cap/frame_13.png",
    "examples/experiments/skill_sequence/without_object_cap/frame_14.png",
    "examples/experiments/skill_sequence/without_object_cap/frame_15.png",
    "examples/experiments/skill_sequence/without_object_cap/frame_16.png",
    "examples/experiments/skill_sequence/without_object_cap/frame_17.png",
    "examples/experiments/skill_sequence/without_object_cap/frame_18.png",
    "examples/experiments/skill_sequence/without_object_cap/frame_19.png",
    "examples/experiments/skill_sequence/without_object_cap/frame_20.png",
    "examples/experiments/skill_sequence/without_object_cap/frame_21.png",
    "examples/experiments/skill_sequence/without_object_cap/frame_22.png",
    "examples/experiments/skill_sequence/without_object_cap/frame_23.png",
    "examples/experiments/skill_sequence/without_object_cap/frame_24.png",
    "examples/experiments/skill_sequence/without_object_cap/frame_25.png",
    "examples/experiments/skill_sequence/without_object_cap/frame_26.png",
    "examples/experiments/skill_sequence/without_object_cap/frame_27.png",
    "examples/experiments/skill_sequence/without_object_cap/frame_28.png",
    "examples/experiments/skill_sequence/without_object_cap/frame_29.png",
    "examples/experiments/skill_sequence/without_object_cap/frame_30.png",
    "examples/experiments/skill_sequence/without_object_cap/frame_31.png",
    "examples/experiments/skill_sequence/without_object_cap/frame_32.png",
];

const without_object_cap_skills = [
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
"tighten cap",
"tighten cap",
"tighten cap",
"tighten cap",
"tighten cap",
"tighten cap",
"release cap",
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



const without_object_cap_reasonings = [
    "Because the robot is moving the cap towards the bottle.",
    "Because the robot is grasping the cap.",
    "Because the robot is moving the cap towards the bottle.",
    "Because the robot is still moving the cap towards the bottle.",
    "Because the robot is still moving the cap towards the bottle.",
    "Because the robot is still moving the cap towards the bottle.",
    "Because the robot is still moving the cap towards the bottle.",
    "Because the robot is still moving the cap towards the bottle.",
    "Because the robot is still moving the cap towards the bottle.",
    "Because the robot is still moving the cap towards the bottle.",
    "Because the robot is tightening the cap onto the bottle.",
    "Because the robot is still tightening the cap onto the bottle.",
    "Because the robot is still tightening the cap onto the bottle.",
    "Because the robot is still tightening the cap onto the bottle.",
    "Because the robot is still tightening the cap onto the bottle.",
    "Because the robot is still tightening the cap onto the bottle.",
    "Because the robot is releasing the cap after tightening it onto the bottle.",
    "Because the robot is still moving the cap towards the bottle.",
    "Because the robot is still moving the cap towards the bottle.",
    "Because the robot is still moving the cap towards the bottle.",
    "Because the robot is still moving the cap towards the bottle.",
    "Because the robot is still moving the cap towards the bottle.",
    "Because the robot is still moving the cap towards the bottle.",
    "Because the robot is still moving the cap towards the bottle.",
    "Because the robot is still moving the cap towards the bottle.",
    "Because the robot is still moving the cap towards the bottle.",
    "Because the robot is still moving the cap towards the bottle.",
    "Because the robot is still moving the cap towards the bottle.",
    "Because the robot is still moving the cap towards the bottle.",
    "Because the robot is still moving the cap towards the bottle.",
    "Because the robot is still moving the cap towards the bottle.",
    "Because the robot is still moving the cap towards the bottle."
];


const without_object_cap_demo_plan =`
# Initialize the CapSkillLibrary
cap_skill_library = CapSkillLibrary()

# Executable plan
cap_skill_library.move_object(get_object_property('bottle1', 'position'))
cap_skill_library.grasp()
cap_skill_library.move_object(get_object_property('bottle1', 'position'))
cap_skill_library.tighten()
cap_skill_library.release()
cap_skill_library.move_object(get_object_property('bottle1', 'position'))
`;





let currentFrame_without_object_cap = 0;

const frameElement_withoutOb_cap = document.getElementById('without-object-cap-frame');
const skillElement_withoutOb_cap = document.getElementById('without-object-cap-skill');
const reasoningElement_withoutOb_cap = document.getElementById('without-object-cap-reasoning');
const prevButton_withoutOb_cap = document.getElementById('without-object-cap-prevButton');
const nextButton_withoutOb_cap = document.getElementById('without-object-cap-nextButton');
const resetButton_withoutOb_cap = document.getElementById('without-object-cap-resetButton');

function updateFrame_withoutOb_cap() {
    // Update the image frame
    frameElement_withoutOb_cap.src = without_object_cap_frames[currentFrame_without_object_cap];
    
    // Update the skill and reasoning text
    skillElement_withoutOb_cap.innerText = common_skill_text + without_object_cap_skills[currentFrame_without_object_cap];
    reasoningElement_withoutOb_cap.innerText =without_object_cap_reasonings[currentFrame_without_object_cap];
    
    // Disable buttons if necessary
    prevButton_withoutOb_cap.disabled = currentFrame_without_object_cap === 0;
    nextButton_withoutOb_cap.disabled = currentFrame_without_object_cap === without_object_cap_frames.length - 1;
}

prevButton_withoutOb_cap.addEventListener('click', () => {
    if (currentFrame_without_object_cap > 0) {
        currentFrame_without_object_cap--;
        updateFrame_withoutOb_cap();
    }
});

nextButton_withoutOb_cap.addEventListener('click', () => {
    if (currentFrame_without_object_cap < without_object_frames.length - 1) {
        currentFrame_without_object_cap++;
        updateFrame_withoutOb_cap();
    }
});

resetButton_withoutOb_cap.addEventListener('click', () => {
    currentFrame_without_object = 0; // Reset to the first frame
    updateFrame_withoutOb_cap();
});

// Initial state
updateFrame_withoutOb_cap();

const planElement_withoutOb_cap = document.getElementById('without-object-cap-plan');
planElement_withoutOb_cap.textContent = without_object_demo_plan; // Use textContent to preserve formatting
Prism.highlightElement(planElement_withoutOb_cap); // Apply Prism.js highlighting
