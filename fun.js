const game = document.querySelectorAll('.game')

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for(let g of game){
            g.style.color="black";
            g.style.backgroundColor = color;
            resolve();
            }
        }, delay)
    })
}


delayedColorChange(' #F4E2F5', 1000)
    .then(() => delayedColorChange(' #E9C5EA', 1000))
    .then(() => delayedColorChange('#E3B7E5', 1000))
    .then(() => delayedColorChange('#DEA8E0 ', 1000))
    .then(() => delayedColorChange('#DEA8E0', 1000))
    .then(() => delayedColorChange('#E9C5EA', 1000))
    .then(() => delayedColorChange('#C86ECB', 1000))
    .then(() => delayedColorChange('#E3B7E5',1000))


