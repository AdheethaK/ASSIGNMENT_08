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

// ----------start the que-------------
var t = 500;
let nIntervalId;
function que_activate(){
    //check if the interval is already used
    if(!nIntervalId){
        nIntervalId = setInterval(que,500)
    }
}

//----------create the que-----------
let timeoutId_1 ;
let timeoutId_2 ;
let timeoutId_3 ;
let timeoutId_4 ;
let timeoutId_5 ;
let timeoutId_6 ;
let timeoutId_7 ;
function que(){
    timeoutId_1=setTimeout(change_color_1,t);
    timeoutId_2=setTimeout(change_color_2,t+=100);
    timeoutId_3=setTimeout(change_color_3,t+=100);
    timeoutId_4=setTimeout(change_color_4,t+=100);
    timeoutId_5=setTimeout(change_color_5,t+=100);
    timeoutId_6=setTimeout(change_color_6,t+=100);
    timeoutId_7=setTimeout(change_color_7,t+=100);
}

// -------------use setInterval-------------
que_activate();