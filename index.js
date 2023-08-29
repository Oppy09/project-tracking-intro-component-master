let hamburgerIcon = $(".hamburger-icon");
let closeIcon = $(".close-icon");
let navMenu = $(".navigation-menu");
let links = $(".nav-links a");

hamburgerIcon.click(()=> {
    setTimeout(()=> {
        hamburgerIcon.addClass("hide");
        closeIcon.removeClass("hide");
        navMenu.removeClass("hide");
    }, 300);
});

closeIcon.click(()=> {
    setTimeout(()=> {
        hamburgerIcon.removeClass("hide");
        closeIcon.addClass("hide");
        navMenu.addClass("hide");
    }, 300);
});

links.click(()=> {
    hamburgerIcon.removeClass("hide");
    closeIcon.addClass("hide");
    navMenu.addClass("hide");
});