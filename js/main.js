function nameGenerator(){
var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',];
var maleNames = ["Kwasi", "Kwadwo",  "Kwabena", "Kwaku", "Yaw", "Kofi",  "Kwame",];
var femaleNames = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama",];
var dob=document.getElementById("dob").value;
var gender=document.getElementById("gender").value;
if (gender==null || gender==""){  
    alert("Check your gender");  
    return false;  
}
if (dob==null || dob==""){  
    alert("Dob cant be blank");  
    return false;  
}

}
