var skill_sequence_cap = `
Frame 1 (15:18:20.565): (idle) ; Because the tactile status is idle and the robot is not interacting with the cap.
Frame 2 (15:18:22.236): (grasp cap) ; Because the tactile status is grasped and the robot is holding the cap.
Frame 3 (15:18:27.584): (move_object cap) ; Because the tactile status is grasped and the robot is moving the cap away from its initial position.
Frame 4 (15:18:32.429): (move_object cap) ; Because the tactile status is grasped and the robot is positioning the cap above the bottle.
Frame 5 (15:18:37.209): (move_object cap) ; Because the tactile status is grasped and the robot is aligning the cap with the bottle.
Frame 6 (15:18:41.175): (release cap) ; Because the tactile status is released and the robot has let go of the cap.
Frame 7 (15:18:47.440): (idle) ; Because the tactile status is idle and the robot is not interacting with the cap.
Frame 8 (15:19:01.136): (grasp cap) ; Because the tactile status is grasped and the robot is holding the cap.
Frame 9 (15:19:07.310): (tighten cap) ; Because the tactile status is under torque and the robot is applying force to tighten the cap.
Frame 10 (15:19:09.382): (release cap) ; Because the tactile status is released and the robot has let go of the cap.
Frame 11 (15:19:12.949): (idle) ; Because the tactile status is idle and the robot is not interacting with the cap.
Frame 12 (15:19:14.439): (grasp cap) ; Because the tactile status is grasped and the robot is holding the cap.
Frame 13 (15:19:19.161): (tighten cap) ; Because the tactile status is under torque and the robot is applying force to tighten the cap.
Frame 14 (15:19:21.514): (release cap) ; Because the tactile status is released and the robot has let go of the cap.
Frame 15 (15:19:26.768): (idle) ; Because the tactile status is idle and the robot is not interacting with the cap.
Frame 16 (15:19:29.400): (grasp cap) ; Because the tactile status is grasped and the robot is holding the cap.
Frame 17 (15:19:33.039): (tighten cap) ; Because the tactile status is under torque and the robot is applying force to tighten the cap.
Frame 18 (15:19:35.061): (release cap) ; Because the tactile status is released and the robot has let go of the cap.
Frame 19 (15:19:37.516): (idle) ; Because the tactile status is idle and the robot is not interacting with the cap.
Frame 20 (15:19:39.619): (grasp cap) ; Because the tactile status is grasped and the robot is holding the cap.
Frame 21 (15:19:44.334): (tighten cap) ; Because the tactile status is under linear force and the robot is applying force to tighten the cap.
Frame 22 (15:19:46.735): (release cap) ; Because the tactile status is released and the robot has let go of the cap.
Frame 23 (15:19:48.015): (idle) ; Because the tactile status is idle and the robot is not interacting with the cap.
Frame 24 (15:19:50.891): (grasp cap) ; Because the tactile status is grasped and the robot is holding the cap.
Frame 25 (15:19:54.624): (tighten cap) ; Because the tactile status is under torque and the robot is applying force to tighten the cap.
Frame 26 (15:19:56.891): (release cap) ; Because the tactile status is released and the robot has let go of the cap.
Frame 27 (15:19:59.459): (idle) ; Because the tactile status is idle and the robot is not interacting with the cap.
Frame 28 (15:20:01.113): (grasp cap) ; Because the tactile status is grasped and the robot is holding the cap.
Frame 29 (15:20:04.922): (tighten cap) ; Because the tactile status is under torque and the robot is applying force to tighten the cap.
Frame 30 (15:20:07.304): (release cap) ; Because the tactile status is released and the robot has let go of the cap.
Frame 31 (15:20:08.790): (idle) ; Because the tactile status is idle and the robot is not interacting with the cap.
Frame 32 (15:20:11.354): (grasp cap) ; Because the tactile status is grasped and the robot is holding the cap.
Frame 33 (15:20:14.888): (tighten cap) ; Because the tactile status is under linear force and the robot is applying force to tighten the cap.
Frame 34 (15:20:20.019): (release cap) ; Because the tactile status is released and the robot has let go of the cap.
`;

document.getElementById('skill-sequence-cap-container').innerHTML = '<p>' + skill_sequence_cap.trim().replace(/\n/g, '<br>') + '</p>';
