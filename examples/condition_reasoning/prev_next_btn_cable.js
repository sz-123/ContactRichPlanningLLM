// Get elements
const prevBtn_cable = document.getElementById('cable-condition-prev-request-btn');
const nextBtn_cable = document.getElementById('cable-condition-next-request-btn');
const requestResponsePairs_cable = document.querySelectorAll('.request-response-pair');

let currentIndex_cable = 0; // Start with the first pair (index 0)

// Function to update visibility of request/response pairs
function updateVisibility() {
    requestResponsePairs_cable.forEach((pair, index) => {
        if (index === currentIndex_cable) {
            pair.style.display = 'block';
        } else {
            pair.style.display = 'none';
        }
    });

    // Disable/enable buttons based on current index
    if (currentIndex_cable === 0) {
        prevBtn_cable.disabled = true;
    } else {
        prevBtn_cable.disabled = false;
    }

    if (currentIndex_cable === requestResponsePairs_cable.length - 1) {
        nextBtn_cable.disabled = true;
    } else {
        nextBtn_cable.disabled = false;
    }
}

// Event listeners for Prev and Next buttons
prevBtn_cable.addEventListener('click', () => {
    if (currentIndex_cable > 0) {
        currentIndex_cable--;
        updateVisibility();
    }
});

nextBtn_cable.addEventListener('click', () => {
    if (currentIndex_cable < requestResponsePairs_cable.length - 1) {
        currentIndex_cable++;
        updateVisibility();
    }
});

// Initialize visibility on page load
updateVisibility();