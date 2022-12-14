
function check(){

    let input = document.getElementById("age")
    let age = input.value

  
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