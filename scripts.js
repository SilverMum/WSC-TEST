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
    const eventsToggle = document.querySelector('.nav-links > .dropdown:nth-of-type(1) > a');
    const eventsMenu = document.querySelector('.nav-links > .dropdown:nth-of-type(1) > .dropdown-menu');

    if (eventsToggle && eventsMenu) {
        eventsToggle.addEventListener('click', function (e) {
            if (window.innerWidth <= 900) {
                e.preventDefault();
                eventsMenu.classList.toggle('open');
            }
        });
    }

    /* -----------------------------------------------------
       3. GROUPS DROPDOWN (TOP LEVEL)
       ----------------------------------------------------- */
    const groupsToggle = document.querySelector('.nav-links > .dropdown:nth-of-type(2) > a');
    const groupsMenu = document.querySelector('.nav-links > .dropdown:nth-of-type(2) > .dropdown-menu');

    if (groupsToggle && groupsMenu) {
        groupsToggle.addEventListener('click', function (e) {
            if (window.innerWidth <= 900) {
                e.preventDefault();
                groupsMenu.classList.toggle('open');
            }
        });
    }

    /* -----------------------------------------------------
       4. MEMBERS SUBMENU (RIGHT-OPENING)
       ----------------------------------------------------- */
    const membersToggle = document.querySelector('.dropdown-sub > .submenu-link');
    const membersMenu = document.querySelector('.dropdown-sub > .submenu-right');

    if (membersToggle && membersMenu) {
        membersToggle.addEventListener('click', function (e) {
            if (window.innerWidth <= 900) {
                e.preventDefault();
                membersMenu.classList.toggle('open');
            }
        });
    }

});
