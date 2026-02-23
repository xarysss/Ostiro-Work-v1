document.addEventListener('DOMContentLoaded', () => {
    // --- Scroll Animations ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once visible if you want it only once
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .fade-in-up');
    animatedElements.forEach(el => observer.observe(el));

    // --- Modal Logic ---
    const modalLocation = document.getElementById('modal-location');
    const modalPhone = document.getElementById('modal-phone');
    const triggerButtons = document.querySelectorAll('.trigger-order');
    const closeButtons = document.querySelectorAll('.close-modal');
    const cityButtons = document.querySelectorAll('.location-btn');

    const displayCityName = document.getElementById('selected-city-name');
    const displayPhoneNumber = document.getElementById('phone-number');
    const callButton = document.getElementById('call-btn');

    // Open Location Modal
    triggerButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            // If the button already has data (from the Restaurants section), go straight to phone
            if (btn.dataset.city && btn.dataset.phone) {
                showPhoneModal(btn.dataset.city, btn.dataset.phone);
            } else {
                openModal(modalLocation);
            }
        });
    });

    // Close Modals
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            closeModal(modalLocation);
            closeModal(modalPhone);
        });
    });

    // Click Outside to Close
    window.addEventListener('click', (e) => {
        if (e.target === modalLocation) closeModal(modalLocation);
        if (e.target === modalPhone) closeModal(modalPhone);
    });

    // Select City -> Show Phone
    cityButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const city = btn.dataset.city;
            const phone = btn.dataset.phone;
            closeModal(modalLocation);
            showPhoneModal(city, phone);
        });
    });

    function openModal(modal) {
        modal.classList.add('active');
    }

    function closeModal(modal) {
        modal.classList.remove('active');
    }

    function showPhoneModal(city, phone) {
        displayCityName.textContent = `RESTAURANT DE ${city.toUpperCase()}`;
        displayPhoneNumber.textContent = phone;
        callButton.href = `tel:${phone.replace(/\s/g, '')}`; // Remove spaces for tel link
        openModal(modalPhone);
    }
});
