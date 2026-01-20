function turn(side) {
    const card = document.getElementById("card");
    const slider = document.getElementById("slider");

    let cardWidth = card.clientWidth;
    console.log(cardWidth);
    const styles = window.getComputedStyle(card);
    const stylesSlider = window.getComputedStyle(slider);
    const marginLeft = parseInt(styles.marginLeft);
    const gap = parseInt(stylesSlider.gap);
    card.style.marginLeft = (marginLeft + cardWidth * side + gap) + "px";
}