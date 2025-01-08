const nom = document.getElementById('nom');
const err = document.getElementById('errornom');
const email = document.getElementById('email');
const errmail = document.getElementById('errormail');
const sujet = document.getElementById('suj');
const errsujet = document.getElementById('errorsuj');
const message = document.getElementById('msj');
const errmsj = document.getElementById('errormsj');


nom.addEventListener('input',function(){
    if(nom.value!=='' && nom.value!==null){
        err.textContent='';
        nom.style.borderColor='white';
    }else{
        err.textContent='champ obligatoire !'
        nom.style.borderColor='red';
    }

})
email.addEventListener('input',function(){
    if(email.value!=='' && email.value!==null){
        errmail.textContent='';
        email.style.borderColor='white';
    }else{
        errmail.textContent='champ obligatoire !'
        email.style.borderColor='red';

    }

})
sujet.addEventListener('input',function(){
    if(sujet.value!=='' && sujet.value!==null){
        errsujet.textContent='';
        sujet.style.borderColor='white';
    }else{
        errsujet.textContent='champ obligatoire !'
        sujet.style.borderColor='red';
    }

})
message.addEventListener('input',function(){
    if(message.value!=='' && message.value!==null){
        errmsj.textContent='';
        message.style.borderColor='white';
    }else{
        errmsj.textContent='champ obligatoire !'
        message.style.borderColor='red';
    }

})
