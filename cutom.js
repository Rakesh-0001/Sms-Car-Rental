
function senddata() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var pickup = document.getElementById('pickupLocation').value;
    var dropOff = document.getElementById('dropOffLocation').value;


    // Check for empty fields
    if (name === '' || email === '' || phone === '' || pickup === '' || dropOff === '') {
        alert('Please fill in all fields');
        return;
    }

    if (phone.length !== 10) {
        // Alert if phone number is not 10 digits
        alert("Please enter a 10-digit phone number.");
        return;
    }


    let parms = {
        name: name,
        email: email,
        phone: phone,
        pickup: pickup,
        dropOff: dropOff,


    };

    // Send data using emailjs
    emailjs.send("service_3ulaqgq", "template_5qpxy57", parms)
        .then(function (response) {
            // Alert if booking is successful
            alert("Booking successful.");
        })
        .catch(function (error) {
            // Alert if there's an error
            alert("Error sending data: " + error);
        });
}

