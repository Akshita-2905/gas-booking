// Navigation Functions
function navigateToChat() {
    window.location.href = 'chatbot.html';
  }
  
  function navigateToPayment() {
    window.location.href = 'payment.html';
  }
  
  function confirmPayment() {
    alert('Payment Successful! Thank you for booking.');
    window.location.href = 'index.html';
  }
  
  function skipPayment() {
    alert('Booking confirmed! Cash on delivery selected.');
    window.location.href = 'index.html';
  }
  
  // Chatbot Functionality with Typing Effect
  function sendMessage() {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
  
    if (message) {
      chatBox.innerHTML += `<div class="user-message"><strong>You:</strong> ${message}</div>`;
      userInput.value = '';
      chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
  
      // Simulate bot typing effect
      setTimeout(() => {
        chatBox.innerHTML += `<div class="bot-message"><strong>Bot:</strong> Please wait while we process your request...</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
  
        setTimeout(() => {
          chatBox.innerHTML += `<div class="bot-message"><strong>Bot:</strong> Thank you for your input! We'll assist you shortly.</div>`;
          chatBox.scrollTop = chatBox.scrollHeight;
        }, 1500);
      }, 1000);
    }
  }

  // Toggle Navbar Menu
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
  
    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  });
  // Toggle the visibility of sections
function toggleSection(header) {
  const content = header.nextElementSibling;
  const icon = header.querySelector('i');

  if (content.style.display === 'block' || content.style.display === '') {
    content.style.display = 'none';
    icon.className = 'fas fa-chevron-right';
  } else {
    content.style.display = 'block';
    icon.className = 'fas fa-chevron-down';
  }
}

// Toggle Order Details
function toggleOrderDetails(orderItem) {
  const details = orderItem.querySelector('.order-details');
  details.style.display = details.style.display === 'block' ? 'none' : 'block';
}

// Edit Profile Simulation
function editProfile() {
  const newName = prompt('Enter your new name:', 'John Doe');
  if (newName) {
    document.getElementById('userName').innerText = newName;
  }
}

// Redeem Reward Simulation
function redeemReward() {
  alert('Reward redeemed successfully!');
}
let services = [
  { name: "Plumbing", description: "Expert plumbing services for your home." },
  { name: "Carpentry", description: "Custom woodwork and furniture solutions." },
  { name: "Electrical Work", description: "Certified electricians for wiring and repairs." },
  { name: "Cleaning", description: "Professional cleaning services for your home." },
  { name: "Gardening", description: "Landscaping and gardening services." },
  { name: "Pest Control", description: "Pest prevention and control services." }
];

let selectedService = null;

// Initiate chat when page loads
window.onload = function() {
  startChat();
};

// Start Chat - Greeting the user
function startChat() {
  const chatBox = document.getElementById('chat-box');
  chatBox.innerHTML = "<p>Welcome to Home Services! We are here to assist you with various home services.</p>";
  
  // After a delay, show service options
  setTimeout(() => {
    displayServices();
  }, 2000); // Delay for 2 seconds before showing the service options
}

function displayServices() {
  const chatBox = document.getElementById('chat-box');
  chatBox.innerHTML += "<p>Please select a service from the options below:</p>";

  services.forEach((service, index) => {
    let serviceButton = document.createElement('button');
    serviceButton.textContent = service.name;
    serviceButton.onclick = () => handleServiceSelection(service);
    chatBox.appendChild(serviceButton);
  });
}

function handleServiceSelection(service) {
  selectedService = service;
  const chatBox = document.getElementById('chat-box');
  
  // Display the selected service
  chatBox.innerHTML += `<p>You have selected: <strong>${service.name}</strong></p>`;
  chatBox.innerHTML += `<p>${service.description}</p>`;
  
  // Show service person details after a small delay
  setTimeout(() => {
    showServicePersonDetails(service);
  }, 1000); // Delay for realism
  
  // Show proceed to payment button after showing details
  setTimeout(() => {
    document.getElementById('payment-button').style.display = 'inline-block';
  }, 2000); // Wait for a little before showing the payment button
}

function showServicePersonDetails(service) {
  const chatBox = document.getElementById('chat-box');
  const servicePerson = {
    name: "John Doe",
    experience: "5 years",
    rating: "4.8/5",
    contact: "john.doe@homeservices.com",
    phoneNumber:"987654321"
  };
  
  chatBox.innerHTML += `<p>Service person details:</p>`;
  chatBox.innerHTML += `<ul>
    <li>Name: ${servicePerson.name}</li>
    <li>Experience: ${servicePerson.experience}</li>
    <li>Rating: ${servicePerson.rating}</li>
    <li>Contact: ${servicePerson.contact}</li>
  </ul>`;
}

function navigateToPayment() {
  window.location.href = "payment.html"; // Redirect to the payment page
}
