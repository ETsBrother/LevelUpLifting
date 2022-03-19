let percent: number = 50;
let percent_str: string = '';
const id = document.getElementById('Div');
const moveUp = setInterval(antonios, 10);

function antonios() {
    percent -= 1;
    percent_str = '' + percent + '%';
    id.style.top = percent_str;
    if(percent <= 10)
        clearInterval(moveUp);
}

console.log('im a genius');