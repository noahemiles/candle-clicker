var numberOfElement = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var current = 0;
function renderAngle(data) {
    var angles = [];
    var totalElements = data.length;
    var angleIncrement = 360 / totalElements; // Calculate angle increment dynamically
    var offset = 5; //clocks
    for (var i = 1 + offset; i <= totalElements + offset; i++) {
        angles.push(i * angleIncrement);
    }
    return angles;
}

function generateHtml() {
    var html = '';
    current = 0;
    var angles = renderAngle(numberOfElement);
    angles.forEach(function (item, index) {
        html += `<div class="shapes" style="--deg:${item}deg;">
            <img src="assets/images/flame.gif" width="200" height="200">
        </div>`;
    });
    document.querySelector('.circle').innerHTML = html;
    document.querySelectorAll('.shapes')?.forEach(shape => shape.addEventListener('click', toggleIndividualCandle));
}
document.getElementById('candle-circle')?.addEventListener('click', toggleCandle);
document.getElementById('resetButton')?.addEventListener('click', resetElements);

function toggleCandle() {
    //toggle one candle at a time
    var shapes = document.querySelectorAll('.shapes');
    if (shapes && current < numberOfElement.length) {
        shapes[current].classList.toggle('off');
        current++;
    } else {
        current = 0;
        toggleCandle();
    }
}

function toggleIndividualCandle(event) {
    event.stopPropagation(); //prevent from propagating to circle
    var src = event.srcElement;
    src.closest('.shapes').classList.toggle('off');
}

document.addEventListener('keydown', function(event) {
    if (event.key === '9') {
        resetElements();
    } else if (event.key === '8') {
        toggleCandle();
    }
});

function resetElements() {
    generateHtml();
}

generateHtml();