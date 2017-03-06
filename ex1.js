window.onload = function() {

    var x = document.getElementById('submitB');

    x.onclick = function() {
        var name = document.getElementById('name').value;
        //alert(name);
        document.getElementById('h1').innerHTML = name;
    }
}