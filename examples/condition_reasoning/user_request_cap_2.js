// Define the task description as a JavaScript string
var user_request_condition_cap_2 = `
This is how Perception class is defined:   

from robot_controller import Controller
from force_sensor import ForceTorqueSensor
from tactile_sensor import TactileSensor
import numpy as np

def projection(v, u):
    # project vector v onto vector u
    return np.dot(v, u) / np.linalg.norm(u)

class Perception:
    def __init__(self):
        self.robot_controller = Controller()
        self.force_torque_sensor = ForceTorqueSensor()
        self.tactile_sensor = TactileSensor()

    def get_action_direction(self):
        # get the action direction of the robot
        if self.robot_controller.get_control_mode() == "force":
            # If control mode is 'force', return the direction of the applied force
            return self.robot_controller.get_apply_force_direction()
        elif self.robot_controller.get_control_mode() == "position":
             # If control mode is 'position', return the moving direction
            return self.robot_controller.get_move_direction()
        
    def get_resistance_force(self):
        # measure the magnitude of external force in resistance to robot action
        force_xyz = self.force_torque_sensor.get_current_force_vector()
        resistance_force = projection(force_xyz, self.get_action_direction())
        return resistance_force
    
    def get_resistance_torque(self):
        # measure the magnitude of external torque in resistance to robot action
        torque_xyz = self.force_torque_sensor.get_torque_vector()
        resistance_torque = projection(torque_xyz, self.get_action_direction())
        return resistance_torque
    
    def get_grasping_status(self):
        # measure the tactile sensor to determine if the object is grasped by robot hand
        return self.tactile_sensor.is_grasped()
    
    def get_robot_hand_pose(self):
        # get the current pose of the robot end effector
        return self.robot_controller.get_cartesian_pose()

Based on the implementation of the Perception class, implement all the sucess conditions in your previous answer.
This success condition should detect the success of the skill execution and exclude the failure cases.
If there is a threshold, add it as an argument to the function.
`;

// Insert the task description into the user-request-cap-container element
document.getElementById('user-request-condition-cap-2-container').innerHTML = '<p>' + user_request_condition_cap_2.trim().replace(/\n/g, '<br>') + '</p>';