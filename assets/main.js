// navbar -- menu
const menuBtn = document.querySelector('.menu-btn');
    const menuOverlay = document.querySelector('.menu-overlay');
    const closeBtn = document.querySelector('.close-btn');

    // Function to open menu
    function openMenu() {
        menuOverlay.classList.add('active');
    }

    // Function to close menu
    function closeMenu() {
        menuOverlay.classList.remove('active');
    }

    // 1. Button par mouse aate hi menu khulega
    menuBtn.addEventListener('mouseenter', openMenu);

    // 2. Menu par mouse aate hi wo khula rahega (Just in case)
    menuOverlay.addEventListener('mouseenter', openMenu);

    // 3. Jab mouse Menu ke box se bahar niklega, tabhi band hoga
    menuOverlay.addEventListener('mouseleave', closeMenu);
    
    // 4. Close button par click karne se bhi band hoga
    closeBtn.addEventListener('click', closeMenu);

// project

    // JavaScript Code yahan niche paste karein
        var swiper = new Swiper(".mySwiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: true,
            },
            loop: true,
        });