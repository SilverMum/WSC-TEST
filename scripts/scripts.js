/* =========================================================
   GLOBAL NAVIGATION SCRIPT — DESKTOP SAFE + MOBILE DROPDOWNS
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* -----------------------------------------------------
       1. MOBILE HAMBURGER MENU TOGGLE
       ----------------------------------------------------- */
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', function () {
            navLinks.classList.toggle('open');
        });
    }

});

/* =========================================================
   2. MOBILE DROPDOWN TOGGLE LOGIC (Events + Groups)
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(drop => {
        const trigger = drop.querySelector("a");              // Events or Groups
        const menu = drop.querySelector(".dropdown-menu");    // Their dropdown menu

        trigger.addEventListener("click", (e) => {

            // Only run on mobile
            if (window.innerWidth > 900) return;

            e.preventDefault(); // stop page jump

            // Close all other open menus
            document.querySelectorAll(".dropdown-menu.open").forEach(openMenu => {
                if (openMenu !== menu) openMenu.classList.remove("open");
            });

            // Toggle this one
            menu.classList.toggle("open");
        });
    });

    /* -----------------------------------------------------
       3. CLOSE MENU WHEN CLICKING ANY DROPDOWN ITEM
       ----------------------------------------------------- */
    document.querySelectorAll(".dropdown-menu a").forEach(item => {
        item.addEventListener("click", () => {
            document.querySelectorAll(".dropdown-menu.open")
                .forEach(m => m.classList.remove("open"));
        });
    });

});

/* =========================================================
   FULLSCREEN IMAGE VIEWER
   ========================================================= */

function openFullscreenImage(src) {
    const overlay = document.getElementById('fullscreen-overlay');
    const img = document.getElementById('fullscreen-img');
    img.src = src;
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // freeze page scroll
}

function closeFullscreenImage(event) {
    if (event) event.stopPropagation(); // prevents closing when clicking the image
    const overlay = document.getElementById('fullscreen-overlay');
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto'; // restore scroll
}

/* =========================================================
   MINI‑CARD CLICK HANDLER (for both sections)
   ========================================================= */

document.querySelectorAll('.mini-card').forEach(card => {
    card.addEventListener('click', function () {

        // 1. Remove highlight from all mini-cards
        document.querySelectorAll('.mini-card').forEach(c => {
            c.classList.remove('active-highlight');
        });

        // 2. Add highlight to clicked mini-card
        this.classList.add('active-highlight');

        // 3. Get highlight color from data-color
        const color = this.getAttribute('data-color');

        // 4. Update big-card highlight bar
        const bigHighlight = this.closest('section')
            .querySelector('.big-card-highlight');

        if (bigHighlight) {
            bigHighlight.style.background = color;
        }

        // 5. Switch big-card content
        const targetId = this.getAttribute('data-target');
        const section = this.closest('section');

        // Remove active from all big cards in this section
        section.querySelectorAll('.activity-info').forEach(info => {
            info.classList.remove('active');
        });

        // Activate the correct big card
        const targetCard = section.querySelector('#' + targetId);
        if (targetCard) {
            targetCard.classList.add('active');
        }
    });
});

