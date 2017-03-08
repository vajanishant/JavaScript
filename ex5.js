var submit = document.getElementById('subButton');
var inputval = document.getElementById('valuetext');
var parentN = document.getElementById('parbody');

submit.onclick = function() {
    //alert(event);
    var v = inputval.value;
    if (v == "" || v == 0) {
        alert("Please Enter some Value");
    } else {
        for (var i = 0; i < v; i++) {
            // alert("in" + (i + 1));
            //alert(v);
            var input = document.createElement("input")
            input.type = "text";
            input.id = "in" + (i + 1);
            var br = document.createElement("br");
            parentN.appendChild(br);
            parentN.appendChild(input);
        }
        //create a submit button at the end of all the textboxes
        var submitNew = document.createElement("input");
        submitNew.type = "submit";
        submitNew.id = "submitNew";
        parentN.appendChild(submitNew);
        submitNew.addEventListener('click', function() {
            for (var i = 0; i < v; i++) {
                var h4 = document.createElement('h4');
                var z = document.getElementById("in" + (i + 1)).value;
                var node = document.createTextNode(z);
                h4.appendChild(node);
                parentN.appendChild(h4);
            }
        });
    }
}



/*
if (fired) {
    console.log(fired);
    alert("Hello");
}
*/
/* working
document.getElementById("subButton").onclick = function() {
    var petCell = document.getElementById("parbody");
    var input = document.createElement("input");
    input.type = "text";
    input.id = "inp1";
    var br = document.createElement("br");
    petCell.appendChild(br);
    petCell.appendChild(input);
}

*/