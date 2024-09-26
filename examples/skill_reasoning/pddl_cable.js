document.addEventListener("DOMContentLoaded", function() {
    const code = `
    TODO: check the PDDL domain for the cable skill library.
    (define (domain robot_skills)
      (:requirements :strips :typing)
      (:types 
        object
        pose
      )
      (:predicates 
        (at ?obj - object ?pos - pose)
        (grasped ?obj - object)
        (hand_open)
      )
      (:action move_object
        :parameters (?obj - object ?pos - pose)
        :precondition (and (grasped ?obj))
        :effect (at ?obj ?pos)
      )
      (:action grasp
        :parameters (?obj - object)
        :precondition (and (hand_open))
        :effect (and (grasped ?obj) (not (hand_open)))
      )
      (:action open_hand
        :parameters ()
        :precondition (and (grasped ?obj))
        :effect (and (hand_open) (not (grasped ?obj)))
      )
      (:action tighten
        :parameters (?obj - object)
        :precondition (and (grasped ?obj))
        :effect (and (not (hand_open)))
      )
    )
    `;
    
    const codeContainer = document.getElementById("pddl-cable-container");
    const codeSplit = code.trim().split("\n");
    const leftCol = document.createElement("div");
    const rightCol = document.createElement("div");

    leftCol.style.width = "48%";
    leftCol.style.float = "left";
    leftCol.style.textAlign = "left";  // Ensure left alignment for left column
    rightCol.style.width = "48%";
    rightCol.style.float = "right";
    rightCol.style.textAlign = "left";  // Ensure left alignment for right column

    const midPoint = Math.ceil(codeSplit.length / 2);

    // Left column
    for (let i = 0; i < midPoint; i++) {
        leftCol.innerHTML += codeSplit[i] + "<br>";
    }

    // Right column
    for (let i = midPoint; i < codeSplit.length; i++) {
        rightCol.innerHTML += codeSplit[i] + "<br>";
    }

    codeContainer.appendChild(leftCol);
    codeContainer.appendChild(rightCol);
});
