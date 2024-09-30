document.addEventListener("DOMContentLoaded", function() {
    const showCableBtn = document.getElementById("show-cable-btn");
    const showCapBtn = document.getElementById("show-cap-btn");
    const cableContainer = document.getElementById("cable-experiment-container");
    const capContainer = document.getElementById("cap-experiment-container");

    // Function to reset button highlights
    function resetButtonHighlight() {
        showCableBtn.classList.remove("btn-primary");
        showCapBtn.classList.remove("btn-primary");
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
        showCableBtn.classList.add("btn-primary");
    });

    // Show Cap Container and highlight button
    showCapBtn.addEventListener("click", function() {
        hideBothContainers();
        capContainer.style.display = "block";
        resetButtonHighlight();
        showCapBtn.classList.add("btn-primary");
    });
});
