function validateform() {
    var isValid = true;

    debugger;
    /**for validating First Name  */
    var firstName = "";
    firstName = document.getElementById("txtFirstName").value;
    if (firstName.trim() == "") {
        alert("Please Enter Your First Name");
        isValid = false;
    }
    else if (!isNaN(firstName)) {
        alert("Please Enter Only Characters in First Name");
        isValid = false;
    }
    /************************************************************ */

    //For validating Second Name
    var lastName = "";
    lastName = document.getElementById("txtLastName").value;
    if (lastName.trim() == "" && isValid) {
        alert("Please Enter Your Second Name");
        isValid = false;
    }
    else if (!isNaN(lastName) && isValid) {
        alert("Please Enter Only Characters in Second Name");
        isValid = false;
    }

    /************************************************************ */

    //For validating Area Code
    var areaCode = "";
    areaCode = document.getElementById("telAreaCode").value;
    if (areaCode == "" && isValid) {
        alert("please Enter the Area code");
        isValid = false;

    }
    else if (isNaN(areaCode) && isValid) {
        alert("Enter the valid Mobile Number(Like : 0484)");
        isValid = false;
    }
    if ((areaCode.length != 4) && isValid) {
        alert(" Your  Area code must be 4 digit");
        isValid = false;
    }


    /************************************************************ */

    //For validating Phone number
    var phoneNumber = "";
    phoneNumber = document.getElementById("telPhoneNumber").value;
    if (phoneNumber == "" && isValid) {
        alert("please Enter the Phone Number");
        isValid = false;

    }
    else if (isNaN(phoneNumber) && isValid) {
        alert("Enter the valid Phone Number");
        isValid = false;
    }
    else if ((phoneNumber.length != 7) && isValid) {
        alert(" Your  Phone number must be 7 digit");
        isValid = false;
    }

    /************************************************************ */
    /**for validating city  */
    var cityName = ""; 
    cityName = document.getElementById("txtCity").value;
    if (!isNaN(cityName) && cityName.length > 0 && isValid) {
        alert("Please Enter A valid City");
        isValid = false;
    }
    else if (cityName.length > 0) {
        var pinNumber = "";
        pinNumber = document.getElementById("telZipCode").value;
        if (pinNumber == "" && isValid) {
            alert("please Enter the Pincode");
            isValid = false;

        }
        else if (isNaN(pinNumber) && isValid) {
            alert("Enter the valid Pincode");
            isValid = false;
        }
        else if ((pinNumber.length != 6) && isValid) {
            alert(" Your  Pincode must be 6 digit");
            isValid = false;
        }
    } 

    //For validating Checkbox

    var termsAndCondition = "";
    termsAndCondition = document.getElementById("checkBox").checked;
    if (termsAndCondition == "" && isValid) {
        alert("You must agree the terms and conditions");
        isValid = false;
    }
   
    /************************************************************ */
    if(isValid)
    {
        displayValue(firstName, lastName, areaCode, phoneNumber, cityName, pinNumber);

        return displayValue1(firstName, lastName, areaCode, phoneNumber, cityName, pinNumber);
    }

    return isValid;
}

// display function 

function displayValue(firstName, lastName, areaCode, phoneNumber, cityName, pinNumber) {
    document.getElementById("filled-data").style.display = "block";
    document.getElementById("first-name-filled").innerHTML = "First Name : " + firstName;
    document.getElementById("last-name-filled").innerHTML = "Last Name : " + lastName;
    document.getElementById("phone-number-filled").innerHTML = "Phone no : " + areaCode + "-" + phoneNumber;
    document.getElementById("city-filled").innerHTML = "City : " + cityName;
    document.getElementById("postal-filled").innerHTML = "Postal : " + pinNumber;
}

function displayValue1(firstName, lastName, areaCode, phoneNumber, cityName, pinNumber) {
    debugger;
    localStorage.setItem("FirstName", firstName);
    localStorage.setItem("LastName", lastName);
    localStorage.setItem("AreaCode", areaCode);
    localStorage.setItem("PhoneNumber", phoneNumber);
    localStorage.setItem("CityName", cityName);
    localStorage.setItem("PinNumber", pinNumber);
    debugger;
}