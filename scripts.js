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
       2. (NO DROPDOWN CLICK HANDLERS HERE)
          Desktop dropdowns are controlled purely by CSS :hover.
          Mobile dropdown behavior can be re-added later once
          desktop is confirmed perfect again.
       ----------------------------------------------------- */

});
