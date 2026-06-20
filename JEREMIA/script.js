const orderForm = document.getElementById("orderForm");
const modalOverlay = document.getElementById("modalOverlay");
const modalMessage = document.getElementById("modalMessage");
const whatsappBtn = document.getElementById("whatsappBtn");
const closeModal = document.getElementById("closeModal");

if (orderForm) {

    const dateInput = document.getElementById("date");
    if (dateInput) {
        const today = new Date().toISOString().split("T")[0];
        dateInput.setAttribute("min", today);
    }

    let whatsappUrl = "";

    orderForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const fullName = document.getElementById("fullName").value;
        const phoneNumber = document.getElementById("phoneNumber").value;
        const email = document.getElementById("email").value;
        const product = document.getElementById("product").value;
        const quantity = document.getElementById("quantity").value;
        const date = document.getElementById("date").value;
        const instructions = document.getElementById("instructions").value || "None";

        const message =
`New Order - Nkateko's Treats & Delicacies
Name: ${fullName}
Phone: ${phoneNumber}
Email: ${email}
Product: ${product}
Quantity: ${quantity}
Date: ${date}
Instructions: ${instructions}`;

        // Replace with YOUR number (international format, no + or spaces)
        const whatsappNumber = "27818132382";
        whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        // Show modal with personalised message

        modalMessage.innerHTML = `Thank you <strong>${fullName}</strong>! Your order for <strong>${quantity} x ${product}</strong> has been received. Click below to send us your order details on WhatsApp and we'll confirm shortly.`;
        modalOverlay.style.display = "flex";

        orderForm.reset();
    });

    // Open WhatsApp when button clicked

    whatsappBtn.addEventListener("click", function () {
        window.open(whatsappUrl, "_blank");
        modalOverlay.style.display = "none";
    });

    // Close modal without WhatsApp

    closeModal.addEventListener("click", function () {
        modalOverlay.style.display = "none";
    });

    // Close modal if clicking outside the box

    modalOverlay.addEventListener("click", function (e) {
        if (e.target === modalOverlay) {
            modalOverlay.style.display = "none";
        }
    });
}