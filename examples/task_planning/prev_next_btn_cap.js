// Get elements
const prevBtn_cap_planning = document.getElementById('cap-planning-prev-request-btn');
const nextBtn_cap_planning = document.getElementById('cap-planning-next-request-btn');
const requestResponsePairs_cap_planning = document.querySelectorAll('.request-response-pair-planning-cap');

let currentIndex_cap_planning = 0; // Start with the first pair (index 0)

// Function to update visibility of request/response pairs
function updateVisibility_cap_planning() {
    requestResponsePairs_cap_planning.forEach((pair, index) => {
        if (index === currentIndex_cap_planning) {
            pair.style.display = 'block';
        } else {
            pair.style.display = 'none';
        }
    });

    // Disable/enable buttons based on current index
    prevBtn_cap_planning.disabled = currentIndex_cap_planning === 0;
    nextBtn_cap_planning.disabled = currentIndex_cap_planning === requestResponsePairs_cap_planning.length - 1;
}

// Event listeners for Prev and Next buttons
prevBtn_cap_planning.addEventListener('click', () => {
    if (currentIndex_cap_planning > 0) {
        currentIndex_cap_planning--;
        updateVisibility_cap_planning();
    }
});

nextBtn_cap_planning.addEventListener('click', () => {
    if (currentIndex_cap_planning < requestResponsePairs_cap_planning.length - 1) {
        currentIndex_cap_planning++;
        updateVisibility_cap_planning();
    }
});

// Initialize visibility on page load
updateVisibility_cap_planning();
