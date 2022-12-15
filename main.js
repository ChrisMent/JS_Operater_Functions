
function check(){

    let input = document.getElementById("age")
    let age = input.value



// Kino Kasse
  
    // < 6 Jahre oder > 60 --> Sonderpreis 4€

    if(age < 0 || age > 110){
        alert("Kein gültiges Alter!")
    }
    
    else if(age <= 6 || age >= 60){

        alert("Der Ticketpreis beträgt 4€")

    // Für alle anderen --> 6.50€

    } else {
        alert("Der Ticketpreis beträgt 6.50€")

    }
}

function check1(){

// Blitzer 

    let inputSpeed = document.getElementById("speed")
    let speed = parseInt(inputSpeed.value)
    
    let inputDir = document.getElementById("dir")
    let isFacing = inputDir.checked

    let maxSpeed = document.getElementById("speedLimit")
    let speedLimit = parseInt(maxSpeed.value)
    let tolerance = speedLimit * 1.1


    

if(speed > tolerance && isFacing == true){
    alert("Du wurdest geblitzt")
    }

    
}

