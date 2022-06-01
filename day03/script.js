const inputs = document.querySelectorAll(".controls input")

const handleEvent = function(){
    const suffix = this.dataset.sizing || ""

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => {
    input.addEventListener("change", handleEvent)
    input.addEventListener("mousemove", handleEvent)
})

