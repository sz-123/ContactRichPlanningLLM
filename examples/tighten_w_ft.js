// Define the task description as a JavaScript string
var tighten_w_ft= `
def is_tightened(threshold=2):
    # post-condition to check if the object is tightened
    resistance_torque = perception.get_resistance_torque()
    return resistance_torque > threshold
`;

// Insert the task description into the user-request-cap-container element
document.getElementById('tighten_w_ft').innerHTML = 
'<pre style="background-color: #f8f9fa; overflow: visible; white-space: pre-wrap; word-wrap: break-word;" style="background-color: #f8f9fa; overflow: visible; white-space: pre-wrap; word-wrap: break-word;"><code class="language-python">' + Prism.highlight(tighten_w_ft.trim(), Prism.languages.python, 'python') + '</code></pre>';