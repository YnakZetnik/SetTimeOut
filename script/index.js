/*
console.log("Hello");

const timer = () => {
    console.log("Timer start");
}

setTimeout(timer, 2000)
console.log("Hello World");
*/

/*
const getinfo = (name, text) => {
    alert(`${name}: ${text}`);
}

const name = prompt("Your name?")
const text = prompt("Message")

const timer = setTimeout(() => {
    getinfo(name, text)
}, 2000)

if(name === "Nikita") {
    clearTimeout(timer)
}
*/

/*
let i = 0

const timer = setInterval(() => {
    console.log(i)
    if(i >= 10) {
        clearInterval(timer)
    }
    i++
}, 1000)
*/

/*
const cube = document.querySelector("#cube")
const start = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")

let leftPos = 0
let topPos = 0
let i = 0
let timer = null
let allowed = true

const animCuber = () => {
     timer = setInterval(() => {
        if (leftPos == 0 && topPos <= 650 && topPos > 0) {
            cube.style.top = topPos + "px"
            topPos -= 10
        }
        else if (leftPos <= 650 && topPos == 650 && leftPos >= 0) {
            cube.style.left = leftPos + "px"
            leftPos -= 10
        }
        else if(leftPos >= 650 && topPos >= 0 && topPos <= 650) {
            cube.style.top = topPos + "px"
            topPos += 10
        }
        else if (leftPos >= 0 && topPos == 0 && leftPos <= 650) {
            cube.style.left = leftPos + "px"
            leftPos += 10
        }
    }, 10)
}

start.addEventListener('click', () => {
    //i == 0 && animCuber()
    allowed && animCuber()
    //i++
    allowed && false
})


stopBtn.addEventListener("click", () => {
    clearInterval(timer)
    //i = 0
    allowed = true
})
*/

//======Date======
//=====Date(year, month, day, hour, minute, seconds, ms)
/*
let now = new Date(2017, 8, 27, 14, 40, 50)


//=====Methods Get=====



console.log(now.getFullYear());
console.log(now.getDay());
console.log(now.getDate());
console.log(now.getUTCHours()); //Pokazyvaet vremya po grinvichu
console.log(getTimezoneOffset()); // 


console.log(now);


now.setFullYear(2020)
*/

/*
const deadline = "2024-08-27 10:03:02"

const getTimeRemaining = (endTime) => {


    const total = Date.parse(endTime) - Date.parse(new Date())
    const days = Math.floor(total / (1000 * 60 * 60 * 24))
    const hours = Math.floor(total / (1000 * 60 * 60) % 24)
    const minutes = Math.floor(total / (1000 * 60) % 60)
    const seconds = Math.floor((total / 1000) % 60)

    return {
        total,
        days,
        hours,
        minutes,
        seconds,
    }

}

setInterval(() => window.location.reload(), 1000);


let delay = 1000;

let timerId = setTimeout(function request() {}, delay)


let data = getTimeRemaining(deadline)

console.log(data.total);


let result = () => {
    let data = getTimeRemaining(deadline)
    const {
        total,
        days,
        hours,
        minutes,
        seconds,
    } = data

    document.querySelector(".timer__total").innerHTML = deadline
    document.querySelector(".timer__days").innerHTML = days + ": Days"
    document.querySelector(".timer__hours").innerHTML = hours + ": Hours"
    document.querySelector(".timer__minutes").innerHTML = minutes + ": Minutes"
    document.querySelector(".timer__seconds").innerHTML = seconds + ": Seconds"
}
setInterval(() => {
    location.reload();
}, 1000)

result()



let delay = 1000;

let timerId = setTimeout(function request() {
    alert("Debug")
    if(delay < request) {
        delay++
    }

    timerId = setTimeout(request, delay);

}, delay)

*/


