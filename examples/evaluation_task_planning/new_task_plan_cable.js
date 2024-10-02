// Define the task description as a JavaScript string
var new_task_plan_cable_1= `
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

def is_inserted(env_object, clip_type, force_threshold_c=4.5, force_threshold_u=2.5):
    # post-condition to check if the cable is inserted into the env_object
    resistance_force = perception.get_resistance_force()
    if clip_type == "C-type":
        return resistance_force > force_threshold_c
    elif clip_type == "U-type":
        return resistance_force > force_threshold_u
    else:
        raise ValueError("Unknown clip type")

def is_stretched(force_threshold=9.5):
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
        
    def insert(self, direction, env_object, clip_type):
        print(f"Inserting the {self.target_object} in {direction} into {env_object} and then loses contact")
        robot_controller.insert(direction, env_object, success_condition=lambda: is_inserted(env_object, clip_type))
        
    def stretch(self):
        print(f"Stretching the {self.target_object} linearly in opposite directions")
        robot_controller.stretch(success_condition=lambda: is_stretched(force_threshold=9.0))

def get_object_property(object_name, property_name):
    # This function should return the property of the object from the world knowledge
    world_knowledge = {
        'clip6': {'name': 'clip6', 'insertion_direction': [0.29214848260482573, -0.13054099444734543, 0.13013844376860473], 'orientation': [-45.73212847759041, -83.70565815815877, 49.90974112587833], 'position': [0.36593068478333163, -0.042891572236127856, 1.1688389614748276], 'transformation': [[0.07060497816124969, -0.07562844023469364, -0.9946332369587138, 0.36275346076607545], [0.08387504517819865, 0.9940406024456108, -0.06962942920543472, -0.04666594926914679], [0.9939717872786823, -0.07850872336086225, 0.07652755387129286, 1.124110231047287], [0.0, 0.0, 0.0, 1.0]], 'clip_type': 'U-type'},
        'clip8': {'name': 'clip8', 'insertion_direction': [1.3694834153791755, -0.3111929819847826, 1.0096143447649295], 'orientation': [5.164499211965817, -5.625814345950733, 155.60615693666682], 'position': [0.40876155901507477, 0.12448530463832799, 1.1135275067570507], 'transformation': [[-0.906341373928397, -0.4032933399431192, 0.1260943925777889, 0.4631420414507786], [0.41101725153123647, -0.9106753314149572, 0.04165644753839304, 0.09982426954645382], [0.09803128489822754, 0.08958193256909114, 0.9911432512960193, 1.1076456296631572], [0.0, 0.0, 0.0, 1.0]], 'clip_type': 'C-type'},
        'clip5': {'name': 'clip5', 'insertion_direction': [0.41520387346179266, -0.23592545005365334, 0.13144414249064218], 'orientation': [-69.2884280874099, -86.60031394838813, 19.5476945488211], 'position': [0.474439848265073, -0.21489338180434694, 1.1895787045629644], 'transformation': [[0.0558829950974343, 0.7615767257019421, -0.6456608875443062, 0.471086868559227], [0.01984157382010042, 0.6456966337093079, 0.763336209733537, -0.21608387623355294], [0.9982401528984174, -0.055468441829647504, 0.020972580994959425, 1.1296842953890596], [0.0, 0.0, 0.0, 1.0]], 'clip_type': 'U-type'}
    }
    return world_knowledge[object_name][property_name]

if __name__ == "__main__":
    # Initialize the CableSkillLibrary
    cable_skill_library = CableSkillLibrary()

    # Executable plan
    # Clip 5
    cable_skill_library.move_object(get_object_property('clip5', 'position'))
    cable_skill_library.grasp()
    cable_skill_library.stretch()
    cable_skill_library.insert(get_object_property('clip5', 'insertion_direction'), 'clip5', get_object_property('clip5', 'clip_type'))
    cable_skill_library.release()

    # Clip 6
    cable_skill_library.move_object(get_object_property('clip6', 'position'))
    cable_skill_library.grasp()
    cable_skill_library.stretch()
    cable_skill_library.insert(get_object_property('clip6', 'insertion_direction'), 'clip6', get_object_property('clip6', 'clip_type'))
    cable_skill_library.release()

    # Clip 8
    cable_skill_library.move_object(get_object_property('clip8', 'position'))
    cable_skill_library.grasp()
    cable_skill_library.stretch()
    cable_skill_library.insert(get_object_property('clip8', 'insertion_direction'), 'clip8', get_object_property('clip8', 'clip_type'))
    cable_skill_library.release()
`;

