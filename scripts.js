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
       MOBILE‑ONLY DROPDOWN LOGIC
       ----------------------------------------------------- */
    if (window.innerWidth <= 900) {

        /* -------------------------------------------------
           2. EVENTS DROPDOWN (DIRECT TARGET)
           ------------------------------------------------- */
        const eventsToggle = document.querySelector('.nav-links > li.dropdown:nth-of-type(1) > a');
        const eventsMenu = document.querySelector('.nav-links > li.dropdown:nth-of-type(1) > .dropdown-menu');

        if (eventsToggle && eventsMenu) {
            eventsToggle.addEventListener('click', function (e) {
                e.preventDefault();
                eventsMenu.classList.toggle('open');
            });
        }

        /* -------------------------------------------------
           3. GROUPS DROPDOWN (DIRECT TARGET)
           ------------------------------------------------- */
        const groupsToggle = document.querySelector('.nav-links > li.dropdown:nth-of-type(2) > a');
        const groupsMenu = document.querySelector('.nav-links > li.dropdown:nth-of-type(2) > .dropdown-menu');

        if (groupsToggle && groupsMenu) {
            groupsToggle.addEventListener('click', function (e) {
                e.preventDefault();
                groupsMenu.classList.toggle('open');
            });
        }

        /* -------------------------------------------------
           4. UNIVERSAL MOBILE DROPDOWN TOGGLE (BACKUP)
           ------------------------------------------------- */
        document.querySelectorAll('.dropdown > a').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                this.parentElement.classList.toggle('open');
            });
        });

        /* -------------------------------------------------
           5. MEMBERS SUBMENU (RIGHT‑OPENING)
           ------------------------------------------------- */
        const membersToggle = document.querySelector('.dropdown-sub > .submenu-link');
        const membersMenu = document.querySelector('.dropdown-sub > .submenu-right');

        if (membersToggle && membersMenu) {
            membersToggle.addEventListener('click', function (e) {
                e.preventDefault();
                membersMenu.classList.toggle('open');
            });
        }
    }

});
