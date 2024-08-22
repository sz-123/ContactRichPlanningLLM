
"""
Strategy:
1. First, we will move the cable upwards until we detect a snag. This will help us to find the top of the tunnel.
2. Once we detect a snag, we will move the cable to the right until we detect another snag. This will help us to find the right wall of the tunnel.
3. After finding the right wall, we will move the cable to the left until we no longer detect a snag. This will help us to find the opening of the tunnel.
4. Finally, we will move the cable upwards again to lift it out of the tunnel.

Program:
"""

# Step 1: Move up until snag is detected
downward_force_threshold = -0.4
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
  termination_condition=types_pb2.ConjunctionCondition(
        operation=types_pb2.ConjunctionCondition.ANY_OF,
        conditions=[snag_condition, position_condition]
    ))

# Step 2: Move right until snag is detected
leftward_force_threshold = 0.4
leftwardsnag_condition = types_pb2.Condition(
    comparison=types_pb2.Comparison(
        operation=types_pb2.Comparison.GREATER_THAN_OR_EQUAL,
        state_variable_name="policy.status.x_force",
        double_value=leftward_force_threshold,
    )
)
right_pose = pose(1).multiply(pose3_rpy(translation=[-0.01, 0, 0]))
cartesian_admittance_move(
  target_pose=right_pose,
  termination_condition=types_pb2.ConjunctionCondition(
        operation=types_pb2.ConjunctionCondition.ANY_OF,
        conditions=[leftwardsnag_condition, position_condition],
    ))

# Step 3: Move left until no snag is detected
rightward_force_threshold = -0.4
rightwardsnag_condition = types_pb2.Condition(
    comparison=types_pb2.Comparison(
        operation=types_pb2.Comparison.LESS_THAN_OR_EQUAL,
        state_variable_name="policy.status.x_force",
        double_value=rightward_force_threshold,
    )
)
left_pose = pose(1).multiply(pose3_rpy(translation=[0.01, 0, 0]))
cartesian_admittance_move(
  target_pose=left_pose,
  termination_condition=types_pb2.ConjunctionCondition(
        operation=types_pb2.ConjunctionCondition.ANY_OF,
        conditions=[rightwardsnag_condition, position_condition],
    ))

# Step 4: Move up to lift the cable out of the tunnel
cartesian_admittance_move(
  target_pose=up_pose,
  termination_condition=types_pb2.ConjunctionCondition(
        operation=types_pb2.ConjunctionCondition.ANY_OF,
        conditions=[snag_condition, position_condition]
    ))
