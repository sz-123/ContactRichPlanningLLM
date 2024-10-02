// Define the task description as a JavaScript string
var insert_u_clip_wo_ft= `
def is_inserted(env_object, force_threshold=5.0):
    # post-condition to check if the object is inserted into the specified environment object
    resistance_force = perception.get_resistance_force()
    return resistance_force < force_threshold
`;

// Insert the task description into the user-request-cap-container element
document.getElementById('insert_u_clip_wo_ft').innerHTML = 
'<pre style="background-color: #f8f9fa; overflow: visible; white-space: pre-wrap; word-wrap: break-word;"><code class="language-python">' + Prism.highlight(insert_u_clip_wo_ft.trim(), Prism.languages.python, 'python') + '</code></pre>';