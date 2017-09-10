/**
 * Created by heidilee on 9/7/17.
 */


function init() {
    var h1tags = document.getElementsByTagName("h1");

    h1tags[0].onclick = changeColor;
}

function changeColor() {
    this.innerHTML = "Heidi Lee";
    var blue = "#B9F6CA";

    this.style.color = blue;
}

onload = init;