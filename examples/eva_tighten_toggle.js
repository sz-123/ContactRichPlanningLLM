    // Function to show "Before" (Without F/T Sensor)
    function showBefore_tighten_cap() {
        document.getElementById('tighten_w_ft_container').style.display = 'none';
        document.getElementById('tighten_wo_ft_container').style.display = 'block';
        // Change both buttons to lighter color (outline)
        document.getElementById('beforeBtn_tighten_cap').classList.add('btn-outline-secondary');
        document.getElementById('afterBtn_tighten_cap').classList.add('btn-outline-secondary');
    }

    // Function to show "After" (With F/T Sensor)
    function showAfter_tighten_cap() {
        document.getElementById('tighten_w_ft_container').style.display = 'block';
        document.getElementById('tighten_wo_ft_container').style.display = 'none';
        // Change both buttons to lighter color (outline)
        document.getElementById('beforeBtn_tighten_cap').classList.add('btn-outline-secondary');
        document.getElementById('afterBtn_tighten_cap').classList.add('btn-outline-secondary');
    }