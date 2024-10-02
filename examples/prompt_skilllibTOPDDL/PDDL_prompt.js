// PDDL domain result variables
const resultCablePDDLDomain = `
<pre style="background-color: #f8f9fa; overflow: visible; white-space: pre-wrap; word-wrap: break-word;"><code>TODO: check the PDDL domain for the cable skill library.
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
</code></pre>
`;

const resultCapPDDLDomain = `
<pre style="background-color: #f8f9fa; overflow: visible; white-space: pre-wrap; word-wrap: break-word;"><code>TODO: check the PDDL domain for the cap skill library here
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
</code></pre>
`;

document.getElementById("result-PDDL-container").innerHTML = "<h1 style='font-size: 40px; text-align: center;'>Result</h1>";


// Event listeners for buttons
document.getElementById("cable-skilllib-button").addEventListener("click", function() {
    document.getElementById("result-PDDL-container").innerHTML = resultCablePDDLDomain;
});

document.getElementById("cap-skilllib-button").addEventListener("click", function() {
    document.getElementById("result-PDDL-container").innerHTML = resultCapPDDLDomain;
});
