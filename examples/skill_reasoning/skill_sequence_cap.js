var skill_sequence_cap = `
Frame 1 (15:18:22.236): (grasp cap) ; Because the tactile status is "grasped" and the cap is in the robot's grip.
Frame 2 (15:18:27.584): (move_object cap bottle1) ; The robot is moving the cap towards the bottle while maintaining the "grasped" status.
Frame 3 (15:18:32.429): (move_object cap bottle1) ; The robot continues moving the cap towards the bottle, still "grasped."
Frame 4 (15:18:37.209): (move_object cap bottle1) ; The robot is positioning the cap over the bottle, maintaining the "grasped" status.
Frame 5 (15:18:41.175): (release cap) ; The tactile status changes to "released," indicating the cap is placed on the bottle.
Frame 6 (15:18:47.440): (idle) ; The tactile status is "idle," indicating no active manipulation.
Frame 7 (15:19:01.136): (grasp cap) ; The robot re-grasps the cap, as indicated by the "grasped" status.
Frame 8 (15:19:07.310): (tighten cap) ; The tactile status is "under torque," indicating the robot is tightening the cap.
Frame 9 (15:19:09.382): (release cap) ; The tactile status changes to "released," indicating the cap is tightened and released.
Frame 10 (15:19:12.949): (idle) ; The tactile status is "idle," indicating no active manipulation.
Frame 11 (15:19:14.439): (grasp cap) ; The robot re-grasps the cap, as indicated by the "grasped" status.
Frame 12 (15:19:19.161): (tighten cap) ; The tactile status is "under torque," indicating the robot is tightening the cap.
Frame 13 (15:19:21.514): (release cap) ; The tactile status changes to "released," indicating the cap is tightened and released.
Frame 14 (15:19:26.768): (idle) ; The tactile status is "idle," indicating no active manipulation.
Frame 15 (15:19:29.400): (grasp cap) ; The robot re-grasps the cap, as indicated by the "grasped" status.
Frame 16 (15:19:33.039): (tighten cap) ; The tactile status is "under torque," indicating the robot is tightening the cap.
Frame 17 (15:19:35.061): (release cap) ; The tactile status changes to "released," indicating the cap is tightened and released.
Frame 18 (15:19:37.516): (idle) ; The tactile status is "idle," indicating no active manipulation.
Frame 19 (15:19:39.587): (grasp cap) ; The robot re-grasps the cap, as indicated by the "grasped" status.
Frame 20 (15:19:44.334): (tighten cap) ; The tactile status is "under linear force," indicating the robot is applying force to tighten the cap.
Frame 21 (15:19:46.735): (release cap) ; The tactile status changes to "released," indicating the cap is tightened and released.
Frame 22 (15:19:47.982): (idle) ; The tactile status is "idle," indicating no active manipulation.
Frame 23 (15:19:50.891): (grasp cap) ; The robot re-grasps the cap, as indicated by the "grasped" status.
Frame 24 (15:19:54.624): (tighten cap) ; The tactile status is "under torque," indicating the robot is tightening the cap.
Frame 25 (15:19:56.891): (release cap) ; The tactile status changes to "released," indicating the cap is tightened and released.
Frame 26 (15:19:59.428): (idle) ; The tactile status is "idle," indicating no active manipulation.
Frame 27 (15:20:01.113): (grasp cap) ; The robot re-grasps the cap, as indicated by the "grasped" status.
Frame 28 (15:20:04.922): (tighten cap) ; The tactile status is "under torque," indicating the robot is tightening the cap.
Frame 29 (15:20:07.304): (release cap) ; The tactile status changes to "released," indicating the cap is tightened and released.
Frame 30 (15:20:08.790): (idle) ; The tactile status is "idle," indicating no active manipulation.
Frame 31 (15:20:11.354): (grasp cap) ; The robot re-grasps the cap, as indicated by the "grasped" status.
Frame 32 (15:20:14.888): (tighten cap) ; The tactile status is "under linear force," indicating the robot is applying force to tighten the cap.
Frame 33 (15:20:20.019): (release cap) ; The tactile status changes to "released," indicating the cap is tightened and released.

`;

document.getElementById('skill-sequence-cap-container').innerHTML = '<p>' + skill_sequence_cap.trim().replace(/\n/g, '<br>') + '</p>';
