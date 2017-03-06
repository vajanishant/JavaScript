window.onload = function() {
    var nice = document.getElementById('nice');
    nice.style.display = "none";
    var img = document.getElementById('image');
    var count = 0;
    var score = document.getElementById('score');
    if (img.onclick) {
        alert('Hello');
    }
    img.onclick = function() {
        count = count + 1;
        score.innerHTML = count;
    }
    var but = document.getElementById('but').onclick = function() {
        count = 0;
        score.innerHTML = count;
    }
}