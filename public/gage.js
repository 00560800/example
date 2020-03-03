const body = document.querySelector("body");
const A=document.querySelector(".js-A"),
    B=document.querySelector(".js-B"),
    C=document.querySelector(".js-C"),
    D=document.querySelector(".js-D"),
    E=document.querySelector(".js-E"),
    F=document.querySelector(".js-F");
 const reloading = document.querySelector(".reload");

const abtn = document.getElementById("A-btn");
const bbtn = document.getElementById("B-btn");
const cbtn = document.getElementById("C-btn");
const dbtn = document.getElementById("D-btn");
const ebtn = document.getElementById("E-btn");
const fbtn = document.getElementById("F-btn");
 

const mainImage = new Image();
mainImage.src = `gageImage/first.jpg`;
mainImage.classList.add("cssMain");

    
const aImage = new Image();
aImage.src = `gageImage/1.png`;
const bImage = new Image();
bImage.src = `gageImage/2.png`;    
const cImage = new Image();
cImage.src = `gageImage/3.png`;

const dImage = new Image();
dImage.src = `gageImage/4.png`;
const eImage = new Image();
eImage.src = `gageImage/5.png`;
const fImage = new Image();
fImage.src = `gageImage/6.png`;

const div = document.querySelector(".imgDiv");
function delBtn() {
    
    abtn.classList.add("delBtn");
    bbtn.classList.add("delBtn");
    cbtn.classList.add("delBtn");
    dbtn.classList.add("delBtn");
    ebtn.classList.add("delBtn");
    fbtn.classList.add("delBtn");
}


function fClickHandle(fEvent){
    mainImage.classList.add("js-deleteImg");
    F.classList.add("js-deleteform");
    delBtn();
    fEvent.preventDefault();
    div.prepend(fImage);
    fImage.classList.add("cssF");
    reloading.classList.toggle("reload");
}


function eClickHandle(eEvent){
    mainImage.classList.add("js-deleteImg");
    E.classList.add("js-deleteform");
    delBtn();
    eEvent.preventDefault();
    div.prepend(eImage);
    eImage.classList.add("cssE");
    reloading.classList.toggle("reload");
}


function dClickHandle(dEvent){
    mainImage.classList.add("js-deleteImg");
    D.classList.add("js-deleteform");
    delBtn();
    dEvent.preventDefault();
    div.prepend(dImage);
    dImage.classList.add("cssD");
    reloading.classList.toggle("reload");
}




function cClickHandle(cEvent){
    mainImage.classList.add("js-deleteImg");
    C.classList.add("js-deleteform");
    delBtn();
    cEvent.preventDefault();
    div.prepend(cImage);
    cImage.classList.add("cssC");
    reloading.classList.toggle("reload");
}



function bClickHandle(bEvent){
    mainImage.classList.add("js-deleteImg");
    B.classList.add("js-deleteform");
    delBtn();
    bEvent.preventDefault();
    div.prepend(bImage);
    bImage.classList.add("cssB");
    reloading.classList.toggle("reload");
}




function aClickHandle(aEvent){
    
    mainImage.classList.add("js-deleteImg");
    A.classList.add("js-deleteform");
    delBtn(); 
    aEvent.preventDefault();
    div.prepend(aImage);
    aImage.classList.add("cssA");
    reloading.classList.toggle("reload");
}


function  bigImage() {
    
    div.prepend(mainImage);
     
    
    A.addEventListener("click",aClickHandle);
    B.addEventListener("click",bClickHandle);
    C.addEventListener("click",cClickHandle);
    D.addEventListener("click",dClickHandle);
    E.addEventListener("click",eClickHandle);
    F.addEventListener("click",fClickHandle);


}



function  init() {
    bigImage();

    



}

init();