// Insert the task description into the user-request-cap-container element
document.getElementById('new-task-plan-cable-1').innerHTML = 
Prism.highlight(new_task_plan_cable_1.trim(), Prism.languages.python, 'python');


// Define the task description as a JavaScript string
var new_task_plan_cable_2= `
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

def is_inserted(env_object, clip_type, force_threshold_c=4.5, force_threshold_u=2.5):
    # post-condition to check if the cable is inserted into the env_object
    resistance_force = perception.get_resistance_force()
    if clip_type == "C-type":
        return resistance_force > force_threshold_c
    elif clip_type == "U-type":
        return resistance_force > force_threshold_u
    else:
        raise ValueError("Unknown clip type")

def is_stretched(force_threshold=9.5):
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
        
    def insert(self, direction, env_object, clip_type):
        print(f"Inserting the {self.target_object} in {direction} into {env_object} and then loses contact")
        robot_controller.insert(direction, env_object, success_condition=lambda: is_inserted(env_object, clip_type))
        
    def stretch(self):
        print(f"Stretching the {self.target_object} linearly in opposite directions")
        robot_controller.stretch(success_condition=lambda: is_stretched(force_threshold=9.0))

def get_object_property(object_name, property_name):
    # This function should return the property of the object from the world knowledge
    world_knowledge = {
        'clip6': {'name': 'clip6', 'insertion_direction': [0.29214848260482573, -0.13054099444734543, 0.13013844376860473], 'orientation': [-45.73212847759041, -83.70565815815877, 49.90974112587833], 'position': [0.36593068478333163, -0.042891572236127856, 1.1688389614748276], 'transformation': [[0.07060497816124969, -0.07562844023469364, -0.9946332369587138, 0.36275346076607545], [0.08387504517819865, 0.9940406024456108, -0.06962942920543472, -0.04666594926914679], [0.9939717872786823, -0.07850872336086225, 0.07652755387129286, 1.124110231047287], [0.0, 0.0, 0.0, 1.0]], 'clip_type': 'U-type'},
        'clip8': {'name': 'clip8', 'insertion_direction': [1.3694834153791755, -0.3111929819847826, 1.0096143447649295], 'orientation': [5.164499211965817, -5.625814345950733, 155.60615693666682], 'position': [0.40876155901507477, 0.12448530463832799, 1.1135275067570507], 'transformation': [[-0.906341373928397, -0.4032933399431192, 0.1260943925777889, 0.4631420414507786], [0.41101725153123647, -0.9106753314149572, 0.04165644753839304, 0.09982426954645382], [0.09803128489822754, 0.08958193256909114, 0.9911432512960193, 1.1076456296631572], [0.0, 0.0, 0.0, 1.0]], 'clip_type': 'C-type'},
        'clip5': {'name': 'clip5', 'insertion_direction': [0.41520387346179266, -0.23592545005365334, 0.13144414249064218], 'orientation': [-69.2884280874099, -86.60031394838813, 19.5476945488211], 'position': [0.474439848265073, -0.21489338180434694, 1.1895787045629644], 'transformation': [[0.0558829950974343, 0.7615767257019421, -0.6456608875443062, 0.471086868559227], [0.01984157382010042, 0.6456966337093079, 0.763336209733537, -0.21608387623355294], [0.9982401528984174, -0.055468441829647504, 0.020972580994959425, 1.1296842953890596], [0.0, 0.0, 0.0, 1.0]], 'clip_type': 'U-type'}
    }
    return world_knowledge[object_name][property_name]

if __name__ == "__main__":
    # Initialize the skill library
    cable_skill_library = CableSkillLibrary()

    # Executable plan
    # Mounting cable onto clip5
    cable_skill_library.move_object(get_object_property('clip5', 'position'))
    cable_skill_library.insert(get_object_property('clip5', 'insertion_direction'), 'clip5', get_object_property('clip5', 'clip_type'))
    cable_skill_library.release()

    # Mounting cable onto clip6
    cable_skill_library.move_object(get_object_property('clip6', 'position'))
    cable_skill_library.insert(get_object_property('clip6', 'insertion_direction'), 'clip6', get_object_property('clip6', 'clip_type'))
    cable_skill_library.release()

    # Mounting cable onto clip8
    cable_skill_library.move_object(get_object_property('clip8', 'position'))
    cable_skill_library.insert(get_object_property('clip8', 'insertion_direction'), 'clip8', get_object_property('clip8', 'clip_type'))
    cable_skill_library.release()
`;

// Insert the task description into the user-request-cap-container element
document.getElementById('new-task-plan-cable-2').innerHTML = 
'<pre style="background-color: #f8f9fa; overflow: visible; white-space: pre-wrap; word-wrap: break-word;"><code class="language-python">' + Prism.highlight(new_task_plan_cable_2.trim(), Prism.languages.python, 'python') + '</code></pre>';


