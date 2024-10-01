// Define the task description as a JavaScript string
var insert_c_clip_w_ft= `
def is_inserted(env_object, force_threshold=4.5):
    # post-condition to check if the object is inserted into the specified environment object
    resistance_force = perception.get_resistance_force()
    return resistance_force < force_threshold
`;

// Insert the task description into the user-request-cap-container element
document.getElementById('insert_c_clip_w_ft').innerHTML = 
'<pre><code class="language-python">' + Prism.highlight(insert_c_clip_w_ft.trim(), Prism.languages.python, 'python') + '</code></pre>';