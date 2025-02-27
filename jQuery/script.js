// $("button").click(function() {
//     $("h1").css("color", "purple");
// })

// $(document).keydown(function(event){
//     $("h1").text(event.key);
    
// })

// $("button").on("click", function() {
//     $("h1").fadeToggle();
// })

// $("button").on("click", function() {
//     $("h1").slideToggle();
// })



$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
})