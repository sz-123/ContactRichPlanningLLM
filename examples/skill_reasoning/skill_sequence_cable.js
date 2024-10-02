var skill_sequence_cable = `
Frame 1 (12:09:16.359): (move_object clip8) ; Because one of the robots is moving the cable towards the position of clip 8.
Frame 2 (12:09:20.717): (grasp cable) ; Because the tactile status indicates that the cable is grasped.
Frame 3 (12:09:22.360): (stretch cable) ; Because the tactile status indicates that the cable is under linear force, suggesting a stretching action.
Frame 4 (12:09:32.267): (insert cable clip8) ; Because the tactile status indicates that the cable is under torque, suggesting an insertion into clip 8.
Frame 5 (12:09:35.452): (release cable) ; Because the tactile status indicates that the cable is released.
Frame 6 (12:10:04.289): (move_object clip5) ; Because one of the robots is moving the cable towards the position of clip 5.
Frame 7 (12:10:09.344): (grasp cable) ; Because the tactile status indicates that the cable is grasped.
Frame 8 (12:10:14.287): (stretch cable) ; Because the tactile status indicates that the cable is under linear force, suggesting a stretching action.
Frame 9 (12:10:17.915): (insert cable clip5) ; Because the tactile status indicates that the cable is under torque, suggesting an insertion into clip 5.
Frame 10 (12:10:21.726): (release cable) ; Because the tactile status indicates that the cable is released.
`;

document.getElementById('skill-sequence-cable-container').innerHTML = '<p>' + skill_sequence_cable.trim().replace(/\n/g, '<br>') + '</p>';
