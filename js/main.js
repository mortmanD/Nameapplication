let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
function nameGenerator(){
    event.preventDefault();
    let gender = document.getElementById('gender').value; 
    let date = document.getElementById('date').value;
    date = new Date(date);

    if (gender === 'male'){
        document.getElementById("output").innerHTML =(" Since you were born on " + daysOfWeek[date.getDay()] + ',' + " your Akan name is " + maleNames[date.getDay()]);
        
    
    }
    else if (gender === 'female'){
        document.getElementById("output").innerHTML =(" Since you were born on " + daysOfWeek[date.getDay()] + ',' + " your Akan name is " + femaleNames[date.getDay()]);
       
    }
    else{
        document.getElementById("output").innerHTML =("Error: Ensure you input the date in correct format and the gender is selected");''
    }
}

