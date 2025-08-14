let pgph = document.getElementById('p-div');
let img = document.getElementById('img-div');
let pgphButton = document.getElementById('p-button');
let imgButton = document.getElementById('img-button');

imgButton.onclick = function() {
    img.style.display = 'block';
    let dsimg = document.createElement('img');
    dsimg.src = 'images/DS.png';
    pgph.style.display = 'none';
    img.appendChild(dsimg);
}

pgphButton.onclick = function() {
    pgph.style.display = 'block';
    img.style.display = 'none';
    pgph.innerHTML += "Dark Souls is the harderst game ever!<br>";
}