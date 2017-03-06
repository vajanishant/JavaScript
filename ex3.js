window.onload = function() {
    var a = document.getElementById('atag');
    a.setAttribute('href', 'www.abc.com');
    // or a.href="www.abc.com";
    alert(a.href);
}