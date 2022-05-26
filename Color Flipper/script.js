const btn = document.querySelector('.btn');
const color_text = document.querySelector('#color_text')

const pick_code = [0, 1, 2, 3, 4, 5, 6, "A", "B", "C", "D", "E", "F"]

function getRandomColor(){
    return Math.floor(Math.random() * pick_code.length)
}

btn.addEventListener('click', () => {
    let pick_color = "#";

    for (let i = 0; i < 6; i++){
        pick_color += pick_code[getRandomColor()]
    }

    document.body.style.background = pick_color ;
    color.textContent = pick_code
})  

