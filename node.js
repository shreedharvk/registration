function printDetails() {
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var phone = document.getElementById("phone").value;

    var details = "First Name: " + firstName + "\n" +
                  "Last Name: " + lastName + "\n" +
                  "Phone: " + phone;

    alert(details);}