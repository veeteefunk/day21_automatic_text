const text = document.getElementById("text");
const sizeEl = document.getElementById("size");
const content = '#100daysofsummercode'
let index = 1
// let size = 100 / sizeEl.value

writeText()

function writeText() {
    text.innerText = content.slice(0, index)
    text.style.fontSize = `${size}px`
    index++

    if(index > content.length) {
        index = 1
    }

    setTimeout(writeText, 250)
}

sizeEl.addEventListener('input', (e) => size =  10 * e.target.value)