// Get elements
const prevBtn_cap = document.getElementById('cap-condition-prev-request-btn');
const nextBtn_cap = document.getElementById('cap-condition-next-request-btn');
const requestResponsePairs_cap = document.querySelectorAll('.request-response-pair-new-task-cap');

let currentIndex_cap = 0; // Start with the first pair (index 0)

// Function to update visibility of request/response pairs
function updateVisibility_cap() {
    requestResponsePairs_cap.forEach((pair, index) => {
        if (index === currentIndex_cap) {
            pair.style.display = 'block';
        } else {
            pair.style.display = 'none';
        }
    });

    // Disable/enable buttons based on current index
    if (currentIndex_cap === 0) {
        prevBtn_cap.disabled = true;
    } else {
        prevBtn_cap.disabled = false;
    }

    if (currentIndex_cap === requestResponsePairs_cap.length - 1) {
        nextBtn_cap.disabled = true;
    } else {
        nextBtn_cap.disabled = false;
    }
}

// Event listeners for Prev and Next buttons
prevBtn_cap.addEventListener('click', () => {
    if (currentIndex_cap > 0) {
        currentIndex_cap--;
        updateVisibility_cap();
    }
});

nextBtn_cap.addEventListener('click', () => {
    if (currentIndex_cap < requestResponsePairs_cap.length - 1) {
        currentIndex_cap++;
        updateVisibility_cap();
    }
});

// Initialize visibility on page load
updateVisibility_cap();