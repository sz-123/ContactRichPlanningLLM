// Get elements
const prevBtn_cap_skill = document.getElementById('cap-skill-prev-request-btn');
const nextBtn_cap_skill = document.getElementById('cap-skill-next-request-btn');
const requestResponsePairs_cap_skill = document.querySelectorAll('.request-response-pair-skill-cap');

let currentIndex_cap_skill = 0; // Start with the first pair (index 0)

// Function to update visibility of request/response pairs
function updateVisibility_cap_skill() {
    requestResponsePairs_cap_skill.forEach((pair, index) => {
        if (index === currentIndex_cap_skill) {
            pair.style.display = 'block';
        } else {
            pair.style.display = 'none';
        }
    });

    // Disable/enable buttons based on current index
    prevBtn_cap_skill.disabled = currentIndex_cap_skill === 0;
    nextBtn_cap_skill.disabled = currentIndex_cap_skill === requestResponsePairs_cap_skill.length - 1;
}

// Event listeners for Prev and Next buttons
prevBtn_cap_skill.addEventListener('click', () => {
    if (currentIndex_cap_skill > 0) {
        currentIndex_cap_skill--;
        updateVisibility_cap_skill();
    }
});

nextBtn_cap_skill.addEventListener('click', () => {
    if (currentIndex_cap_skill < requestResponsePairs_cap_skill.length - 1) {
        currentIndex_cap_skill++;
        updateVisibility_cap_skill();
    }
});

// Initialize visibility on page load
updateVisibility_cap_skill();
