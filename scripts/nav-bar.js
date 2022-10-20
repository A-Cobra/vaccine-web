// const hamburguerIcon = document.getElementById('bar');
const hamburguerIcon = document.querySelector('#bar');
const close = document.getElementById('close');
const menu = document.querySelector('.menu');
// const mainDiv = document.getElementById('nav-bar');
console.log("hello there");
console.log(hamburguerIcon);
console.log(hamburguerIcon);
// console.log(navBar);
// console.log("navBar");


hamburguerIcon.addEventListener('click', ()=>{
    // let newElement = document.createElement("h1");
    // newElement.textContent="Added";
    // mainDiv.append(newElement);
    // navBar.classList.add('active');
    // menu.classList.add('active-nav-bar');
    // navBar.style.right= 0;
    menu.setAttribute("id", "active-nav-bar")

    /* WORKING*/
    console.log("working");
    // menu.style.right=0;
})


close.addEventListener('click', ()=>{
    // let newElement = document.createElement("h1");
    // newElement.textContent="Added";
    // mainDiv.append(newElement);
    // navBar.classList.add('active');
    // menu.classList.add('active-nav-bar');
    // navBar.style.right= 0;
    menu.removeAttribute("id");

    /* WORKING*/
    console.log("working");
    // menu.style.right=0;
})
