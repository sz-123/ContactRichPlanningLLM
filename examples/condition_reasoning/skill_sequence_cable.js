var skill_sequence_cable = `
    Frame 1 (12:09:16.359): (move_object clip8) ; Because the robot is moving with the cable towards the position of clip 8.
    Frame 2 (12:09:20.717): (grasp cable) ; Because the tactile status indicates the cable is grasped.
    Frame 3 (12:09:22.360): (stretch cable) ; Because the tactile status indicates the cable is under linear force, suggesting a stretching action.
    Frame 4 (12:09:32.267): (insert cable clip8) ; Because the tactile status indicates the cable is under torque, suggesting an insertion action into clip 8.
    Frame 5 (12:09:35.452): (open_hand) ; Because the tactile status indicates the cable is released, suggesting the robot has opened its hand.
    Frame 6 (12:10:04.289): (move_object clip5) ; Because the robot is moving with the cable towards the position of clip 5.
    Frame 7 (12:10:09.344): (grasp cable) ; Because the tactile status indicates the cable is grasped.
    Frame 8 (12:10:14.287): (stretch cable) ; Because the tactile status indicates the cable is under linear force, suggesting a stretching action.
    Frame 9 (12:10:17.915): (insert cable clip5) ; Because the tactile status indicates the cable is under torque, suggesting an insertion action into clip 5.
    Frame 10 (12:10:21.726): (open_hand) ; Because the tactile status indicates the cable is released, suggesting the robot has opened its hand.
`;

document.getElementById('skill-sequence-cable-2-container').innerHTML = '<p>' + skill_sequence_cable.trim().replace(/\n/g, '<br>') + '</p>';
