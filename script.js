function showPopup() {
    var popup = document.getElementById('popupForm');
    popup.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Lock body overflow when popup is displayed
}

function closePopup() {
    var popup = document.getElementById('popupForm');
    popup.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore body overflow when popup is closed
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function toggleForm() {
    var form = document.getElementById("donation-membership");
    if (form.style.display === "block") {
        form.style.display = "none";
    } else {
        form.style.display = "block";
    }
}
