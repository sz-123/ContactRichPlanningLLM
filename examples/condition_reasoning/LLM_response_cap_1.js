// Define the task description as a JavaScript string
var LLM_response_condition_cap_1 = `
from robot_controller import Controller
from perception import Perception

robot_controller = Controller()
perception = Perception()

def is_at(pose):
    # post-condition to check if the object is at the specified pose
    pass

def is_grasped():
    # post-condition to check if the object is grasped
    pass

def is_released():
    # post-condition to check if the object is released
    pass

def is_tightened():
    # post-condition to check if the object is tightened
    pass

class ObjectSkillLibrary:
    # Skill library for manipulating any object
    def __init__(self, target_object):
        # target_object is the object which the robot hand directly manipulates
        self.target_object = target_object
        # env_object are contextual objects in the environment that target_object interacts with

    def move_object(self, pose):
        print(f"Moving to {pose} with {self.target_object} grasped in hand")
        robot_controller.move_cart_pose(pose, success_condition=is_at(pose))

    def grasp(self):
        print(f"Moving to grasp the {self.target_object}")
        robot_controller.move_cart_pose(self.target_object, success_condition=is_grasped())
        robot_controller.grasp()

    def release(self):
        print(f"Opening the hand of the robot to release the {self.target_object}")
        robot_controller.open_gripper(success_condition=is_released())

class CapSkillLibrary(ObjectSkillLibrary):
    # Skill library for manipulating bottle cap
    def __init__(self):
        super().__init__("cap")
        
    def tighten(self):
        print(f"Tighten the {self.target_object}")
        robot_controller.screw(success_condition=is_tightened())

`;

// Insert the task description into the user-request-cable-container element
document.getElementById('LLM-response-condition-cap-1-container').innerHTML = 
  '<pre style="background-color: #f8f9fa; overflow: visible; white-space: pre-wrap; word-wrap: break-word;"><code class="language-python">' + Prism.highlight(LLM_response_condition_cap_1.trim(), Prism.languages.python, 'python') + '</code></pre>';