$(document).ready(function() {
    //typing title
    $(function() {
        $("#title").typed({
            strings: ["sotfstac", "softstack.consulting"],
            typeSpeed: 120
        });
    });
    //get random title background
    var imageUrls = [
        "images/mainbackground1.jpg",
        "images/mainbackground2.jpg",
        "images/mainbackground3.jpg",
        "images/mainbackground4.jpg",
        "images/mainbackground5.jpg",
        "images/mainbackground6.jpg",
        "images/mainbackground7.jpg"
    ];
    var random = Math.floor(Math.random() * 7);
    $('.wrapper').css('background-image', 'url(' + imageUrls[random] + ')');
    //set copyright year dynamically
    $(".currentyear").text((new Date).getFullYear());
    //make down arrow fade in
    setTimeout(function() {
            $("#downarrowimg").fadeIn(2000);
        },
        5000);
});
