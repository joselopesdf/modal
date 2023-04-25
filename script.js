let openbtn =document.getElementById('open-btn')

let modalcontainer =document.getElementById('modal-container')
let closebtn =document.getElementById('close-btn')
let body =document.body




openbtn.addEventListener('click',function(){
    modalcontainer.style.display='block';
})
closebtn.addEventListener('click',function(){
    modalcontainer.style.display='none';
})

window.addEventListener('click',function(e){
    target=e.target
    if(target===modalcontainer){
        modalcontainer.style.display='none';

    }
})


