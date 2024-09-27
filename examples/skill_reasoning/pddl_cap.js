document.addEventListener("DOMContentLoaded", function() {
    const pddl_origin_cap = `
    pddl
    (define (domain robot_skills)
      (:requirements :strips :typing)
      (:types 
        object
        pose
      )
      (:predicates 
        (at ?obj - object ?p - pose)
        (grasped ?obj - object)
        (hand_open)
      )
      (:action move_object
        :parameters (?obj - object ?p - pose)
        :precondition (and (grasped ?obj))
        :effect (at ?obj ?p)
      )
      (:action grasp
        :parameters (?obj - object)
        :precondition (and (not (grasped ?obj)) (hand_open))
        :effect (and (grasped ?obj) (not (hand_open)))
      )
      (:action open_hand
        :parameters ()
        :precondition (grasped ?obj)
        :effect (and (hand_open) (not (grasped ?obj)))
      )
      (:action tighten
        :parameters (?obj - object)
        :precondition (grasped ?obj)
        :effect (tightened ?obj)
      )
    )
    `;
    
    const codeContainer_pddl_cap = document.getElementById("pddl-cap-container");
    const codeSplit_pddl_cap = pddl_origin_cap.trim().split("\n");
    const leftCol_pddl_cap = document.createElement("div");
    const rightCol_pddl_cap = document.createElement("div");

    leftCol_pddl_cap.style.width = "48%";
    leftCol_pddl_cap.style.float = "left";
    leftCol_pddl_cap.style.textAlign = "left";  // Ensure left alignment for left column
    rightCol_pddl_cap.style.width = "48%";
    rightCol_pddl_cap.style.float = "right";
    rightCol_pddl_cap.style.textAlign = "left";  // Ensure left alignment for right column

    const midPoint_pddl_cap = Math.ceil(codeSplit_pddl_cap.length / 2);

    // Left column
    for (let i = 0; i < midPoint_pddl_cap; i++) {
        leftCol_pddl_cap.innerHTML += codeSplit_pddl_cap[i] + "<br>";
    }

    // Right column
    for (let i = midPoint_pddl_cap; i < codeSplit_pddl_cap.length; i++) {
        rightCol_pddl_cap.innerHTML += codeSplit_pddl_cap[i] + "<br>";
    }

    codeContainer_pddl_cap.appendChild(leftCol_pddl_cap);
    codeContainer_pddl_cap.appendChild(rightCol_pddl_cap);
});
