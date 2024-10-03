    // Function to show "Before" (Without F/T Sensor)
    function showBefore_stretch_cable() {
        document.getElementById('stretch_w_ft_container').style.display = 'none';
        document.getElementById('stretch_wo_ft_container').style.display = 'block';
        // Change both buttons to lighter color (outline)
        document.getElementById('beforeBtn_stretch_cable').classList.add('btn-outline-secondary');
        document.getElementById('afterBtn_stretch_cable').classList.add('btn-outline-secondary');
    }

    // Function to show "After" (With F/T Sensor)
    function showAfter_stretch_cable() {
        document.getElementById('stretch_w_ft_container').style.display = 'block';
        document.getElementById('stretch_wo_ft_container').style.display = 'none';
        // Change both buttons to lighter color (outline)
        document.getElementById('beforeBtn_stretch_cable').classList.add('btn-outline-secondary');
        document.getElementById('afterBtn_stretch_cable').classList.add('btn-outline-secondary');
    }