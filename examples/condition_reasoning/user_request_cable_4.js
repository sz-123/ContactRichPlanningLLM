// Define the task description as a JavaScript string
var user_request_condition_cable_4 = `
Additionally, we have obtained a database about environmental objects in this task.
As the second step of your reasoning, based on the PDDL domain, PDDL plan and also the world knowledge, use the following script to generate an executable plan in the formatting of code script.
prompt_database + 
from robot_controller import Controller
robot_controller = Controller()

def get_object_property(object, property):
    # get the object property from the database
    return database['object']['property']

from robot_controller import Controller
from perception import Perception

robot_controller = Controller()
percpeption = Perception()


class ObjectSkillLibrary:
    # Skill library for manipulating any object
    def __init__(self, target_object):
        # target_object is the object which the robot hand directly manipulate, such as a cable or a screw
        self.target_object = target_object
        # env_object are contexual objects in the environment that target_object interacts with, such as a screw holder

    def move_object(self, pose):
        print(f"Moving {self.target_object} to {pose}")
        robot_controller.move_cart_pose(pose)

    def grasp(self):
        print(f"Moving to grasp the {self.target_object} with two fingers")
        robot_controller.move_cart_pose(self.target_object)
        robot_controller.grasp()

    def release(self):
        print(f"Opening the hand of the robot to release the {self.target_object}")
        robot_controller.open_gripper()


class CableSkillLibrary(ObjectSkillLibrary):
    # Skill library for manipulating cable
    def __init__(self):
        super().__init__("cable")
        
    def insert(self, direction, env_object):
        print(f"Inserting the {self.target_object} in {direction} into {env_object} and then loses contact")
        robot_controller.insert(direction, env_object)
        
    def stretch(self):
        print(f"Stretching the {self.target_object} linearly in opposite directions")
        robot_controller.stretch()

Replace all parameters in your previous answer with specific object properties.
Omit timestamps and comments, only preserve the actions.
Integrate consecutive repeating actions.
`;

// Insert the task description into the user-request-cable-container element
document.getElementById('user-request-condition-cable-4-container').innerHTML = '<p>' + user_request_condition_cable_4.trim().replace(/\n/g, '<br>') + '</p>';