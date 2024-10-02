// Get elements
const prevBtn_cable_skill = document.getElementById('cable-skill-prev-request-btn');
const nextBtn_cable_skill = document.getElementById('cable-skill-next-request-btn');
const requestResponsePairs_cable_skill = document.querySelectorAll('.request-response-pair-skill-cable');

let currentIndex_cable_skill = 0; // Start with the first pair (index 0)

// Function to update visibility of request/response pairs
function updateVisibility_cable_skill() {
    requestResponsePairs_cable_skill.forEach((pair, index) => {
        if (index === currentIndex_cable_skill) {
            pair.style.display = 'block';
        } else {
            pair.style.display = 'none';
        }
    });

    // Disable/enable buttons based on current index
    prevBtn_cable_skill.disabled = currentIndex_cable_skill === 0;
    nextBtn_cable_skill.disabled = currentIndex_cable_skill === requestResponsePairs_cable_skill.length - 1;
}

// Event listeners for Prev and Next buttons
prevBtn_cable_skill.addEventListener('click', () => {
    if (currentIndex_cable_skill > 0) {
        currentIndex_cable_skill--;
        updateVisibility_cable_skill();
    }
});

nextBtn_cable_skill.addEventListener('click', () => {
    if (currentIndex_cable_skill < requestResponsePairs_cable_skill.length - 1) {
        currentIndex_cable_skill++;
        updateVisibility_cable_skill();
    }
});

// Initialize visibility on page load
updateVisibility_cable_skill();
