// Navigation
const stackedMenu = $("#stacked_menu");
const nav = $(".nav");
const exitBtn = $("#exit_btn");


stackedMenu.on("click", (e)=>{
    e.preventDefault();
    nav.addClass("show-menu");
});

exitBtn.on("click", (e)=>{
    e.preventDefault();
    nav.removeClass("show-menu");
});

