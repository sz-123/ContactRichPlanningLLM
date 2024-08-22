Inserting a star-shaped peg into a star-shaped hole is different from a circle-shaped peg because of the complexity of the shape. A circle is symmetrical and can be inserted in any orientation, while a star has specific orientations that it can fit into the hole. Therefore, the search pattern for a star-shaped peg would need to include rotation as well as translation.

Here is a sample code to insert a star-shaped peg:

```python
import cartesian_admittance_move
import search_termination_condition
import pose3_rpy
import types_pb2

# Define the waypoints for the search pattern
waypoints = [
    pose3_rpy((0.01, -0.01, 0.0), (0.0, 0.0, 0.0)),
    pose3_rpy((0.01, 0.01, 0.0), (0.0, 0.0, 0.0)),
    pose3_rpy((-0.01, -0.01, 0.0), (0.0, 0.0, 0.0)),
    pose3_rpy((-0.01, 0.01, 0.0), (0.0, 0.0, 0.0)),
    pose3_rpy((0.0, 0.0, 0.0), (0.0, 0.0, 0.0)),
    pose3_rpy((0.01, 0.0, 0.0), (0.0, 0.0, math.pi/4)),
    pose3_rpy((-0.01, 0.0, 0.0), (0.0, 0.0, -math.pi/4)),
    pose3_rpy((0.0, 0.01, 0.0), (0.0, 0.0, math.pi/4)),
    pose3_rpy((0.0, -0.01, 0.0), (0.0, 0.0, -math.pi/4)),
]

# Iterate through the waypoints
for waypoint in waypoints:
    target_pose = base_t_star_contact.multiply(waypoint)
    cartesian_admittance_move(
        target_pose=target_pose,
        termination_condition=search_termination_condition,
        execution_timeout_seconds=10.0,
        tare_ft_sensor=False,
    )
```

This code will attempt to insert the peg at different orientations by rotating it about the z-axis. The robot will stop trying to insert the peg when there is no upward force, indicating that the peg has been inserted into the hole.
