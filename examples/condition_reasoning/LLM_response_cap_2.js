// Define the task description as a JavaScript string
var LLM_response_condition_cap_2 = `
from robot_controller import Controller
from perception import Perception
import numpy as np

robot_controller = Controller()
perception = Perception()

def is_at(pose, threshold=0.01):
    # post-condition to check if the object is at the specified pose
    current_pose = perception.get_robot_hand_pose()
    distance = np.linalg.norm(np.array(current_pose) - np.array(pose))
    return distance < threshold

def is_grasped():
    # post-condition to check if the object is grasped
    return perception.get_grasping_status()

def is_released():
    # post-condition to check if the object is released
    return not perception.get_grasping_status()

def is_tightened(threshold=0.1):
    # post-condition to check if the object is tightened
    resistance_torque = perception.get_resistance_torque()
    return resistance_torque > threshold

class ObjectSkillLibrary:
    # Skill library for manipulating any object
    def __init__(self, target_object):
        # target_object is the object which the robot hand directly manipulates
        self.target_object = target_object
        # env_object are contextual objects in the environment that target_object interacts with

    def move_object(self, pose):
        print(f"Moving to {pose} with {self.target_object} grasped in hand")
        robot_controller.move_cart_pose(pose, success_condition=lambda: is_at(pose))

    def grasp(self):
        print(f"Moving to grasp the {self.target_object}")
        robot_controller.move_cart_pose(self.target_object, success_condition=is_grasped)
        robot_controller.grasp()

    def release(self):
        print(f"Opening the hand of the robot to release the {self.target_object}")
        robot_controller.open_gripper(success_condition=is_released)

class CapSkillLibrary(ObjectSkillLibrary):
    # Skill library for manipulating bottle cap
    def __init__(self):
        super().__init__("cap")
        
    def tighten(self):
        print(f"Tighten the {self.target_object}")
        robot_controller.screw(success_condition=lambda: is_tightened())
`;

/// Insert the task description into the user-request-cable-container element
document.getElementById('LLM-response-condition-cap-2-container').innerHTML = 
'<pre style="background-color: #f8f9fa; overflow: visible; white-space: pre-wrap; word-wrap: break-word;"><code class="language-python">' + Prism.highlight(LLM_response_condition_cap_2.trim(), Prism.languages.python, 'python') + '</code></pre>';