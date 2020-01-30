function seeCat() {
   let cat = document.getElementById("cat")
   cat.style = "display: block"
}

function hideCat() {
    let cat = document.getElementById("cat")
    cat.style = "display: none" 
}

hideCat()
setTimeout(() => { alert('kitty!'); seeCat() }, 4000)
