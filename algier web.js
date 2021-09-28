
// const container = document.querySelector(".container");
// document.querySelector(".open-navbar-icon").addEventListener("click", ()=>{
// container.classList.add("change");

// })

// const container = document.querySelector(".container");
// document.querySelector(".close-navbar-icon").addEventListener("click", ()=>{
// container.classList.remove("change");

// })

const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});



const colors = ["#6495ed","#7fffd4", "#6495ed", "#ffa07a", "#afeeee", "#fo8080" ]
let i = 0;

Array.from(document.querySelectorAll(".nav-link")
).forEach((item)=>{
item.style.cssText = `background-color: ${colors[i++]}`
})

Array.from(document.querySelectorAll(".navigation-button")).forEach((item)=>{
item.onclick =() =>{
    item.parentElement.parentElement.parentElement.classList.toggle("change");
}
})

Array.from(document.querySelectorAll(".front-navigation-button")).forEach((item)=>{
    item.onclick =() =>{
        item.parentElement.parentElement.classList.toggle("change");
    }
    })

// code for the footer "all right reserved"
    
    const text = "Copy Right© Algier12 All RIghts Reserved"

let index = 0;

function writeText(){
    document.getElementById("footer-paragraph").innerText = text.slice(0, index);

    index++;
    
    if (index> text.length -1 ){
        index = 0;
    }
}

setInterval(writeText, 100);



// code for popup after submit



const open = document.getElementById("form-btn");
const close = document.getElementById("close");
const popupContainer = document.getElementById("container1");


open.addEventListener("click", ()=>{
    popupContainer.classList.add("active");
})


close.addEventListener("click", ()=>{
    container.classList.remove("active");
})




    
