
mySites=[];

const inputSr=document.getElementById("input-sr");
const buttonSr=document.getElementById("button-sr");
let ulSr=document.getElementById("ul-sr");


buttonSr.addEventListener('click', function(){
    mySites.push(inputSr.value);
    inputSr.value=""; 
    callList();
})

function callList(){
    let lists="";
for(let i=0;i < mySites.length;i++){
    lists+="<li><a target='_blank' href='#'> " + mySites[i] + "</li></a>";
}

ulSr.innerHTML=lists;
}