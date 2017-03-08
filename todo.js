function callID(id) {
    //alert("ID:" + id);
    var z = document.getElementById(id);
    return z;
}

function cnt() {
    return cnt.count = ++cnt.count || 1;
    //alert(cnt.count);
}
/*
var submit = callID('subButton');
var parentTable = callID('tabletodo');
var valuetodo = callID('inputadd').value;
//alert(valuetodo);


submit.addEventListener('click', function() {
    //alert(valuetodo);
    var coun = cnt(); //counter static variable always stays to a uniform id as per event
    var coun = "in" + coun;

    //tr ends
    var tr = document.createElement("tr");
    tr.id = coun;
    parentTable.appendChild(tr);
    trnew = callID(coun); //so that td will go in id same as this tr
    //tr ends

    //td starts
    var td = document.createElement("td");
    td.id = coun;
    tdnew = callID(coun);
    trnew.appendChild(td);
    //td ends

    //span starts
    var span = document.createElement("span");
    td.appendChild(span);
    //node starts
    var node = document.createTextNode(callID('inputadd').value);
    td.style.alignContent = "center"
        //node ends
    span.appendChild(node);
    //span ends

    //button starts
    var button = document.createElement("input");
    button.type = "submit";
    button.id = coun;
    button.value = "X";
    trnew.appendChild(td);
    tdnew.appendChild(button);
    //2
    var button2 = document.createElement("input");
    button2.type = "submit";
    button2.id = coun;
    button2.value = "Verify";
    tdnew.appendChild(button2);
    //button ends

    var butdel = callID(coun);
    butdel.addEventListener('click', function() {
        var rem = butdel.parentNode.removeChild(butdel);
    })

});
*/

var submitB = callID('subButton');
var parentTable = callID('tabletodo');
//var valuetodo = callID('inputadd').value;

submitB.onclick = function() {
    //alert(callID('inputadd').value);
    var val = callID('inputadd').value; //stores value
    //alert(cnt() - 1);
    var coun = cnt(); //counter static variable always stays to a uniform id as per event
    //alert(counMain);
    var coun = "in" + coun;


    var trow = parentTable.insertRow(2); //at 0th index
    trow.id = coun; //in1
    //tr:nth-child(even) {background-color: #f2f2f2}
    //trow.style.

    var tcell = trow.insertCell(0);
    tcell.id = "in" + coun; //inin1
    tcell.innerHTML = val; //data+9
    tcell.style.textAlign = "center";


    var tcell = trow.insertCell(1); //works as td
    tcell.id = "in" + coun; //inin1
    //create button
    var but = document.createElement("button");
    but.id = "but" + coun;
    but.textContent = "X";
    var butver = document.createElement("button");
    butver.id = "butver" + coun;
    butver.textContent = "Verify";
    //button ends
    //append work
    tcell.appendChild(but);
    tcell.appendChild(butver);
    parentTable.appendChild(trow);

    //clears the text???
    //alert(callID('inputadd').value);
    callID('inputadd').value = " ";


    //button onClick listener
    but.addEventListener('click', function() {
        var del = confirm("Are you sure?");
        if (del) {
            //alert("OK");
            but.parentNode.parentNode.parentNode.removeChild(trow);
        } else {
            alert("You're saved");
        }

    });

    //add verified tag
    butver.addEventListener('click', function() {
        //callID('inputadd').style.textDecoration = "line-through";
        callID("in" + coun).style.backgroundColor = "lightblue";
    });
}