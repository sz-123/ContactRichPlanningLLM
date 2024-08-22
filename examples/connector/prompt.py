prompt = """
You're a robot holding a cable that's threaded through a tunnel with a small opening at the top.
You need to unroute the cable by removing it from the tunnel.

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
- types_pb2.Comparison: this specifies the termination condition above. It can't be accessed directly, it can only be passed as an argument to the cartesian_admittance_move method.
  Args:
      operation: types_pb2.Comparison type. One of GREATER_THAN_OR_EQUAL, LESS_THAN_OR_EQUAL, APPROX_EQUAL, or APPROX_NOT_EQUAL.
      state_variable_name: Variable where condition is applied. One of policy.status.{x_force, y_force, z_force, translation_error, rotation_error}.
      double_value: [-0.4, 0.4] value of state variable on which operation is applied
- types_pb2.Condition: Can't be accessed directly, can only be passed as an argument to the cartesian_admittance_move method.
  Args:
      comparison: types_pb2.Comparison type.
- types_pb2.ConjunctionCondition: Wrapper to compose multiple conditions together.
  Args:
      operation: types_pb2.ConjunctionCondition type. One of ALL_OF or ANY_OF .
      conditions: A list of Conditions over which the operation is applied
- pose3_rpy: returns a pose object that specifies a pose. Note: Poses can be composed using the multiply method. E.g., pose1.multiply(pose2) applies pose2 on top of pose1.
  Args:
      translation: x, y, z translation.
      rotation: rotation along x, y, and z.
- move_gripper: opens and closes the gripper.
  Args:
      percent_open: Controls how open gripper is. 0 is fully closed, 100 is fully open.
- grasp_cable: grab the free edge of the routed cable

You will also have access to the following fields:
- pose(number): the robot pose just above number. You can build more poses by using this as a reference with the multiply method.
  Args:
      number: the pose number for the layout below.
- grasp(pose): go to grasp pose and grasp the cable.
  Args:
      pose: the robot pose above the grasp position

Rules:
- Don't define any new methods
- Don't call any undefined methods
- Don't add any if statements or while loops

Here are some examples using the cartesian_admittance_move method while holding the cable:

```python
position_condition = types_pb2.Comparison(
  operation=types_pb2.Comparison.LESS_THAN_OR_EQUAL,
  state_variable_name="policy.status.translation_error",
  double_value=0.001,
)

# move down until contact is reached
upward_force_threshold = 0.4
contact_condition = types_pb2.Condition(
    comparison=types_pb2.Comparison(
        operation=types_pb2.Comparison.GREATER_THAN_OR_EQUAL,
        state_variable_name="policy.status.z_force",
        double_value=upward_force_threshold,
    )
)
down_pose = pose(1).multiply(pose3_rpy(translation=[0, 0, -.01]))
cartesian_admittance_move(
  target_pose=down_pose,
  termination_condition=termination_condition=types_pb2.ConjunctionCondition(
        operation=types_pb2.ConjunctionCondition.ANY_OF,
        conditions=[contact_condition, position_condition]
    ))

# move up unless snag is detected
downward_force_threshold = -0.2
snag_condition = types_pb2.Condition(
    comparison=types_pb2.Comparison(
        operation=types_pb2.Comparison.LESS_THAN_OR_EQUAL,
        state_variable_name="policy.status.z_force",
        double_value=downward_force_threshold,
    )
)
up_pose = pose(1).multiply(pose3_rpy(translation=[0, 0, .01]))
cartesian_admittance_move(
  target_pose=up_pose,
  termination_condition=termination_condition=types_pb2.ConjunctionCondition(
        operation=types_pb2.ConjunctionCondition.ANY_OF,
        conditions=[snag_condition, position_condition]
    ))

# move the cable to the right unless snag is detected
leftward_force_threshold = 0.2
leftwardsnag_condition = types_pb2.Condition(
    comparison=types_pb2.Comparison(
        operation=types_pb2.Comparison.GREATER_THAN_OR_EQUAL,
        state_variable_name="policy.status.x_force",
        double_value=leftward_force_threshold,
    )
)
right_pose = pose(1).multiply(pose3_rpy(translation=[-0.01, 0, 0]))
cartesian_admittance_move(
  target_pose=up_pose,
  termination_condition=termination_condition=types_pb2.ConjunctionCondition(
        operation=types_pb2.ConjunctionCondition.ANY_OF,
        conditions=[leftwardsnag_condition, position_condition],
    ))
```
Now assume the robot is holding a waterproof connector above a port. Use the above methods to perform a grid pattern search insertion. The rewrite it to remove any ifs or while loops.
"""

messages = [{"role": "user", "content":prompt}]
response = openai.ChatCompletion.create(
    model="gpt-4",
    messages = messages,
    temperature=0.0,
    max_tokens=512*3,
    frequency_penalty=0.0
)
print(response["choices"][0]["message"]["content"])
