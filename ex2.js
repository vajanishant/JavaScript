window.onload = function() {
    var h1 = document.getElementById('h1');
    var par = h1.parentElement;
    var h6 = document.createElement("h6");
    var node = document.createTextNode("Sagar");
    h6.appendChild(node);
    par.replaceChild(h6, h1);
}