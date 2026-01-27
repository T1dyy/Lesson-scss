const card = document.getElementById("card");
const slider = document.getElementById("slider");
const btnL = document.getElementById("btnL");
const btnR = document.getElementById("btnR");
let current = 0;

function turn(side) {
    
    console.log(current);
    
    /*current = current + side;
    btnL.disabled = false;
    btnR.disabled = false;
    btnR.classList.remove("future__btn--controllerDisabled");
    btnL.classList.remove("future__btn--controllerDisabled");
    if (side == 1 && current == 0) {
        btnL.disabled = true;
        btnL.classList.add("future__btn--controllerDisabled");
        side = 0;
    } else if (side == -1 && current == -3) {
        btnR.disabled = true;
        btnR.classList.add("future__btn--controllerDisabled");
        side = 0;
    }*/
   let cardWidth = card.clientWidth;
    console.log(cardWidth);
    const styles = window.getComputedStyle(card);
    const stylesSlider = window.getComputedStyle(slider);
    const marginLeft = parseInt(styles.marginLeft);
    const gap = parseInt(stylesSlider.gap);
    card.style.marginLeft = marginLeft + side * (cardWidth + gap) + "px";
    current -= side;
    if(current == 0){
        btnL.disabled = true;
        btnL.classList.add("future__btn--controllerDisabled");
        side = 0;
    } else {
         btnL.disabled = false;
        btnL.classList.remove("future__btn--controllerDisabled");
    }
    if(current == 3){
        btnR.disabled = true;
        btnR.classList.add("future__btn--controllerDisabled");
        side = 0;
    } else {
         btnR.disabled = false;
        btnR.classList.remove("future__btn--controllerDisabled");
    }

 
}