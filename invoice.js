document.addEventListener('DOMContentLoaded', function () {
    // Retrieve data from localStorage
    const customerName = localStorage.getItem('username');
    const customerAddress = localStorage.getItem('senderAddress');
    const customerMobile = localStorage.getItem('senderMobile');
    
    const bookingId = localStorage.getItem('bookingId'); 
    const weight = localStorage.getItem('weight');
    const packingOption = localStorage.getItem('packingOption');
    const deliveryOption = localStorage.getItem('deliveryOption');
    const pickupDate = localStorage.getItem('pickupDate');
    const deliveryDate = localStorage.getItem('deliveryDate'); 
    const insurance = localStorage.getItem('insurance') === 'true' ? 200 : 0; 

    // Display the customer details
    document.getElementById('customerName').textContent = customerName;
    document.getElementById('customerAddress').textContent = customerAddress;
    document.getElementById('customerMobile').textContent = customerMobile;

    // Display the booking details
    document.getElementById('bookingId').textContent = bookingId || 'Not Available';
    document.getElementById('bookingWeight').textContent = weight;
    document.getElementById('packingOption').textContent = packingOption;
    document.getElementById('deliveryOption').textContent = deliveryOption;
    document.getElementById('pickupDate').textContent = pickupDate;
    document.getElementById('deliveryDate').textContent = deliveryDate;

    // Calculate and display the cost summary 
    const baseCost = calculateBaseCost(parseFloat(weight), packingOption, deliveryOption); 
    const totalCost = baseCost + insurance;

    document.getElementById('baseCost').textContent = baseCost;
    document.getElementById('insuranceCost').textContent = insurance;
    document.getElementById('totalCost').textContent = totalCost;

    setTimeout(function () {
        alert("Payment completed successfully!");
        window.location.href = 'homepage.html'; 
    }, 10000);
});

// Function to calculate the base cost
function calculateBaseCost(weight, packingOption, deliveryOption) {
    let cost = 0;

    cost += weight * 50; // ₹50 per kg

    if (packingOption === 'standard') {
        cost += 100;
    }

    if (deliveryOption === 'express') {
        cost += 200;
    }

    return cost;
}

function logout() {
    localStorage.clear();
    window.location.href = 'Login.html'; 
}