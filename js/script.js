// Globala variabler
var openNr;
var closeNr;
var thisId;
var idFromlist;
var closeList;
 
function init () { 
openNr =  document.getElementsByClassName("pin");
closeNr = document.getElementsByClassName("close");
idFromlist = document.getElementsByTagName("li");
closeList = document.getElementsByTagName("img");
console.log(idFromlist);

for (let i = 0; i < openNr.length; i++) {
    openNr[i].addEventListener('click', showText);
    openNr[i].textIndex = i;   
}

for (let i = 0; i < idFromlist.length; i++) {
    idFromlist[i].addEventListener("click", showTextfromList);
}

for (let i = 0; i < closeList.length; i++) {
    closeList[i].addEventListener("click", closeTextfromList);
}


 
}
window.addEventListener("load", init);

function showText(e) {
    let i = e.target.textIndex + 1;
    let text = document.getElementById("text" + i);
    
    text.show();
    
    openNr[i-1].removeEventListener('click', showText);
    closeNr[i-1].addEventListener('click', closeText);
    closeNr[i-1].textIndex = i;
    console.log(this.id);
    this.style.width = "30px";
    thisId = this.id;
    
}

function showTextfromList() {
    let listText = document.getElementById("text" + this.value);
    listText.show();
    console.log(listText);   
    let thisPin = document.getElementById("pin" + this.value);
     thisPin.style.width = "30px";
}
 
function closeText(e) {
    let i = e.target.textIndex;
    let text = document.getElementById("text" + i);
    console.log(text);
    text.close();
    console.log(i);
    openNr[i-1].addEventListener('click', showText);
    let thisPin = document.getElementById(thisId);
    thisPin.style.width = "18px";
}

 function closeTextfromList () {
    let closeId = this.id;

    let replaceId = closeId.replace("close", "");
    console.log(closeId);
     let closeTexts = document.getElementById("text" + replaceId);
     console.log(closeTexts);
     closeTexts.close();
     let thisPin = document.getElementById("pin" + replaceId);
     thisPin.style.width = "18px";
}


