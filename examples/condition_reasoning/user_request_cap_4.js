// Define the task description as a JavaScript string
var user_request_condition_cap_4_description = `
Additionally, we have obtained a database about environmental objects in this task.
As the second step of your reasoning, based on the PDDL domain, PDDL plan, and world knowledge, use the following script to generate an executable plan in the formatting of a code script.
`;

var user_request_condition_cap_4_code = `
from robot_controller import Controller
from perception import Perception

robot_controller = Controller()
perception = Perception()

class ObjectSkillLibrary:
    # Skill library for manipulating any object
    def __init__(self, target_object):
        # target_object is the object which the robot hand directly manipulates
        self.target_object = target_object
        # env_object are contextual objects in the environment that target_object interacts with

    def move_object(self, pose):
        print(f"Moving to {pose} with {self.target_object} grasped in hand")
        robot_controller.move_cart_pose(pose)

    def grasp(self):
        print(f"Moving to grasp the {self.target_object}")
        robot_controller.move_cart_pose(self.target_object)
        robot_controller.grasp()

    def release(self):
        print(f"Opening the hand of the robot to release the {self.target_object}")
        robot_controller.open_gripper()

class CapSkillLibrary(ObjectSkillLibrary):
    # Skill library for manipulating bottle cap
    def __init__(self):
        super().__init__("cap")
        
    def tighten(self):
        print(f"Tighten the {self.target_object}")
        robot_controller.screw()
`;

var user_request_condition_cap_4_footer = `
Replace all parameters in your previous answer with specific object properties.
Omit timestamps and comments, only preserve the actions.
Integrate consecutive repeating actions.
`;

// Insert the description, code, and footer separately into the container
document.getElementById('user-request-condition-cap-4-container').innerHTML = 
  '<p>' + user_request_condition_cap_4_description.trim().replace(/\n/g, '<br>') + '</p>' +
  '<pre><code class="language-python">' + Prism.highlight(user_request_condition_cap_4_code.trim(), Prism.languages.python, 'python') + '</code></pre>' +
  '<p>' + user_request_condition_cap_4_footer.trim().replace(/\n/g, '<br>') + '</p>';
