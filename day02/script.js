const hour = document.querySelector(".hour")

const min = document.querySelector(".min")

const sec = document.querySelector(".sec")


const setDate = function(){
    const now = new Date()
    const seconds = now.getSeconds()

    sec.style.transform = `rotate(${(seconds / 60)*360 + 90}deg)`

    const mins = now.getMinutes()

    min.style.transform = `rotate(${(mins / 60)*360 + 90}deg)`

    const hours = now.getHours()

    hour.style.transform = `rotate(${(hours / 12)*360 + 90}deg)`
}

setInterval(setDate, 1000)

