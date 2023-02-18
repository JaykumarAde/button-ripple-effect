const btnEl=document.querySelector(".btn");

btnEl.addEventListener("mouseover", ()=>{
    // console.log(event.pageX)
    const x=(event.pageX - btnEl.offsetLeft)
    const y=(event.pageY - btnEl.offsetTop)

    btnEl.style.setProperty("--xPos",x + "px")
    btnEl.style.setProperty("--yPos",y + "px")
})