const toggle=document.getElementById('toggledark')
const body=document.querySelector('body')

// toggle.addEventListener('click',function(){

// toggle.classList.toggle("fa-moon")   // change the class
// if(toggle.classList.toggle("fa-sun")){    //if the class name==fa-moon do this
//     body.style.background='white';
//     body.style.color='black';
//     body.style.transition='2s'

// }

// else{
//     body.style.background='black';
//     body.style.color='white';
//     body.style.transition='2s'
// }

// })

function togglechange(){
    toggle.classList.toggle("fa-moon")
    if(toggle.classList.toggle("fa-sun")){    //if the class name==fa-moon do this
            body.style.background='white';
            body.style.color='black';
            body.style.transition='2s'
        
        }
        
        else{
            body.style.background='black';
            body.style.color='white';
            body.style.transition='2s'
        }
}