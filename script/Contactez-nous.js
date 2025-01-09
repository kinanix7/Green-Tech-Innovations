const nom = document.getElementById('nom');
const err = document.getElementById('errornom');
const email = document.getElementById('email');
const errmail = document.getElementById('errormail');
const sujet = document.getElementById('suj');
const errsujet = document.getElementById('errorsuj');
const message = document.getElementById('msj');
const errmsj = document.getElementById('errormsj');


nom.addEventListener('input',function(){
    if(nom.value!=='' && nom.value!==null && nom.value.length>3){
        err.textContent='valide';
        err.style.color='green';
        nom.style.borderColor='white';
    }else{
        err.textContent='champ obligatoire !'
        nom.style.borderColor='red';
    }

})
email.addEventListener('input',function(){
    let regex = /((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/;
    if(email.value!=='' && email.value!==null){
        errmail.textContent='';
        email.style.borderColor='white';
    }else{
        errmail.textContent='champ obligatoire !'
        email.style.borderColor='red';

    }
    if(regex.test(this.value)){
        errmail.textContent='format valide'
        errmail.style.color='green'
    }else{
        errmail.textContent='format invalide'
        errmail.style.color='orange'
    }

})
sujet.addEventListener('input',function(){
    if(sujet.value!=='' && sujet.value!==null && sujet.value.length>5){
        errsujet.textContent='valide';
        errsujet.style.color='green';
        sujet.style.borderColor='white';
    }else{
        errsujet.textContent='champ obligatoire !'
        sujet.style.borderColor='red';
    }

})
message.addEventListener('input',function(){
    if(message.value!=='' && message.value!==null && message.value.length>10){
        errmsj.textContent='valide';
        errmsj.style.color='green';
        message.style.border='white';
    }else{
        errmsj.textContent='champ obligatoire !'
        message.style.borderColor='red';
    }

})
<<<<<<< HEAD

=======
do
>>>>>>> 4faeb53737c1832ec4e272cbe83defb8b670e069
