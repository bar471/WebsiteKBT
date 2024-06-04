function showPopup() {
    var popup = document.getElementById('popupForm');
    popup.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Mengunci overflow body saat popup ditampilkan
}

function closePopup() {
    var popup = document.getElementById('popupForm');
    popup.style.display = 'none';
    document.body.style.overflow = 'auto'; // Mengembalikan overflow body ke nilai awal saat popup ditutup
}

 // Function to toggle visibility of the donation/membership form
 function toggleForm() {
    var form = document.getElementById("donation-membership");
    form.classList.toggle("show");
}