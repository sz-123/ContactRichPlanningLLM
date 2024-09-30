// Define the task description as a JavaScript string
var LLM_response_condition_cap_1 = `
from robot_controller import Controller
from perception import Perception

robot_controller = Controller()
perception = Perception()

def is_grasped():
    # post-condition to check if the object is grasped
    pass

def is_at_pose(pose):
    # post-condition to check if the object is at the specified pose
    pass

def is_hand_empty():
    # post-condition to check if the robot's hand is empty
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
        robot_controller.move_cart_pose(pose, success_condition=is_at_pose(pose))

    def grasp(self):
        print(f"Moving to grasp the {self.target_object}")
        robot_controller.move_cart_pose(self.target_object, success_condition=is_grasped())
        robot_controller.grasp()

    def release(self):
        print(f"Opening the hand of the robot to release the {self.target_object}")
        robot_controller.open_gripper(success_condition=is_hand_empty())

class CapSkillLibrary(ObjectSkillLibrary):
    # Skill library for manipulating bottle cap
    def __init__(self):
        super().__init__("cap")
        
    def tighten(self):
        print(f"Tighten the {self.target_object}")
        robot_controller.screw(success_condition=is_tightened())
`;

// Insert the task description into the user-request-cap-container element
document.getElementById('LLM-response-condition-cap-1-container').innerHTML = '<p>' + LLM_response_condition_cap_1.trim().replace(/\n/g, '<br>') + '</p>';