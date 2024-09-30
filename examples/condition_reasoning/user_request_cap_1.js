// Define the task description as a JavaScript string
var user_request_condition_cap_1 = `
Based on the PDDL domain, for each skill, add effect as a function for success_condition in the robot_controller of the CapSkillLibrary. For example,
def is_grasped():
    # post-condition to check if the object is grasped
    pass

def move_to_grasp(self):
    print(f"Moving to grasp the {self.target_object}")
    robot_controller.move_cart_pose(self.target_object, success_condition=is_grasped())
    robot_controller.grasp()
Leave the specific implementation of the function empty.
`;

// Insert the task description into the user-request-cap-container element
document.getElementById('user-request-condition-cap-1-container').innerHTML = '<p>' + user_request_condition_cap_1.trim().replace(/\n/g, '<br>') + '</p>';