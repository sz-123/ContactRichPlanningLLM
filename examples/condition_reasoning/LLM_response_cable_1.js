// Define the task description as a JavaScript string
var LLM_response_condition_cable_1 = `
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

def is_inserted(env_object):
    # post-condition to check if the cable is inserted into the env_object
    pass

def is_stretched():
    # post-condition to check if the cable is stretched
    pass

class ObjectSkillLibrary:
    # Skill library for manipulating any object
    def __init__(self, target_object):
        # target_object is the object which the robot hand directly manipulates, such as a cable or a screw
        self.target_object = target_object
        # env_object are contextual objects in the environment that target_object interacts with, such as a screw holder

    def move_object(self, pose):
        print(f"Moving {self.target_object} to {pose}")
        robot_controller.move_cart_pose(pose, success_condition=lambda: is_at(pose))

    def grasp(self):
        print(f"Moving to grasp the {self.target_object} with two fingers")
        robot_controller.move_cart_pose(self.target_object, success_condition=is_grasped)
        robot_controller.grasp()

    def release(self):
        print(f"Opening the hand of the robot to release the {self.target_object}")
        robot_controller.open_gripper(success_condition=is_released)


class CableSkillLibrary(ObjectSkillLibrary):
    # Skill library for manipulating cable
    def __init__(self):
        super().__init__("cable")
        
    def insert(self, direction, env_object):
        print(f"Inserting the {self.target_object} in {direction} into {env_object} and then loses contact")
        robot_controller.insert(direction, env_object, success_condition=lambda: is_inserted(env_object))
        
    def stretch(self):
        print(f"Stretching the {self.target_object} linearly in opposite directions")
        robot_controller.stretch(success_condition=is_stretched)
`;

// Insert the task description into the user-request-cable-container element
document.getElementById('LLM-response-condition-cable-1-container').innerHTML = 
  '<pre style="background-color: #f8f9fa; overflow: visible; white-space: pre-wrap; word-wrap: break-word;" style="background-color: #f8f9fa; overflow: visible; white-space: pre-wrap; word-wrap: break-word;"><code class="language-python">' + Prism.highlight(LLM_response_condition_cable_1.trim(), Prism.languages.python, 'python') + '</code></pre>';