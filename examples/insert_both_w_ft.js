// Define the task description as a JavaScript string
var insert_both_w_ft= `
def insert(self, direction, env_object, clip_type):
        print(f"Inserting the {self.target_object} in {direction} into {env_object} and then loses contact")
        robot_controller.insert(direction, env_object, success_condition=lambda: is_inserted(env_object, clip_type))

def is_inserted(env_object, clip_type, force_threshold_c=4.5, force_threshold_u=2.5):
    # post-condition to check if the object is inserted into the specified environment object
    resistance_force = perception.get_resistance_force()
    if clip_type == "C-type":
        return resistance_force < force_threshold_c
    elif clip_type == "U-type":
        return resistance_force < force_threshold_u
    else:
        raise ValueError("Unknown clip type")
`;

// Insert the task description into the user-request-cap-container element
document.getElementById('insert_both_w_ft').innerHTML = 
'<pre><code class="language-python">' + Prism.highlight(insert_both_w_ft.trim(), Prism.languages.python, 'python') + '</code></pre>';