// Define the task description as a JavaScript string
var new_task_plan_cable_3= `
from robot_controller import Controller
from perception import Perception
import numpy as np

robot_controller = Controller()
perception = Perception()

def is_at(pose, threshold=0.01):
    current_pose = perception.get_robot_hand_pose()
    return np.linalg.norm(np.array(current_pose) - np.array(pose)) < threshold

def is_grasped():
    return perception.get_grasping_status()

def is_hand_open():
    return not perception.get_grasping_status()

def is_inserted(env_object, clip_type, force_threshold_c=10.0, force_threshold_u=5.0):
    resistance_force = perception.get_resistance_force()
    if clip_type == "C-type":
        return resistance_force < force_threshold_c
    elif clip_type == "U-type":
        return resistance_force < force_threshold_u
    else:
        raise ValueError("Unknown clip type")

def is_stretched(force_threshold=10.0):
    resistance_force = perception.get_resistance_force()
    return resistance_force > force_threshold

class ObjectSkillLibrary:
    def __init__(self, target_object):
        self.target_object = target_object

    def move_object(self, pose):
        print(f"Moving {self.target_object} to {pose}")
        robot_controller.move_cart_pose(pose, success_condition=lambda: is_at(pose))

    def grasp(self):
        print(f"Moving to grasp the {self.target_object}")
        robot_controller.move_cart_pose(self.target_object, success_condition=is_grasped)
        robot_controller.grasp()

    def open_hand(self):
        print(f"Opening the hand of the robot")
        robot_controller.open_gripper(success_condition=is_hand_open)

class CableSkillLibrary(ObjectSkillLibrary):
    def __init__(self):
        super().__init__("cable")
        
    def insert(self, direction, env_object, clip_type):
        print(f"Inserting the {self.target_object} in {direction} into {env_object} and then loses contact")
        robot_controller.insert(direction, env_object, success_condition=lambda: is_inserted(env_object, clip_type))
        
    def stretch(self):
        print(f"Stretching the {self.target_object} linearly in opposite directions")
        robot_controller.stretch(success_condition=is_stretched)

if __name__ == "__main__":
    # Initialize the CableSkillLibrary
    cable_skill_library = CableSkillLibrary()

    # World knowledge about environmental objects
    database = {
        'clip5': {
            'position': [0.41650844400114584, -0.04410545364246846, 1.1870269841352825],
            'orientation': [-67.4280051829996, -87.97701798094656, 72.1300222195606],
            'insertion_direction': [0.40502631552527757, -0.07971859899569242, 0.12768763120753224],
            'clip_type': 'U-type'
        },
        'clip6': {
            'position': [0.4949470191273633, 0.14574584245197192, 1.1784994465161724],
            'orientation': [19.57787933904302, -80.25233383976675, 64.44362897356277],
            'insertion_direction': [0.41752475461028093, -0.016163167214394286, 0.13380271272163147],
            'clip_type': 'U-type'
        },
        'clip7': {
            'position': [0.5256035311188867, -0.2342849134220291, 1.1742008832505197],
            'orientation': [-36.82425719729712, -84.52446402931515, -26.19365130924071],
            'insertion_direction': [0.4361288360981598, -0.1902702194236606, 0.13396918515695944],
            'clip_type': 'U-type'
        }
    }

    # Executable plan
    # Clip 7
    cable_skill_library.move_object(database['clip7']['position'])
    cable_skill_library.grasp()
    cable_skill_library.stretch()
    cable_skill_library.insert(database['clip7']['insertion_direction'], 'clip7', database['clip7']['clip_type'])
    cable_skill_library.open_hand()

    # Clip 6
    cable_skill_library.move_object(database['clip6']['position'])
    cable_skill_library.grasp()
    cable_skill_library.stretch()
    cable_skill_library.insert(database['clip6']['insertion_direction'], 'clip6', database['clip6']['clip_type'])
    cable_skill_library.open_hand()

    # Clip 5
    cable_skill_library.move_object(database['clip5']['position'])
    cable_skill_library.grasp()
    cable_skill_library.stretch()
    cable_skill_library.insert(database['clip5']['insertion_direction'], 'clip5', database['clip5']['clip_type'])
    cable_skill_library.open_hand()
`;

// Insert the task description into the user-request-cap-container element
document.getElementById('new-task-plan-cable-3').innerHTML = 
'<pre style="background-color: #f8f9fa; overflow: visible; white-space: pre-wrap; word-wrap: break-word;"><code class="language-python">' + Prism.highlight(new_task_plan_cable_3.trim(), Prism.languages.python, 'python') + '</code></pre>';


