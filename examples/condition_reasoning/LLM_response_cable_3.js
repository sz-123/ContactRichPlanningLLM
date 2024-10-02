// Define the task description as a JavaScript string
var LLM_response_condition_cable_3_description = `
Based on the plot, the resistance force during the "stretch" skill execution is consistently around 10 N. Therefore, we can set the threshold for the success condition is_stretched to a value slightly below 10 N to ensure that the skill is considered successful when the resistance force reaches this level.

Here is the updated implementation of the is_stretched function:
`;

var LLM_response_condition_cable_3_code = `
from robot_controller import Controller
from perception import Perception

robot_controller = Controller()
perception = Perception()

def is_at(pose, threshold=0.01):
    # post-condition to check if the object is at the specified pose
    current_pose = perception.get_robot_hand_pose()
    return np.linalg.norm(np.array(current_pose) - np.array(pose)) < threshold

def is_grasped():
    # post-condition to check if the object is grasped
    return perception.get_grasping_status()

def is_released():
    # post-condition to check if the object is released
    return not perception.get_grasping_status()

def is_inserted(direction, env_object, force_threshold=5.0):
    # post-condition to check if the object is inserted in the specified direction into the environment object
    resistance_force = perception.get_resistance_force()
    return resistance_force > force_threshold

def is_stretched(force_threshold=9.0):
    # post-condition to check if the object is stretched
    resistance_force = perception.get_resistance_force()
    return resistance_force > force_threshold

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
        robot_controller.insert(direction, env_object, success_condition=lambda: is_inserted(direction, env_object))
        
    def stretch(self):
        print(f"Stretching the {self.target_object} linearly in opposite directions")
        robot_controller.stretch(success_condition=lambda: is_stretched(force_threshold=9.0))
`;

// Insert the description and code separately into the container
document.getElementById('LLM-response-condition-cable-3-container').innerHTML = 
  LLM_response_condition_cable_3_description + 
  '<pre style="background-color: #f8f9fa; overflow: visible; white-space: pre-wrap; word-wrap: break-word;" style="background-color: #f8f9fa; overflow: visible; white-space: pre-wrap; word-wrap: break-word;"><code class="language-python">' + Prism.highlight(LLM_response_condition_cable_3_code.trim(), Prism.languages.python, 'python') + '</code></pre>';