// Define the task description as a JavaScript string
var LLM_response_condition_cable_4 = `
TODO CHANGE TO CABLE
from robot_controller import Controller
from perception import Perception

robot_controller = Controller()
perception = Perception()

class ObjectSkillLibrary:
    # Skill library for manipulating any object
    def __init__(self, target_object):
        # target_object is the object which the robot hand directly manipulate
        self.target_object = target_object
        # env_object are contexual objects in the environment that target_object interacts with

    def move_object(self, pose):
        print(f"Moving to {pose} with {self.target_object} grasped in hand")
        robot_controller.move_cart_pose(pose)

    def grasp(self):
        print(f"Moving to grasp the {self.target_object}")
        robot_controller.move_cart_pose(self.target_object)
        robot_controller.grasp()

    def open_hand(self):
        print(f"Opening the hand of the robot")
        robot_controller.open_gripper()

class CapSkillLibrary(ObjectSkillLibrary):
    # Skill library for manipulating bottle cap
    def __init__(self):
        super().__init__("cap")
        
    def tighten(self):
        print(f"Tighten the {self.target_object}")
        robot_controller.screw()

# Database with environmental objects
database = {'bottle5': {'name': 'bottle5',
             'orientation': [-67.4280051829996, -87.97701798094656, 120.0],
             'position': [0.41650844400114584, -0.04410545364246846, 1.1870269841352825],
             'transformation': [[0.01083219667534743, -0.08215019382972663, -0.9965610915269454, 0.415858512200625],
                                [0.03359730693700374, 0.9960867572828775, -0.0817459042265435, -0.04612129205868869],
                                [0.9993767480450474, -0.03259628116174989, 0.01354983293567745, 1.1270643792525796],
                                [0.0, 0.0, 0.0, 1.0]]}}

def get_object_property(object, property):
    # get the object property from the database
    return database[object][property]

# Initialize the skill library for the cap
cap_skill_library = CapSkillLibrary()

# Executable plan
cap_skill_library.move_object(get_object_property('bottle5', 'position'))
cap_skill_library.grasp()
cap_skill_library.move_object([0.41650844400114584, -0.04410545364246846, 1.2870269841352825])  # Move cap above the bottle
cap_skill_library.move_object([0.41650844400114584, -0.04410545364246846, 1.1870269841352825])  # Lower cap onto the bottle
cap_skill_library.tighten()
cap_skill_library.open_hand()
cap_skill_library.move_object([0.41650844400114584, -0.04410545364246846, 1.2870269841352825])  # Move gripper away from the bottle
`;

// Insert the task description into the user-request-cable-container element
document.getElementById('LLM-response-condition-cable-4-container').innerHTML = 
  '<pre style="background-color: #f8f9fa; overflow: visible; white-space: pre-wrap; word-wrap: break-word;" style="background-color: #f8f9fa; overflow: visible; white-space: pre-wrap; word-wrap: break-word;"> <code class="language-python">' + Prism.highlight(LLM_response_condition_cable_4.trim(), Prism.languages.python, 'python') + '</code></pre>';