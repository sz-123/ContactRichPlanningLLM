// Define the task description as a JavaScript string
var LLM_response_condition_cable_3 = `
TODO CHANGE THE CODE TO CABLE

Based on the plot, the resistance torque during the tightening skill reaches peaks around 2 N. To ensure the cap is tightened, we can set a threshold slightly below the peak value to account for variations in the demonstration. A reasonable threshold could be around 1.8 N.

Here is the updated is_tightened function:

from robot_controller import Controller
from perception import Perception
import numpy as np

robot_controller = Controller()
perception = Perception()

def is_grasped():
    # post-condition to check if the object is grasped
    return perception.get_grasping_status()

def is_at_pose(pose, threshold=0.01):
    # post-condition to check if the object is at the specified pose
    current_pose = perception.get_robot_hand_pose()
    return np.linalg.norm(np.array(current_pose) - np.array(pose)) < threshold

def is_hand_open():
    # post-condition to check if the hand is open
    return not perception.get_grasping_status()

def is_tightened(threshold=1.8):
    # post-condition to check if the object is tightened
    resistance_torque = perception.get_resistance_torque()
    return resistance_torque > threshold

class ObjectSkillLibrary:
    # Skill library for manipulating any object
    def __init__(self, target_object):
        # target_object is the object which the robot hand directly manipulate
        self.target_object = target_object
        # env_object are contextual objects in the environment that target_object interacts with

    def move_object(self, pose):
        print(f"Moving to {pose} with {self.target_object} grasped in hand")
        robot_controller.move_cart_pose(pose, success_condition=lambda: is_at_pose(pose))

    def grasp(self):
        print(f"Moving to grasp the {self.target_object}")
        robot_controller.move_cart_pose(self.target_object, success_condition=is_grasped)
        robot_controller.grasp()

    def open_hand(self):
        print(f"Opening the hand of the robot")
        robot_controller.open_gripper(success_condition=is_hand_open)


class CapSkillLibrary(ObjectSkillLibrary):
    # Skill library for manipulating bottle cap
    def __init__(self):
        super().__init__("cap")
        
    def tighten(self):
        print(f"Tighten the {self.target_object}")
        robot_controller.screw(success_condition=lambda: is_tightened())

`;

// Insert the task description into the user-request-cable-container element
document.getElementById('LLM-response-condition-cable-3-container').innerHTML = '<p>' + LLM_response_condition_cable_3.trim().replace(/\n/g, '<br>') + '</p>';