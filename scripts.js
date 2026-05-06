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
       2. UNIVERSAL MOBILE DROPDOWN TOGGLE (EVENTS + GROUPS)
       ----------------------------------------------------- */
    document.querySelectorAll('.dropdown > a').forEach(link => {
        link.addEventListener('click', function (e) {
            if (window.innerWidth <= 900) {
                e.preventDefault();
                this.parentElement.classList.toggle('open');
            }
        });
    });

    /* -----------------------------------------------------
       3. MEMBERS SUBMENU (RIGHT-OPENING)
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
