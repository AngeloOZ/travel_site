const galeria = document.getElementById('galeria');
const slider = document.querySelector('.galery_items')
const itemsGaleria = [...document.querySelectorAll('.item_galery')];

const btnNext = document.querySelector('.siguiente');
const btnPrev = document.querySelector('.anterior');
let witdh = itemsGaleria[0].clientWidth;
let indice = 1;

slider.insertAdjacentElement('beforeend', slider.firstElementChild.cloneNode(true))


window.addEventListener('resize', ()=>{
    witdh = itemsGaleria[0].clientWidth;
});

function nextElement(){
    // console.log(indice)
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

function previousElement(){
    indice--;
    if(indice < 0){
        indice = itemsGaleria.length - 1;
    }
    console.log(indice);
    slider.style.transform = `translateX(-${indice * witdh}px)`;
    slider.style.transition = "transform 0.8s ease"

}
btnNext.addEventListener('click', () =>{
    nextElement()
})

btnPrev.addEventListener('click', () =>{
    previousElement()
})

setInterval(() => {
    nextElement();
}, 3000);