let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
function nameGenerator(){
    event.preventDefault();
    var gender = document.getElementById('gender').value; 
    var date = document.getElementById('date').value;
    date = new Date(date);
    
    if (gender === 'male'&& date !=="null") {
        document.getElementById("output").innerHTML =(" Because your son was born on " + daysOfWeek[date.getDay()] + ',' + " his Akan name should be " + maleNames[date.getDay()]);
   
    }
    else if (gender === 'female'&& date!=="null" ){
        document.getElementById("output").innerHTML =(" Because your daughter was born on  " + daysOfWeek[date.getDay()] + ',' + " her Akan name should be  " + femaleNames[date.getDay()]);
       
    }
    
    else{
        document.getElementById("output").innerHTML =("Error: Ensure you input the date in correct format and the gender is selected");
    }
}

