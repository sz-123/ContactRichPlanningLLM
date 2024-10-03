// Define the task description as a JavaScript string
var capPDDL= `
(define (domain robot_skills)
  (:requirements :strips :typing)
  (:types object)
  (:predicates
    (at ?obj - object ?pose - pose)
    (grasped ?obj - object)
    (released ?obj - object)
    (tightened ?obj - object)
  )
  (:action move_object
    :parameters (?obj - object ?pose - pose)
    :precondition (and (at ?obj ?current_pose))
    :effect (and (not (at ?obj ?current_pose)) (at ?obj ?pose))
  )
  (:action grasp
    :parameters (?obj - object)
    :precondition (and (at ?obj ?pose))
    :effect (and (grasped ?obj) (not (released ?obj)))
  )
  (:action release
    :parameters (?obj - object)
    :precondition (and (grasped ?obj))
    :effect (and (released ?obj) (not (grasped ?obj)))
  )
  (:action tighten
    :parameters (?obj - object)
    :precondition (and (grasped ?obj))
    :effect (tightened ?obj)
  )
)

`;

  document.getElementById('cap-pddl-container').innerHTML = '<p>' + capPDDL.trim().replace(/\n/g, '<br>') + '</p>';