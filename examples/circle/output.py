To insert a circle-shaped peg into a circle-shaped hole with a grid pattern search, the robot needs to move in a grid pattern over the surface of the hole until the peg aligns with the hole. The robot can then insert the peg into the hole. The grid pattern can be defined by a set of waypoints that the robot will iterate through. 

Here is the code to insert a circle-shaped peg:

```python
import cartesian_admittance_move
import search_termination_condition
import pose3_rpy

# Define the grid pattern as a list of waypoints
waypoints = [
    pose3_rpy([0.01, -0.01, 0], [0, 0, 0]),
    pose3_rpy([0.01, 0.01, 0], [0, 0, 0]),
    pose3_rpy([-0.01, -0.01, 0], [0, 0, 0]),
    pose3_rpy([-0.01, 0.01, 0], [0, 0, 0]),
    pose3_rpy([0, 0, 0], [0, 0, 0])
]

# Iterate through the waypoints
for waypoint in waypoints:
    # Move to the waypoint
    cartesian_admittance_move(
        target_pose=base_t_circle_contact.multiply(waypoint),
        termination_condition=search_termination_condition,
        execution_timeout_seconds=10.0,
        tare_ft_sensor=False
    )

# Once the peg is aligned with the hole, insert the peg
cartesian_admittance_move(
    target_pose=base_t_circle_contact.multiply(pose3_rpy([0, 0, -0.01], [0, 0, 0])),
    termination_condition=search_termination_condition,
    execution_timeout_seconds=10.0,
    tare_ft_sensor=False
)
```

This code first moves the robot in a grid pattern over the surface of the hole. Once the peg is aligned with the hole, the robot moves downward to insert the peg into the hole. The termination condition ensures that the robot stops moving once the peg is fully inserted.
