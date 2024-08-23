
const anti = document.querySelectorAll(".anti")

anti.forEach(element => {
    element.addEventListener("mouseover",()=>{
        anti.forEach(ele=>{
            ele.classList.remove("antmation")
        })
        element.classList.add("antmation")
    })
    element.addEventListener("mouseout",()=>{
        anti.forEach(ele=>{
            ele.classList.remove("antmation")
        })
        anti[0].classList.add("antmation")
    })
})