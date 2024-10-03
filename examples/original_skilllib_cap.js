// Define the task description as a JavaScript string
var originalSkilllib_cap= `
from robot_controller import Controller
from perception import Perception

robot_controller = Controller()
percpeption = Perception()


class ObjectSkillLibrary:
    # Skill library for manipulating any object
    def __init__(self, target_object):
        # target_object is the object which the robot hand directly manipulates
        self.target_object = target_object
        # env_object are contexual objects in the environment that target_object interacts with

    def move_object(self, pose):
        print(f"Moving the {self.target_object} to {pose}")
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
        robot.controller.screw()
`;

// Insert the task description into the user-request-cap-container element
document.getElementById('original-skilllib-cap').innerHTML = 
'<pre style="background-color: #f8f9fa; overflow: visible; white-space: pre-wrap; word-wrap: break-word;" style="background-color: #f8f9fa; overflow: visible; white-space: pre-wrap; word-wrap: break-word;"><code class="language-python">' + Prism.highlight(originalSkilllib_cap.trim(), Prism.languages.python, 'python') + '</code></pre>';