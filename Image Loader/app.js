const img = document.getElementById('thumb')
const input = document.getElementById('file')

input.addEventListener("change", (event) => {
    img.src = URL.createObjectURL(event.target.files[0])
})