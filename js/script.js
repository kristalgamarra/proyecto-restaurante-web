let btn1 = document.getElementById("select-1");
let btn2 = document.getElementById("select-2");
let btn3 = document.getElementById("select-3");
let imgchange = document.getElementById("imgchange");

btn1.onclick = function(){
    imgchange.src = "./imagenes/banner2.jpg"
}

btn2.onclick = function(){
    imgchange.src = "./imagenes/banner1.jpg"
}

btn3.onclick = function(){
    imgchange.src = "./imagenes/banner3.jpg"
}