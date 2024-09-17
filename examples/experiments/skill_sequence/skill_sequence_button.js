function showSection(section) {
    // Hide all sections
    document.querySelectorAll('.skill-section').forEach(function(el) {
        el.style.display = 'none';
    });

    // Remove active class from all buttons
    document.querySelectorAll('.btn-group .btn').forEach(function(btn) {
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-secondary');
    });

    // Show selected section and highlight the button
    document.getElementById(section + '-section').style.display = 'block';
    document.getElementById(section + '-button').classList.remove('btn-secondary');
    document.getElementById(section + '-button').classList.add('btn-primary');
}

// Initialize with Full Demo shown
document.getElementById('full-demo-section').style.display = 'block';
document.getElementById('full-demo-button').classList.add('btn-primary');