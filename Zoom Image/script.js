const zoomableContainer = document.querySelector(".zoomable-container")
const zoomableImg = document.querySelector(".zoomable-container__img")

zoomableContainer.addEventListener("mousemove", imgZoom)

function imgZoom(e) {
    const zoomableContainerInfo = zoomableContainer.getBoundingClientRect()

    const x = e.clientX - zoomableContainerInfo.left
    const y = e.clientY - zoomableContainerInfo.top

    const percentageXInContainer = (x / zoomableContainerInfo.width) * 100;
    const percentageYInContainer = (y / zoomableContainerInfo.height) * 100;

    zoomableImg.style.transformOrigin = `${percentageXInContainer}% ${percentageYInContainer}%`
}

