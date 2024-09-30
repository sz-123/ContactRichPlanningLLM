document.addEventListener("DOMContentLoaded", function() {
    const showCableBtn_condition = document.getElementById("show-task-planning-cable-btn");
    const showCapBtn_condition = document.getElementById("show-task-planning-cap-btn");
    const cableContainer_condition = document.getElementById("task-planning-cable-container");
    const capContainer_condition = document.getElementById("task-planning-cap-container");

    // Function to reset button highlights
    function resetButtonHighlight_condition() {
        showCableBtn_condition.classList.remove("btn-primary");
        showCapBtn_condition.classList.remove("btn-primary");
    }

    // Function to hide both containers
    function hideBothContainers_condition() {
        cableContainer_condition.style.display = "none";
        capContainer_condition.style.display = "none";
    }

    // Show Cable Container and highlight button
    showCableBtn_condition.addEventListener("click", function() {
        hideBothContainers_condition();
        cableContainer_condition.style.display = "block";
        resetButtonHighlight_condition();
        showCableBtn_condition.classList.add("btn-primary");
    });

    // Show Cap Container and highlight button
    showCapBtn_condition.addEventListener("click", function() {
        hideBothContainers_condition();
        capContainer_condition.style.display = "block";
        resetButtonHighlight_condition();
        showCapBtn_condition.classList.add("btn-primary");
    });
});
