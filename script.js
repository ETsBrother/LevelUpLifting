let percent = 50;
let percent_str = '';
const id = document.getElementById('Div');
const moveUp = setInterval(antonios, 10);
function antonios() {
    percent -= 0.25;
    percent_str = '' + percent + '%';
    id.style.top = percent_str;
    if (percent <= 15)
        clearInterval(moveUp);
}
console.log('im a genius');
