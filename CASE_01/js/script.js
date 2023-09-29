const myFunction_1 = () =>{
    $(".img-1").css("opacity",1);
    $(".img-2").css("opacity",0);
    $(".img-3").css("opacity",0);
    $(".img-4").css("opacity",0);
    $(".img-5").css("opacity",0);
    $(".img-6").css("opacity",0);
}
const myFunction_2 = () =>{
    $(".img-1").css("opacity",0);
    $(".img-2").css("opacity",1);
    $(".img-3").css("opacity",0);
    $(".img-4").css("opacity",0);
    $(".img-5").css("opacity",0);
    $(".img-6").css("opacity",0);
}
const myFunction_3 = () =>{
    $(".img-1").css("opacity",0);
    $(".img-2").css("opacity",0);
    $(".img-3").css("opacity",1);
    $(".img-4").css("opacity",0);
    $(".img-5").css("opacity",0);
    $(".img-6").css("opacity",0);
}
const myFunction_4 = () =>{
    $(".img-1").css("opacity",0);
    $(".img-2").css("opacity",0);
    $(".img-3").css("opacity",0);
    $(".img-4").css("opacity",1);
    $(".img-5").css("opacity",0);
    $(".img-6").css("opacity",0);
}
const myFunction_5 = () =>{
    $(".img-1").css("opacity",0);
    $(".img-2").css("opacity",0);
    $(".img-3").css("opacity",0);
    $(".img-4").css("opacity",0);
    $(".img-5").css("opacity",1);
    $(".img-6").css("opacity",0);
}
const myFunction_6 = () =>{
    $(".img-1").css("opacity",0);
    $(".img-2").css("opacity",0);
    $(".img-3").css("opacity",0);
    $(".img-4").css("opacity",0);
    $(".img-5").css("opacity",0);
    $(".img-6").css("opacity",1);
}
var t = 300;
for (var i = 0; i < 100; i++) {
    setTimeout(myFunction_1,t);
    setTimeout(myFunction_2,t+=300);
    setTimeout(myFunction_3,t+=300);
    setTimeout(myFunction_4,t+=300);
    setTimeout(myFunction_5,t+=300);
    setTimeout(myFunction_6,t+=300);
}