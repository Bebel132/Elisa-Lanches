$(document).ready(() => {
    $(".menu-mobile").hide();
})
$(".fa-bars").click(() => {
    $(".menu-mobile").slideToggle("slow");
    $(".fa-bars").toggleClass("fa-x");
})