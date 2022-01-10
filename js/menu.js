const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-navegacion');

console.log(menu);
console.log(hamburger);

hamburger.addEventListener('click', ()=> {
    menu.classList.toggle("spread");
    
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener ('click', ()=>{
    menu.classList.remove('spread')
}))

// window.addEventListener('click', e => {
//     menu.classList.remove("spread");
// })