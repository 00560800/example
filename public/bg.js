const imgNum= 2;
const bodyq = document.querySelector("body");
function paintImage(imgNumber){
    const image = new Image();
    image.src = `gageimage/bgimg${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    bodyq.prepend(image);
  

}
function random(){
const num = Math.floor(Math.random()*imgNum);
return num;

}


function init(){
    const randomnum = random();
    paintImage(randomnum);
}
init();