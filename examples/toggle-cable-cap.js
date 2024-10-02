document.addEventListener("DOMContentLoaded", function() {
    const showCableBtn = document.getElementById("show-cable-btn");
    const showCapBtn = document.getElementById("show-cap-btn");
    const cableContainer = document.getElementById("cable-experiment-container");
    const capContainer = document.getElementById("cap-experiment-container");

    // Function to reset button highlights
    function resetButtonHighlight() {
        showCableBtn.classList.remove("show-btn-active");
        showCapBtn.classList.remove("show-btn-active");
    }

    // Function to hide both containers
    function hideBothContainers() {
        cableContainer.style.display = "none";
        capContainer.style.display = "none";
    }

    // Show Cable Container and highlight button
    showCableBtn.addEventListener("click", function() {
        hideBothContainers();
        cableContainer.style.display = "block";
        resetButtonHighlight();
        showCableBtn.classList.add("show-btn-active");
    });

    // Show Cap Container and highlight button
    showCapBtn.addEventListener("click", function() {
        hideBothContainers();
        capContainer.style.display = "block";
        resetButtonHighlight();
        showCapBtn.classList.add("show-btn-active");
    });
});