var color_1 = "#23C589";
var color_2 = "#F52955";
var color_3 = "#2401B2";
var color_4 = "#AC94C9";
var color_5 = "#FFBED8";
var color_6 = "#38F000";
var color_7 = "#856100";
const color_change_fnc_1 = ()=>{
    $("#unit_1").css("background-color",color_1);
    $("#unit_2").css("background-color",color_2);
    $("#unit_3").css("background-color",color_3);
    $("#unit_4").css("background-color",color_4);
    $("#unit_5").css("background-color",color_5);
    $("#unit_6").css("background-color",color_6);
    $("#unit_7").css("background-color",color_7);
};
const color_change_fnc_2 = ()=>{
    $("#unit_1").css("background-color",color_7);
    $("#unit_2").css("background-color",color_1);
    $("#unit_3").css("background-color",color_2);
    $("#unit_4").css("background-color",color_3);
    $("#unit_5").css("background-color",color_4);
    $("#unit_6").css("background-color",color_5);
    $("#unit_7").css("background-color",color_6);
};
const color_change_fnc_3 = ()=>{
    $("#unit_1").css("background-color",color_6);
    $("#unit_2").css("background-color",color_7);
    $("#unit_3").css("background-color",color_1);
    $("#unit_4").css("background-color",color_2);
    $("#unit_5").css("background-color",color_3);
    $("#unit_6").css("background-color",color_4);
    $("#unit_7").css("background-color",color_5);
};
const color_change_fnc_4 = ()=>{
    $("#unit_1").css("background-color",color_5);
    $("#unit_2").css("background-color",color_6);
    $("#unit_3").css("background-color",color_7);
    $("#unit_4").css("background-color",color_1);
    $("#unit_5").css("background-color",color_2);
    $("#unit_6").css("background-color",color_3);
    $("#unit_7").css("background-color",color_4);
};
const color_change_fnc_5 = ()=>{
    $("#unit_1").css("background-color",color_4);
    $("#unit_2").css("background-color",color_5);
    $("#unit_3").css("background-color",color_6);
    $("#unit_4").css("background-color",color_7);
    $("#unit_5").css("background-color",color_1);
    $("#unit_6").css("background-color",color_2);
    $("#unit_7").css("background-color",color_3);
};
const color_change_fnc_6 = ()=>{
    $("#unit_1").css("background-color",color_3);
    $("#unit_2").css("background-color",color_4);
    $("#unit_3").css("background-color",color_5);
    $("#unit_4").css("background-color",color_6);
    $("#unit_5").css("background-color",color_7);
    $("#unit_6").css("background-color",color_1);
    $("#unit_7").css("background-color",color_2);
};
const color_change_fnc_7 = ()=>{
    $("#unit_1").css("background-color",color_2);
    $("#unit_2").css("background-color",color_3);
    $("#unit_3").css("background-color",color_4);
    $("#unit_4").css("background-color",color_5);
    $("#unit_5").css("background-color",color_6);
    $("#unit_6").css("background-color",color_7);
    $("#unit_7").css("background-color",color_1);
};

const remove_color = ()=>{
    $("#unit_1").css("background-color","null");
    $("#unit_2").css("background-color","null");
    $("#unit_3").css("background-color","null");
    $("#unit_4").css("background-color","null");
    $("#unit_5").css("background-color","null");
    $("#unit_6").css("background-color","null");
    $("#unit_7").css("background-color","null");
}

var t = 500;
const start_que = ()=>{
    for (var i = 0; i < 100; i++) {
        setTimeout(color_change_fnc_1,t);
        setTimeout(color_change_fnc_2,t+=300);
        setTimeout(color_change_fnc_3,t+=300);
        setTimeout(color_change_fnc_4,t+=300);
        setTimeout(color_change_fnc_5,t+=300);
        setTimeout(color_change_fnc_6,t+=300);
        setTimeout(color_change_fnc_7,t+=300);
    }
}

start_que();