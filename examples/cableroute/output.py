"""
Strategy:
1. The robot will first move the cable downwards until it feels a resistance. This resistance will indicate that the cable has hit the surface of the tunnel.
2. Once the cable has hit the surface, the robot will move the cable horizontally (left and right) to search for the opening of the tunnel. The robot will know it has found the opening when it no longer feels a resistance in the downward direction.
3. After finding the opening, the robot will move the cable downwards into the tunnel until it feels a resistance again. This resistance will indicate that the cable has hit the bottom of the tunnel.
4. The robot will then move the cable upwards to unroute it from the tunnel.

Here is the program using the APIs above:
"""

```python
# Step 1: Move the cable downwards until it hits the surface of the tunnel
down_pose = pose(1).multiply(pose3_rpy(translation=[0, 0, -.01]))
cartesian_admittance_move(
  target_pose=down_pose,
  termination_condition=types_pb2.Condition(
      conjunction_condition=types_pb2.ConjunctionCondition(
        operation=types_pb2.ConjunctionCondition.ANY_OF,
        conditions=[contact_condition, position_condition]
    )))

# Step 2: Move the cable horizontally to search for the opening of the tunnel
right_pose = pose(1).multiply(pose3_rpy(translation=[-0.01, 0, 0]))
cartesian_admittance_move(
  target_pose=right_pose,
  termination_condition=types_pb2.Condition(
      conjunction_condition=types_pb2.ConjunctionCondition(
        operation=types_pb2.ConjunctionCondition.ANY_OF,
        conditions=[leftwardsnag_condition, position_condition],
    )))

# Step 3: Move the cable downwards into the tunnel until it hits the bottom
down_pose = pose(1).multiply(pose3_rpy(translation=[0, 0, -.01]))
cartesian_admittance_move(
  target_pose=down_pose,
  termination_condition=types_pb2.Condition(
      conjunction_condition=types_pb2.ConjunctionCondition(
        operation=types_pb2.ConjunctionCondition.ANY_OF,
        conditions=[contact_condition, position_condition]
    )))

# Step 4: Move the cable upwards to unroute it from the tunnel
up_pose = pose(1).multiply(pose3_rpy(translation=[0, 0, .01]))
cartesian_admittance_move(
  target_pose=up_pose,
  termination_condition=types_pb2.Condition(
      conjunction_condition=types_pb2.ConjunctionCondition(
        operation=types_pb2.ConjunctionCondition.ANY_OF,
        conditions=[snag_condition, position_condition]
    )))
```

This program will ensure that the cable is routed into the tunnel and then unrouted from it.
