var x = document.querySelectorAll("td");
var length = x.length;

function changeColor() {
    for (var i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = 'red';
    }
    x[0].style.backgroundColor = getRandomColor();
    x[1].style.backgroundColor = getRandomColor();
    x[2].style.backgroundColor = getRandomColor();
    x[3].style.backgroundColor = getRandomColor();
    x[4].style.backgroundColor = getRandomColor();
    x[5].style.backgroundColor = getRandomColor();
    x[6].style.backgroundColor = getRandomColor();
    x[7].style.backgroundColor = getRandomColor();
    x[8].style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color; 
}

setInterval("changeColor()", 500);

$('#fire').on('dblclick', function() {
    $('.container').fadeOut(3000);
});






