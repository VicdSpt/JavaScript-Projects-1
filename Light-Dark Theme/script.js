document.addEventListener("DOMContentLoaded", () => {
    const sunMoonContainer = document.querySelector(".sun-moon-container");
    const themeToggleButton = document.querySelector(".theme-toggle-button");

    if (themeToggleButton) {
        themeToggleButton.addEventListener("click", () => {
            document.body.classList.toggle("dark");

            if (sunMoonContainer) {
                const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue("--rotation")) || 0;
                sunMoonContainer.style.setProperty("--rotation", currentRotation + 180);
            }
        });
    }
});
