// Define the task description as a JavaScript string
var new_task_plan_cap_1= `
from robot_controller import Controller
from perception import Perception
import numpy as np

robot_controller = Controller()
perception = Perception()

def get_object_property(object, property):
    # get the object property from the database
    return database[object][property]

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

def is_tightened(threshold=2.0):
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
        print(f"Moving the {self.target_object} to {pose}")
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

if __name__ == "__main__":
     # Initialize the CapSkillLibrary
    cap_skill_library = CapSkillLibrary()

    # Grasp the inner cap
    cap_skill_library.target_object = 'inner_cap2'
    cap_skill_library.grasp()

    # Move the inner cap to the bottle's position
    bottle_position = get_object_property('bottle2', 'position')
    cap_skill_library.move_object(bottle_position)
    cap_skill_library.release()

    # Tighten the inner cap
    for _ in range(3):  # Adjust the number of attempts as needed
       inner_cap_skill_library.grasp()
       inner_cap_skill_library.tighten()
       inner_cap_skill_library.release()
    

    # Grasp the outer cap
    cap_skill_library.target_object = 'outer_cap2'
    cap_skill_library.grasp()

    # Move the outer cap to the bottle's position
    cap_skill_library.move_object(bottle_position)
    cap_skill_library.release()

    # Tighten the outer cap
    for _ in range(3):  # Adjust the number of attempts as needed
       inner_cap_skill_library.grasp()
       inner_cap_skill_library.tighten()
       inner_cap_skill_library.release()
 
`;

// Insert the task description into the user-request-cap-container element
document.getElementById('new-task-plan-cap-1').innerHTML = 
Prism.highlight(new_task_plan_cap_1.trim(), Prism.languages.python, 'python');


// Define the task description as a JavaScript string
var new_task_plan_cap_2= `
from robot_controller import Controller
from perception import Perception
import numpy as np

robot_controller = Controller()
perception = Perception()

def get_object_property(object, property):
    # get the object property from the database
    return database[object][property]

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

def is_tightened(threshold=0.02):
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
        print(f"Moving the {self.target_object} to {pose}")
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

if __name__ == "__main__":
     # Initialize the CapSkillLibrary
    cap_skill_library = CapSkillLibrary()

    # Grasp the inner cap
    cap_skill_library.target_object = 'inner_cap2'
    cap_skill_library.grasp()

    # Move the inner cap to the bottle's position
    bottle_position = get_object_property('bottle2', 'position')
    cap_skill_library.move_object(bottle_position)
    cap_skill_library.release()

    # Tighten the inner cap
    for _ in range(3):  # Adjust the number of attempts as needed
       inner_cap_skill_library.grasp()
       inner_cap_skill_library.tighten()
       inner_cap_skill_library.release()

    # Grasp the outer cap
    cap_skill_library.target_object = 'outer_cap2'
    cap_skill_library.grasp()

    # Move the outer cap to the bottle's position
    cap_skill_library.move_object(bottle_position)
    cap_skill_library.release()

    # Tighten the outer cap
    for _ in range(3):  # Adjust the number of attempts as needed
       inner_cap_skill_library.grasp()
       inner_cap_skill_library.tighten()
       inner_cap_skill_library.release()
`;

// Insert the task description into the user-request-cap-container element
document.getElementById('new-task-plan-cap-2').innerHTML = 
'<pre style="background-color: #f8f9fa; overflow: visible; white-space: pre-wrap; word-wrap: break-word;"><code class="language-python">' + Prism.highlight(new_task_plan_cap_2.trim(), Prism.languages.python, 'python') + '</code></pre>';