// Define the task description as a JavaScript string
var new_task_plan_cable_4= `
from robot_controller import Controller
from perception import Perception
import numpy as np

robot_controller = Controller()
perception = Perception()

def is_at(pose, threshold=0.01):
    current_pose = perception.get_robot_hand_pose()
    return np.linalg.norm(np.array(current_pose) - np.array(pose)) < threshold

def is_grasped():
    return perception.get_grasping_status()

def is_hand_open():
    return not perception.get_grasping_status()

def is_inserted(env_object, clip_type, force_threshold_c=10.0, force_threshold_u=5.0):
    resistance_force = perception.get_resistance_force()
    if clip_type == "C-type":
        return resistance_force < force_threshold_c
    elif clip_type == "U-type":
        return resistance_force < force_threshold_u
    else:
        raise ValueError("Unknown clip type")

def is_stretched(force_threshold=10.0):
    resistance_force = perception.get_resistance_force()
    return resistance_force > force_threshold

class ObjectSkillLibrary:
    def __init__(self, target_object):
        self.target_object = target_object

    def move_object(self, pose):
        print(f"Moving {self.target_object} to {pose}")
        robot_controller.move_cart_pose(pose, success_condition=lambda: is_at(pose))

    def grasp(self):
        print(f"Moving to grasp the {self.target_object}")
        robot_controller.move_cart_pose(self.target_object, success_condition=is_grasped)
        robot_controller.grasp()

    def open_hand(self):
        print(f"Opening the hand of the robot")
        robot_controller.open_gripper(success_condition=is_hand_open)

class CableSkillLibrary(ObjectSkillLibrary):
    def __init__(self):
        super().__init__("cable")
        
    def insert(self, direction, env_object, clip_type):
        print(f"Inserting the {self.target_object} in {direction} into {env_object} and then loses contact")
        robot_controller.insert(direction, env_object, success_condition=lambda: is_inserted(env_object, clip_type))
        
    def stretch(self):
        print(f"Stretching the {self.target_object} linearly in opposite directions")
        robot_controller.stretch(success_condition=is_stretched)

if __name__ == "__main__":
    # Initialize the CableSkillLibrary
    cable_skill_library = CableSkillLibrary()

    # World knowledge about environmental objects
    database = {
        'clip5': {
            'position': [0.41650844400114584, -0.04410545364246846, 1.1870269841352825],
            'orientation': [-67.4280051829996, -87.97701798094656, 72.1300222195606],
            'insertion_direction': [0.40502631552527757, -0.07971859899569242, 0.12768763120753224],
            'clip_type': 'U-type'
        },
        'clip6': {
            'position': [0.4949470191273633, 0.14574584245197192, 1.1784994465161724],
            'orientation': [19.57787933904302, -80.25233383976675, 64.44362897356277],
            'insertion_direction': [0.41752475461028093, -0.016163167214394286, 0.13380271272163147],
            'clip_type': 'U-type'
        },
        'clip7': {
            'position': [0.5256035311188867, -0.2342849134220291, 1.1742008832505197],
            'orientation': [-36.82425719729712, -84.52446402931515, -26.19365130924071],
            'insertion_direction': [0.4361288360981598, -0.1902702194236606, 0.13396918515695944],
            'clip_type': 'U-type'
        }
    }

    # Execute the plan
    # Step 1: Move to Clip5 Position
    cable_skill_library.move_object(database['clip5']['position'])
    # Step 2: Insert Cable into Clip5
    cable_skill_library.insert(database['clip5']['insertion_direction'], 'clip5', database['clip5']['clip_type'])
    
    # Step 3: Move to Clip6 Position
    cable_skill_library.move_object(database['clip6']['position'])
    # Step 4: Insert Cable into Clip6
    cable_skill_library.insert(database['clip6']['insertion_direction'], 'clip6', database['clip6']['clip_type'])
    
    # Step 5: Move to Clip8 Position
    cable_skill_library.move_object(database['clip8']['position'])
    # Step 6: Insert Cable into Clip8
    cable_skill_library.insert(database['clip8']['insertion_direction'], 'clip8', database['clip8']['clip_type'])
`;

// Insert the task description into the user-request-cap-container element
document.getElementById('new-task-plan-cable-4').innerHTML = 
'<pre style="background-color: #f8f9fa; overflow: visible; white-space: pre-wrap; word-wrap: break-word;"><code class="language-python">' + Prism.highlight(new_task_plan_cable_4.trim(), Prism.languages.python, 'python') + '</code></pre>';