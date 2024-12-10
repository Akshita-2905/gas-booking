// Function to toggle visibility of booking steps (Online, SMS, Mobile App)
function showSection(sectionId) {
    // Hide all sections
    document.getElementById('onlineBooking').style.display = 'none';
    document.getElementById('smsBooking').style.display = 'none';
    document.getElementById('mobileAppBooking').style.display = 'none';

    // Show the clicked section
    document.getElementById(sectionId).style.display = 'block';
}

// Go back to the homepage
function goBack() {
    window.history.back();
}

// Validate form before submission
function validateForm() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const gasType = document.getElementById("gasType").value;
    const quantity = document.getElementById("quantity").value;

    if (name === "" || address === "" || phone === "") {
        alert("Please fill all fields.");
        return false;
    }
    alert(`Your booking is confirmed! Gas type: ${gasType}, Quantity: ${quantity} cylinder(s).`);
    return false;  // Prevent form submission for demo purposes
}
