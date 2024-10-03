// Define the task description as a JavaScript string
var capSkillLibUser= `

You are reasoning about skills and skill parameters at each frame of a video step by step. You must pick only skills from the given skill library. Your reasoning will be based on PDDL. Before reasoning, generate a PDDL domain of the CapSkillLibrary: prompt_skill_library, Format your answer strictly in the way: (define (domain robot_skills)
`;

  document.getElementById('cap-skilllib-user-container').innerHTML = '<p>' + capSkillLibUser.trim().replace(/\n/g, '<br>') + '</p>';