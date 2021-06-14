var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',];
var maleNames = ["Kwasi", "Kwadwo",  "Kwabena", "Kwaku", "Yaw", "Kofi",  "Kwame",];
var femaleNames = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama",];
var dob=document.getElementById("DOB").value;

function genderSelect (form){
    for (Count = 0; Count < 3; Count++) {
        if (form.rad[Count].checked)
            break;
    }
}