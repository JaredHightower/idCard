function idCard() {
    firstName = document.getElementById('firstName').value;
    lastName = document.getElementById('lastName').value;
    address = document.getElementById('address').value;
    fullName = [firstName + lastName];
    text = document.getElementById("postFullName").innerHTML = fullName;
    text = document.getElementById("postAddress").innerHTML = address;
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log("Address: " + address);
    console.log("Full Name: " + fullName);
    console.log("Address: " + address);

    age = parseInt(document.getElementById('age').value);
    phoneNumber = parseInt(document.getElementById('phoneNumber').value);
    numberArray = [];
    numberArray.push(age, phoneNumber);
    console.log("Age: " + age);
    console.log("Phone Number: " + phoneNumber);
    console.log("Numebers in Array " + numberArray);

    for (var i = 0; i < numberArray.length; i++) {
        if (numberArray[i] <= 100) {
            document.getElementById("postAge").innerHTML = "Age: " + age;
        }
        else if (numberArray[i] >= 100) {
            document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + phoneNumber;
        }
    }
    result = idCard();
}