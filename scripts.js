/* =========================================================
   GLOBAL NAVIGATION SCRIPT — WORKS ON ALL PAGES
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* -----------------------------------------------------
       1. MOBILE HAMBURGER MENU TOGGLE (if used)
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
    const eventsToggle = document.querySelector('.dropdown > a'); 
    const eventsMenu = document.querySelector('.dropdown > .dropdown-menu');

    if (eventsToggle && eventsMenu) {
        eventsToggle.addEventListener('click', function (e) {
            if (window.innerWidth <= 900) {
                e.preventDefault();
                eventsMenu.classList.toggle('open');
            }
        });
    }

    /* -----------------------------------------------------
       3. GROUPS → MEMBERS SUBMENU
       ----------------------------------------------------- */
    const groupsToggle = document.querySelector('.dropdown-sub > a'); 
    const groupsMenu = document.querySelector('.dropdown-sub > .submenu-right');

    if (groupsToggle && groupsMenu) {
        groupsToggle.addEventListener('click', function (e) {
            if (window.innerWidth <= 900) {
                e.preventDefault();
                groupsMenu.classList.toggle('open'); 
            }
        });
    }

});
