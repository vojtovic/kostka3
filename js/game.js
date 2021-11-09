var hody = [];
var timer = false;
var h = 0;



function suma(cisla) {
    var sum = 0;
    cisla.forEach(function (value, index) {
        sum += value;
    })
    return sum;
}

function maximum(cisla) {
    var max = 1;
    cisla.forEach(function (value, index) {
        if (value > max) max = value;
    })
    return max;
}

function minimum(cisla) {
    var min = 6;
    cisla.forEach(function (value, index) {
        if (value < min) min = value;
    })
    return min;
}

function average(sum, count) {
    return (sum / count).toFixed(2);
}
function animace() {
    var h = Math.ceil(Math.random() * 6);
    document.getElementById('cube').src = 'img/kostka' + h + '.png';

}
function vypis() {
    document.getElementById('result').innerHTML = '<p>Hod: ' + h + '</p>';
            document.getElementById('result').innerHTML +=
                '<p>Počet hodů: ' + hody.length + '</p>';
            document.getElementById('result').innerHTML +=
                '<p>Součet hodů: ' + suma(hody) + '</p>';
            document.getElementById('result').innerHTML +=
                '<p>Průměr hodů: ' + average(suma(hody), hody.length) + '</p>';
            document.getElementById('result').innerHTML +=
                '<p>Nejvyšší hod: ' + maximum(hody) + '</p>';
            document.getElementById('result').innerHTML +=
                '<p>Nejvyšší hod: ' + minimum(hody) + '</p>';
            document.getElementById('game').innerText = 'START';
            return h;
}



document.getElementById('game').addEventListener('click',
    function () {
        if (!timer) {
            timer = setInterval(animace, 40);
            document.getElementById('game').innerText = 'STOP';

        } else {
            clearInterval(timer);
            timer = false;
            vypis();
            maximum();
            minimum();
        }
    })