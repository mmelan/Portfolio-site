$(document).ready(function(){
    $(".button").hover(function(){
        $(this).animate({padding: "15px", fontSize: "2.5em", borderWidth: "3px"});
        }, function(){
        $(this).animate({padding: "10px", fontSize: "2em", borderWidth: "2px"});
    });
});
