
function callwaiter (){
    var pressed = false
    if (pressed == false){
        fetch("https://hooks.zapier.com/hooks/catch/18327632/3xrsl5m/", {method: "POST"})
        document.getElementById("waiter").textContent = "Waiter is on their way"
        pressed = true
    }
    
}