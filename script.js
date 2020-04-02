const btnStart = document.getElementById("btn-start");
const btnEnd = document.getElementById("btn-end");
const rocketWrapper = document.querySelector(".rocket-wrapper");

btnStart.addEventListener('click', e => {
    e.preventDefault();
    rocketWrapper.setAttribute("id", "anim");
})

btnEnd.addEventListener('click', e => {
    e.preventDefault();
    rocketWrapper.removeAttribute("id", "anim");
    rocketWrapper.classList.add("animTwo");
})

