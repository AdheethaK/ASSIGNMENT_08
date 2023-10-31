const change_color_1 = () =>{
    $("#unit_1").addClass("change_color_1");
    $("#unit_2").addClass("change_color_2");
    $("#unit_3").addClass("change_color_3");
    $("#unit_4").addClass("change_color_4");
    $("#unit_5").addClass("change_color_5");
    $("#unit_6").addClass("change_color_6");
    $("#unit_7").addClass("change_color_7");
}
const change_color_2 = () =>{
    $("#unit_1").addClass("change_color_7");
    $("#unit_2").addClass("change_color_1");
    $("#unit_3").addClass("change_color_2");
    $("#unit_4").addClass("change_color_3");
    $("#unit_5").addClass("change_color_4");
    $("#unit_6").addClass("change_color_5");
    $("#unit_7").addClass("change_color_6");
}
const change_color_3 = () =>{
    $("#unit_1").addClass("change_color_6");
    $("#unit_2").addClass("change_color_7");
    $("#unit_3").addClass("change_color_1");
    $("#unit_4").addClass("change_color_2");
    $("#unit_5").addClass("change_color_3");
    $("#unit_6").addClass("change_color_4");
    $("#unit_7").addClass("change_color_5");
}
const change_color_4 = () =>{
    $("#unit_1").addClass("change_color_5");
    $("#unit_2").addClass("change_color_6");
    $("#unit_3").addClass("change_color_7");
    $("#unit_4").addClass("change_color_1");
    $("#unit_5").addClass("change_color_2");
    $("#unit_6").addClass("change_color_3");
    $("#unit_7").addClass("change_color_4");
}
const change_color_5 = () =>{
    $("#unit_1").addClass("change_color_4");
    $("#unit_2").addClass("change_color_5");
    $("#unit_3").addClass("change_color_6");
    $("#unit_4").addClass("change_color_7");
    $("#unit_5").addClass("change_color_1");
    $("#unit_6").addClass("change_color_2");
    $("#unit_7").addClass("change_color_3");
}
const change_color_6 = () =>{
    $("#unit_1").addClass("change_color_3");
    $("#unit_2").addClass("change_color_4");
    $("#unit_3").addClass("change_color_5");
    $("#unit_4").addClass("change_color_6");
    $("#unit_5").addClass("change_color_7");
    $("#unit_6").addClass("change_color_1");
    $("#unit_7").addClass("change_color_2");
}
const change_color_7 = () =>{
    $("#unit_1").addClass("change_color_2");
    $("#unit_2").addClass("change_color_3");
    $("#unit_3").addClass("change_color_4");
    $("#unit_4").addClass("change_color_5");
    $("#unit_5").addClass("change_color_6");
    $("#unit_6").addClass("change_color_7");
    $("#unit_7").addClass("change_color_1");
}

// ----------create the que-------------
var t = 500;
function que(){
    setTimeout(change_color_1,t);
    setTimeout(change_color_2,t+=100);
    setTimeout(change_color_3,t+=100);
    setTimeout(change_color_4,t+=100);
    setTimeout(change_color_5,t+=100);
    setTimeout(change_color_6,t+=100);
    setTimeout(change_color_7,t+=100);
}
for (let i=0;i<10;i++){
    que();
}