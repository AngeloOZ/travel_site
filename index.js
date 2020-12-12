const slider = document.querySelector('.galery_items')
const itemsGaleria = [...document.querySelectorAll('.item_galery')];

let witdh = itemsGaleria[0].clientWidth;
let indice = 1;

slider.insertAdjacentElement('beforeend', slider.firstElementChild.cloneNode(true))


window.addEventListener('resize', ()=>{
    witdh = itemsGaleria[0].clientWidth;
});

function nextElement(){
    slider.style.transform = `translateX(-${indice * witdh}px)`;
    slider.style.transition = "transform 0.8s ease";
    indice++;
    if(indice == itemsGaleria.length + 1){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            indice=1;
        },1500)
    }
}


setInterval(() => {
    nextElement();
}, 3000);