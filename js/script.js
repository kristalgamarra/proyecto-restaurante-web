let btn1 = document.getElementById("select-1");
let btn2 = document.getElementById("select-2");
let btn3 = document.getElementById("select-3");
let imgchange = document.getElementById("imgchange");

let banners = [
    "imagenes/banner1.jpg",
    "imagenes/banner2.jpg",
    "imagenes/banner3.jpg",
];

let index = 0;
 
setInterval(function(){
    index++;
    if(index >= banners.length){
        index = 0;
    }
    imgchange.src = banners[index];
},4000);

btn1.onclick = function(){
    imgchange.src = banners[0];
    index = 0;
}

btn2.onclick = function(){
    imgchange.src = banners[1];
    index = 1;
}

btn3.onclick = function(){
    imgchange.src = banners[2];
    index = 2;
}