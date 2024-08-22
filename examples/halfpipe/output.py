Inserting a randomly rotated half-pipe-shaped peg into a half-pipe-shaped hole is different than a circle-shaped peg using a grid pattern search because the half-pipe peg has a specific orientation that must be matched with the hole. The circle-shaped peg, on the other hand, is rotationally symmetric and can be inserted into the hole regardless of its orientation.

For the half-pipe-shaped peg, the robot must not only find the correct position but also the correct orientation. This means that the search pattern must include rotations as well as translations. The rotations must be limited to not exceed (pi/2, pi/2, pi/2) to avoid flipping the peg upside down.

Here is the code to insert a half-pipe-shaped peg:

```python
# Define the waypoints for the search pattern
waypoints = [
    pose3_rpy((0.01, -0.01, 0.0), (0.0, 0.0, 0.0)),
    pose3_rpy((0.01, 0.01, 0.0), (0.0, 0.0, math.pi/2)),  # added rotation
    pose3_rpy((-0.01, -0.01, 0.0), (0.0, 0.0, math.pi/2)),  # added rotation
    pose3_rpy((-0.01, 0.01, 0.0), (0.0, 0.0, math.pi/2)),  # added rotation
  ]

# Iterate through the waypoints
for waypoint in waypoints:
    # Compute the target pose by applying the waypoint on top of the base pose
    target_pose = base_t_halfpipe_contact.multiply(waypoint)

    # Move the robot to the target pose
    cartesian_admittance_move(
        max_cartesian_stiffness=[1000, 1000, 1000, 300, 300, 300],
        target_impedance=[0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
        target_pose=target_pose,
        termination_condition=search_termination_condition,
        virtual_cartesian_inertia=[1, 1, 1, 1, 1, 1],
        execution_timeout_seconds=10.0,
        tare_ft_sensor=False
    )
```
This code will move the robot in a pattern that includes both translations and rotations, trying to find the correct position and orientation to insert the half-pipe-shaped peg into the hole.
