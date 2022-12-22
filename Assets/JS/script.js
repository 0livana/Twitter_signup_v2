var modal1=document.querySelector("#Unumber");
var modal2=document.querySelector("#Uemail");
var modal3=document.querySelector("#customise")
var modal4=document.querySelector("#signinpage")
var modal=document.querySelector('.modal');


function closeModal(){
    modal.style.display="none"
    modal1.style.display="none"
    modal2.style.display="none"
    modal3.style.display="none"
    modal4.style.display="none"
}

function openSignup (){
    modal1.style.display="block";
    modal2.style.display="none";
    modal3.style.display="none";
    modal4.style.display="none";
}
function openSignup2 (){
    modal2.style.display="block";
    modal1.style.display="none";
    modal3.style.display="none";
    modal4.style.display="none";
}
function openCustomise(){
    modal3.style.display="block";
    modal1.style.display="none";
    modal2.style.display="none";
    modal4.style.display="none";
}
function openSignin(){
    modal4.style.display="block"
    modal3.style.display="none";
    modal2.style.display="none";
    modal1.style.display="none";
}
function back(){
    modal1.style.display="block";
    modal2.style.display="none"
    modal3.style.display="none"
    modal4.style.display="none"
}
