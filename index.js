let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 4

function increment() {
    count += 1
    if(count > 9){
        count = 4
    }
    countEl.textContent = count
    
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 4
    count = 4
}

let logo = document.getElementById("frog1")
function changeLogo() {
    logo.src="frog2.png"
        
}

function setLogo() {
    logo.src="frog.png"
}