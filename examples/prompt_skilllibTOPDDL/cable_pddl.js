// Define the task description as a JavaScript string
var cablePDDL= `
(define (domain robot_skills)
  (:requirements :strips :typing)
  (:types 
    object
    pose
    direction
    env_object
  )
  (:predicates 
    (at ?obj - object ?pos - pose)
    (grasped ?obj - object)
    (released ?obj - object)
    (inserted ?obj - object ?dir - direction ?env - env_object)
    (stretched ?obj - object)
  )
  (:action move_object
    :parameters (?obj - object ?pos - pose)
    :precondition ()
    :effect (and (at ?obj ?pos))
  )
  (:action grasp
    :parameters (?obj - object)
    :precondition ()
    :effect (and (grasped ?obj))
  )
  (:action release
    :parameters (?obj - object)
    :precondition (grasped ?obj)
    :effect (and (released ?obj) (not (grasped ?obj)))
  )
  (:action insert
    :parameters (?obj - object ?dir - direction ?env - env_object)
    :precondition ()
    :effect (and (inserted ?obj ?dir ?env))
  )
  (:action stretch
    :parameters (?obj - object)
    :precondition ()
    :effect (and (stretched ?obj))
  )
)
`;

  document.getElementById('cable-pddl-container').innerHTML = '<p>' + cablePDDL.trim().replace(/\n/g, '<br>') + '</p>';