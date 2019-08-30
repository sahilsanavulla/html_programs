
function validate() {

    var isValid = true;
    var eMail = "";
    var firstName = "";
    var lastName = "";
    var areaCode = "";
    var phoneNumber = "";
    var checkBox = "";
    var zipCode = "";
    var city = "";
    var state = "";
    var mail;


    debugger;

    //E-mail validation
    eMail = document.getElementById("txtEmail").value;
    mail = /^([a-z A-Z 0-9 \.-]+)@([a-z A-Z 0-9-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if (mail.test(eMail) == false) {
        alert("Please enter a valid E-mail id!");
        isValid = false;
    }


    //First name validation
    firstName = document.getElementById("txtFirstName").value;
    if (firstName.trim() == "" && isValid) {
        alert("Please enter first name!");
        isValid = false;
    }
    else if (!isNaN(firstName) && isValid) {
        alert("Please Enter Only Characters in First Name!");
        isValid = false;
    }


    //Last name validation        
    lastName = document.getElementById("txtLastName").value;
    if (lastName.trim() == "" && isValid) {
        alert("Please enter last name!");
        isValid = false;
    }
    else if (!isNaN(lastName) && isValid) {
        alert("Please Enter Only Characters in Last Name!");
        isValid = false;
    }


    //Area code validation
    areaCode = document.getElementById("telAreaCode").value;
    if (areaCode == "" && isValid) {
        alert("please Enter the Area code");
        isValid = false;

    }
    else if (isNaN(areaCode) && isValid) {
        alert("Enter valid Area Code(Eg : 0485)");
        isValid = false;
    }
    if ((areaCode.length != 4) && isValid) {
        alert(" Your Area code must be 4 digit");
        isValid = false;
    }


    //Phone number validation
    phoneNumber = document.getElementById("telPhoneNumber").value;
    if (phoneNumber == "" && isValid) {
        alert("Please enter the Phone Number");
        isValid = false;

    }
    else if (isNaN(phoneNumber) && isValid) {
        alert("enter valid Phone Number");
        isValid = false;
    }
    else if ((phoneNumber.length != 7) && isValid) {
        alert(" Your Phone Number must be 7 digit");
        isValid = false;
    }


    //City validation
    city = document.getElementById("txtCity").value;
    if (!isNaN(city) && city !== "" && isValid) {
        alert("Please enter only characters in City name!");
        isValid = false;
    }


    //State validation
    state = document.getElementById("txtState").value;
    if (!isNaN(state) && state !== "" && isValid) {
        alert("Please enter only characters in State name!");
        isValid = false;
    }


    //Zip code validation
    zipCode = document.getElementById("telPostalCode").value;
    if (isNaN(zipCode) && isValid) {
        alert("Enter valid zip Code(Eg : 691306)");
        isValid = false;
    }


    //Checkbox validation
    checkBox = document.getElementById("optCheckBox").checked;
    if (checkBox == "" && isValid) {
        alert("You must agree the terms and conditions!");
        isValid = false;
    }
    if (isValid) {
        /* displayValue(firstName, lastName, areaCode, phoneNumber, city, zipCode);*/

        return displayValue1(firstName, lastName, areaCode, phoneNumber, city, zipCode);
    }

    return isValid;
}

// display function on same page
/*function displayValue(firstName, lastName, areaCode, phoneNumber, city, zipCode) {
    document.getElementById("filled-data").style.display = "block";
    document.getElementById("first-name-filled").innerHTML = "First Name : " + firstName;
    document.getElementById("last-name-filled").innerHTML = "Last Name : " + lastName;
    document.getElementById("phone-number-filled").innerHTML = "Phone no : " + areaCode + "-" + phoneNumber;
    document.getElementById("city-filled").innerHTML = "City : " + city;
    document.getElementById("postal-filled").innerHTML = "Postal : " + zipCode;
}*/

//display function on another page
function displayValue1(firstName, lastName, areaCode, phoneNumber, city, zipCode) {
    debugger;
    localStorage.setItem("FirstName", firstName);
    localStorage.setItem("LastName", lastName);
    localStorage.setItem("AreaCode", areaCode);
    localStorage.setItem("PhoneNumber", phoneNumber);
    localStorage.setItem("CityName", city);
    localStorage.setItem("PinNumber", zipCode);
    debugger;
}
