const popups = [...document.getElementsByClassName('popuptext')];
const submit = document.getElementById("submit");

const popup_email = document.getElementById("invalid-email");
const popup_pw = document.getElementById("invalid-pw");
const popup_pwcfm = document.getElementById("invalid-pwcfm");

document.addEventListener('click', function (e) {

  const email = document.getElementById("email").value;  
  const pw = document.getElementById("password").value;  
  const pwcfm = document.getElementById("password_confirm").value;  

  if (submit.contains(e.target)){
    if(pw != pwcfm)  
      {  
        popup_pwcfm.classList.toggle("show");          
      }
    if(pw == ''){
      popup_pw.classList.toggle("show");
    }
    if(email == ''){
      popup_email.classList.toggle("show");
    }
  }else{
    popups.forEach(p => p.classList.remove('show'));
  }
});

window.addEventListener('DOMContentLoaded', function () { //for some reason, the page didnt display properly until its first refresh so i had hash to reload
  if(!window.location.hash) {                             //but that stopped working as well so now its hash refresh after content loaded
    window.location = window.location + '#loaded';
    window.location.reload();
  }
})
