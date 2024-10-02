// Define the task description as a JavaScript string
var capPDDL= `
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

  document.getElementById('cap-pddl-container').innerHTML = '<p>' + capPDDL.trim().replace(/\n/g, '<br>') + '</p>';