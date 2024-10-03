document.addEventListener("DOMContentLoaded", function() {
    const showCableBtn = document.getElementById("show-cable-btn");
    const showCapBtn = document.getElementById("show-cap-btn");
    const cableContainer = document.getElementById("cable-experiment-container");
    const capContainer = document.getElementById("cap-experiment-container");
    const cableSidebar = document.getElementById("cable-experiment-sidebar");
    const capSidebar = document.getElementById("cap-experiment-sidebar");

    // Function to reset button highlights
    function resetButtonHighlight() {
        showCableBtn.classList.remove("show-btn-active");
        showCapBtn.classList.remove("show-btn-active");
    }

    // Function to hide both containers and sidebars
    function hideBothContainersAndSidebars() {
        cableContainer.style.display = "none";
        capContainer.style.display = "none";
        cableSidebar.style.display = "none";
        capSidebar.style.display = "none";
    }

    // Show Cable Container and Sidebar, highlight button
    showCableBtn.addEventListener("click", function() {
        hideBothContainersAndSidebars();
        cableContainer.style.display = "block";
        cableSidebar.style.display = "block";
        resetButtonHighlight();
        showCableBtn.classList.add("show-btn-active");
    });

    // Show Cap Container and Sidebar, highlight button
    showCapBtn.addEventListener("click", function() {
        hideBothContainersAndSidebars();
        capContainer.style.display = "block";
        capSidebar.style.display = "block";
        resetButtonHighlight();
        showCapBtn.classList.add("show-btn-active");
    });
});
