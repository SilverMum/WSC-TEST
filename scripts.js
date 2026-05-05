/* =========================================================
   GLOBAL NAVIGATION SCRIPT — WORKS ON ALL PAGES
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

    /* -----------------------------------------------------
       2. EVENTS DROPDOWN (TOP LEVEL)
       ----------------------------------------------------- */
    const eventsToggle = document.querySelector('.dropdown > .nav-link, .dropdown > .submenu-toggle');
    const eventsMenu = document.querySelector('.dropdown-menu');

    if (eventsToggle && eventsMenu) {
        eventsToggle.addEventListener('click', function (e) {
            if (window.innerWidth <= 900) {
                e.preventDefault();
                eventsMenu.classList.toggle('open');
            }
        });
    }

    /* -----------------------------------------------------
       3. GROUPS → MEMBERS SUBMENU (THE ONE YOU CARE ABOUT)
       ----------------------------------------------------- */
    const groupsToggle = document.querySelector('.dropdown-sub .submenu-toggle');
    const groupsMenu = document.querySelector('.dropdown-sub .submenu-right');

    if (groupsToggle && groupsMenu) {
        groupsToggle.addEventListener('click', function (e) {
            if (window.innerWidth <= 900) {
                e.preventDefault();
                groupsMenu.classList.toggle('open');  // ⭐ tap again closes it
            }
        });
    }

});

