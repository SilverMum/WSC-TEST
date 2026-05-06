/* =========================================================
   ORIGINAL GLOBAL NAVIGATION SCRIPT
   (Only hamburger toggle — no dropdown JS at all)
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
       (NO DROPDOWN HANDLERS IN THIS VERSION)
       Desktop dropdowns use CSS :hover only.
       Mobile dropdowns were handled by the inline script
       inside index.html, not here.
       ----------------------------------------------------- */

});
