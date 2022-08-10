function changeBGImege(j) {
    const style = getComputedStyle(document.getElementById("hero"))
    let i = parseInt( style.backgroundImage.slice(-7, -6));
    
    i = (i + j > 3) ? 3 : (i + j < 1) ? 1 : i + j;

    document.getElementById("hero").style.backgroundImage = `url("./imeges/slider${i}.jpg")`
}

const elementUp = document.getElementById("up");
const elementDown = document.getElementById("down");
console.log("elementUp", elementUp);
elementUp.addEventListener("click", () => changeBGImege(1));
elementDown.addEventListener("click", () => changeBGImege(-1));
