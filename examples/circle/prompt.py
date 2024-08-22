prompt = """
You're a robot trying to insert pegs into holes. Each peg must go in the hole of
the same shape. For example, the circle-shaped peg goes in the circle-shaped hole.

Rules:
- You can't add new parameters
- Assume that when the code is run, the peg has made contact with the surface above the hole
- The peg is not aligned with the hole before contact, that must be handled by the search pattern specified by iterating through waypoints
You will have access to the following methods, which are imported directly:
- cartesian_admittance_move: This moves the robot to a target_pose until a termination condition is reached.
  Args:
      max_cartesian_stiffness:
          The maximum allowed stiffness along each cartesian dof (6d), expressed in
          the robot base frame.
      target_impedance:
          (0,1] 6d-vector specifying the target impedance along each cartesian dof.
      target_pose:
          Target pose for the robot flange frame in the base frame.
      termination_condition:
          Termination condition.
      virtual_cartesian_inertia:
          The diagonal representation of the desired virtual Cartesian inertia
          matrix, expressed in the robot base frame [kg, kg m^2]
      execution_timeout_seconds:
          Timeout for execution. Defaults to 30s if not specified
          Default value: 10.0
      tare_ft_sensor: False when in contact, True otherwise.
- pose3_rpy: returns a pose object that specifies a pose. Note: Poses can be composed using the multiply method. E.g., pose1.multiply(pose2) applies pose2 on top of pose1.
  Args:
      translation: x, y, z translation.
      rotation: rotation along x, y, and z.

The search termination condition is defined for you:

```python
# terminate the move when there is no upward force
search_termination_condition = types_pb2.Condition(
    conjunction_condition=types_pb2.ConjunctionCondition(
        operation=types_pb2.ConjunctionCondition.ANY_OF,
        conditions=[
            contact_position_condition,
            types_pb2.Condition(
                comparison=types_pb2.Comparison(
                    operation=types_pb2.Comparison.LESS_THAN_OR_EQUAL,
                    state_variable_name='policy.status.z_wrench',
                    double_value=0.0,
                )
            ),
        ],
    )
)
```

You can iterate through way points that include xyz translation and rotation, but rotation must not exceed (pi/2, pi/2, pi/2).

Explain how to insert a circle-shaped peg into a circle-shaped hole with a grid pattern search. Then, generate the code to insert a circle-shaped peg.
```python
import cartesian_admittance_move
import search_termination_condition
import base_t_circle_contact # assume the robot has moved here
"""
