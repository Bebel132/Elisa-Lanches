$(document).ready(() => {
    $(".menu-mobile").hide();
})
$(".fa-bars").click(() => {
    $(".menu-mobile").slideToggle("slow");
})