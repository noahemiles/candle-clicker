// main.js

var numberOfElement = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var current = 0;
function renderAngle(data) {
    var angles = [];
    var totalElements = data.length;
    var angleIncrement = 360 / totalElements; // Calculate angle increment dynamically
    var offset = 4; //clocks
    for (var i = 1 + offset; i <= totalElements + offset; i++) {
      angles.push(i * angleIncrement);
    }
    return angles;
  }
  

function generateHtml() {
  var html = '';
  current = 0;
  var angles = renderAngle(numberOfElement);
  angles.forEach(function(item, index) {
    html += `<div class="shapes" style="--deg:${item}deg;"></div>`;
  });
  document.querySelector('.circle').innerHTML = html;
  document.querySelectorAll('.shapes')?.forEach(shape => shape.addEventListener('click', toggleIndividualCandle));
}
document.getElementById('candle-circle')?.addEventListener('click', toggleCandle);
document.getElementById('resetButton')?.addEventListener('click', resetElements);

function toggleCandle() {
    console.log("toggleCandle");
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
    console.log(event.srcElement);
    event.srcElement.classList.toggle('off');
}

function resetElements() {
    generateHtml();
}

generateHtml();