var y = 0;
var tudos = [];
var z;
var hides = [];
var h;
var j = 0;
var finish = [];
var filter = [];
var m;

const search = document.getElementById("filtertodo");
search.addEventListener('keyup', function (e) {
    var td, tr, table, txtValue;
    const term = e.target.value.toLowerCase();

    while (filter.length > 0) {
        filter.pop();
    }

    funcfilter(term);
    function funcfilter(term) {

        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        //console.log(tr.length);
        var table2 = document.getElementById("myTable2");
        tr1 = table2.getElementsByTagName("tr");

        for (var i = 0; i < (tr.length); i++) {
            document.getElementById("myTable").deleteRow(i);
            myTable.style.display = "none";

        }
        for (var i = 0; i < (tr1.length); i++) {
            document.getElementById("myTable2").deleteRow(i);
            myTable2.style.display = "none";

        }


        if (term != "") {
            console.log(tudos);
            for (var i = 0; i < (tr1.length); i++) {
                document.getElementById("myTable2").deleteRow(i);
                myTable2.style.display = "none";

            }

            for (var p = 0; p < tudos.length; p++) {
                if (tudos[p].search(term) == -1) {

                }
                else {
                    filter.push(tudos[p]);
                }
            }
            for (var m = 0; m < filter.length; m++) {
                function table2(x) {
                    z = 0;
                    h = 0;
                    var row = myTable2.insertRow(z);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);

                    cell1.innerHTML = "<input type = 'checkbox' id = 'check1' name = 'check1' value='false'>";
                    cell1.onclick = function () { checktask(cell1) };

                    function checktask(cell1) {
                        cell1.childNodes[0].value = ~(cell1.childNodes[0].value);
                        //console.log(cell1.childNodes[0].value);
                        if (cell1.childNodes[0].value == -1) {
                            y--;
                            hides.push(cell2.innerHTML);
                            if (finish.includes(cell2.innerHTML) == true) {
                                const index1 = finish.indexOf(cell2.innerHTML);
                                if (index1 > -1) {
                                    finish.splice(index1, 1);
                                }

                            }

                            document.getElementById("Result").innerHTML = "You Have " + y + " Todos Left";



                        }
                        else {
                            const index = hides.indexOf(cell2.innerHTML);
                            if (index > -1) {
                                hides.splice(index, 1);
                            }


                            y++;

                            document.getElementById("Result").innerHTML = "You Have " + y + " Todos Left";

                        }
                    }

                    cell2.innerHTML = x;
                    cell3.innerHTML = "<button type = 'button' class = 'jsbtn'>remove</button>";
                    cell3.onclick = function () { removeTask(cell2) };

                    z++;
                    document.forms["todoform"]["inserttudo"].value = "";

                    function removeTask(cell3) {
                        tudos.splice(z - 1, 1);
                        //console.log(tudos);
                        y--;
                        document.getElementById("Result").innerHTML = "You Have " + y + " Todos Left";
                        var div = cell3.parentElement;
                        div.style.display = "none";
                    }

                }
                table2(filter[m]);
                myTable2.style.display = "block";
            }


        }

        else {
            console.log(tudos);
            //console.log(tudos.length);
            for (var s = 0; s < tudos.length; s++) {
                function table(x) {
                    z = 0;
                    h = 0;
                    var row = myTable.insertRow(z);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);

                    cell1.innerHTML = "<input type = 'checkbox' id = 'check1' name = 'check1' value='false'>";
                    cell1.onclick = function () { checktask(cell1) };

                    function checktask(cell1) {
                        cell1.childNodes[0].value = ~(cell1.childNodes[0].value);
                        //console.log(cell1.childNodes[0].value);
                        if (cell1.childNodes[0].value == -1) {
                            y--;
                            hides.push(cell2.innerHTML);
                            if (finish.includes(cell2.innerHTML) == true) {
                                const index1 = finish.indexOf(cell2.innerHTML);
                                if (index1 > -1) {
                                    finish.splice(index1, 1);
                                }

                            }

                            document.getElementById("Result").innerHTML = "You Have " + y + " Todos Left";



                        }
                        else {
                            const index = hides.indexOf(cell2.innerHTML);
                            if (index > -1) {
                                hides.splice(index, 1);
                            }


                            y++;

                            document.getElementById("Result").innerHTML = "You Have " + y + " Todos Left";

                        }
                    }

                    cell2.innerHTML = x;
                    cell3.innerHTML = "<button type = 'button' class = 'jsbtn'>remove</button>";
                    cell3.onclick = function () { removeTask(cell2) };

                    z++;
                    document.forms["todoform"]["inserttudo"].value = "";

                    /*function removeTask(cell3) {
                        tudos.splice(z - 1, 1);
                        //console.log(tudos);
                        y--;
                        document.getElementById("Result").innerHTML = "You Have " + y + " Todos Left";
                        var div = cell3.parentElement;
                        div.style.display = "none";
                    }*/

                    function removeTask(cell3) {
                        var r = confirm("Are you sure You want to delete the Record");
                        if (r == true) {
                            tudos.splice(z - 1, 1);
                            y--;
                            document.getElementById("Result").innerHTML = "You Have " + y + " Todos Left";
                            var div = cell3.parentElement;
                            div.style.display = "none";
                        }
                        else {
                            document.getElementById("message").innerHTML = "Your Record was not deleted";
                        }
                    }


                }

                table(tudos[s]);
                myTable.style.display = "block";
                document.getElementById("Result").innerHTML = "You Have " + (tudos.length) + " Todos Left";

            }
        }

    }

});



function check() {
    var check2 = document.getElementById("hidecheckbox");
    if (check2.value == -1) {

        if (m == 0) {
            myTable.style.display = "block";
        }
        myTable1.style.display = "none";
        myTable.style.display = "block";

        let table1 = document.getElementById("myTable1");
        let tr1 = table1.getElementsByTagName("tr");
        console.log(tr1.length);

        for (var i = 0; i < (tr1.length); i++) {
            document.getElementById("myTable1").deleteRow(i);
            myTable1.style.display = "none";
        }


    }


    else {

        if (m == 1) {
            myTable.style.display = "none";
            myTable1.style.display = "none";
        }
        let table1 = document.getElementById("myTable1");
        let tr1 = table1.getElementsByTagName("tr");

        for (var i = 0; i < (tr1.length); i++) {
            document.getElementById("myTable1").deleteRow(i);
            myTable1.style.display = "none";
        }

        for (var i = 0; i < tudos.length; i++) {
            if (hides.includes(tudos[i]) == false && finish.includes(tudos[i]) == false) {
                finish.push(tudos[i]);
            }
        }

        if (finish.length == 0) {
            myTable.style.display = "none";
            myTable1.style.display = "none";
        }

        for (var i = 0; i < finish.length; i++) {
            myTable.style.display = "none";

            myTable1.style.display = "block";

            table1(finish[i]);

            function table1(x) {
                z = 0;
                h = 0;
                var row = myTable1.insertRow(z);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);

                cell1.innerHTML = "<input type = 'checkbox' id = 'check1' name = 'check1' value='false'>";
                /*cell1.onclick = function () { checktask(cell1) };

                function checktask(cell1) {
                    cell1.childNodes[0].value = ~(cell1.childNodes[0].value);
                    //console.log(cell1.childNodes[0].value);
                    if (cell1.childNodes[0].value == -1) {
                        y--;
                        if ((cell2.innerHTML).search(hides) == -1) {

                            hides.push(cell2.innerHTML);
                            const index = finish.indexOf(cell2.innerHTML);
                            if (index > -1) {
                                finish.splice(index, 1);
                            }

                        }
                        document.getElementById("Result").innerHTML = "You Have " + y + " Todos Left";

                    }
                    else {
                        const index = hides.indexOf(cell2.innerHTML);
                        if (index > -1) {
                            hides.splice(index, 1);
                        }
                        if (finish.includes(cell2.innerHTML) == false) {
                            finish.push(cell2.innerHTML);
                        }
                        y++;

                        document.getElementById("Result").innerHTML = "You Have " + y + " Todos Left";

                    }
                }*/

                cell2.innerHTML = x;
                cell3.innerHTML = "<button type = 'button' class = 'jsbtn'>remove</button>";
                cell3.onclick = function () { removeTask(cell2) };

                z++;
                document.forms["todoform"]["inserttudo"].value = "";

                function removeTask(cell3) {
                    var r = confirm("Are you sure You want to delete the Record");
                    if (r == true) {
                        tudos.splice(z - 1, 1);
                        y--;
                        document.getElementById("Result").innerHTML = "You Have " + y + " Todos Left";
                        var div = cell3.parentElement;
                        div.style.display = "none";
                    }
                    else {
                        document.getElementById("message").innerHTML = "Your Record was not deleted";
                    }
                }

            }

        }


    }
    check2.value = ~(check2.value);
}



function insertvalues() {
    if (m == 0 || m == 1) {
        myTable.style.display = "block";
    }

    var x = document.forms["todoform"]["inserttudo"].value;
    x = x.trim();
    if (x == "") {
        document.forms["todoform"]["inserttudo"].value = "";
        alert("Please Insert a  todo");
    }

    else {
        var d = new Date();
        var txt;

        if (y == 0) {
            tudos[y] = x;
            table(x);
            display(tudos);
            txt = tudos[y] + " was inserted at " + d;
            document.getElementById("first").innerHTML += txt + "<br>";

        }

        if (y > 0) {
            var t = x;
            t = t.toLowerCase();

            var k = x;
            k = k.toUpperCase();

            var n = tudos.includes(t);
            var z = tudos.includes(k);
            if (n == true || z == true) {
                alert("Duplicate values are not allowed");
                document.forms["todoform"]["inserttudo"].value = "";
                y--;
            }
            else {
                tudos[y] = x;
                console.log(tudos);
                txt = tudos[y] + " was inserted at " + d;
                document.getElementById("first").innerHTML += txt + "<br>";
                table(x);
                display(tudos);

            }
        }
        y++;

        function table(x) {

            z = 0;
            h = 0;
            /*var d = new Date();
            var txt;
            txt = x + " was inserted at " + d;*/
            var row = myTable.insertRow(z);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            // var cell4 = row.insertCell(3);

            cell1.innerHTML = "<input type = 'checkbox' id = 'check1' name = 'check1' value='false'>";
            cell1.onclick = function () { checktask(cell1) };

            function checktask(cell1) {

                cell1.childNodes[0].value = ~(cell1.childNodes[0].value);
                //console.log(cell1.childNodes[0].value);
                if (cell1.childNodes[0].value == -1) {
                    y--;
                    hides.push(cell2.innerHTML);
                    if (finish.includes(cell2.innerHTML) == true) {
                        var index = finish.indexOf(cell2.innerHTML);
                        if (index > -1) {
                            finish.splice(index, 1);
                        }
                    }
                    document.getElementById("Result").innerHTML = "You Have " + y + " Todos Left";
                }
                else {
                    var select = document.getElementById("selectcheckbox");
                    if (select.value == -1) {
                        select.value = 0;
                    }
                    const index = hides.indexOf(cell2.innerHTML);
                    if (index > -1) {
                        hides.splice(index, 1);
                    }
                    y++;
                    document.getElementById("Result").innerHTML = "You Have " + y + " Todos Left";

                }
            }

            cell2.innerHTML = x;
            cell3.innerHTML = "<button type = 'button' class = 'jsbtn'>remove</button>";
            //cell4.innerHTML = txt;


            cell3.onclick = function () { removeTask(cell2) };

            z++;
            document.forms["todoform"]["inserttudo"].value = "";

            /*function removeTask(cell3) {
                var r = confirm("Are you sure You want to delete the Record");
                if (r == true) {
                    tudos.splice(z - 1, 1);
                    y--;
                    document.getElementById("Result").innerHTML = "You Have " + y + " Todos Left";
                    var div = cell3.parentElement;
                    div.style.display = "none";
                }
                else {
                    document.getElementById("message").innerHTML = "Your Record was not deleted";
                }
            }*/

            removeTask = (cell3) => {
                var r = confirm("Are you sure You want to delete the Record");
                if (r == true) {
                    tudos.splice(z - 1, 1);
                    y--;
                    document.getElementById("Result").innerHTML = "You Have " + y + " Todos Left";
                    var div = cell3.parentElement;
                    div.style.display = "none";
                }
                else {
                    document.getElementById("message").innerHTML = "Your Record was not deleted";
                }
            }

        }

    }
}

/*function display(array) {
    let e = "<hr/>";
    for (let y = 0; y < array.length; y++) {
        e += `Element ${y} = ${array[y]}<br/>`;
    }
    document.getElementById("Result").innerHTML = "You Have " + (y + 1) + " Todos Left";

}*/

display = (array) => {
    let e = "<hr/>";
    for (let y = 0; y < array.length; y++) {
        e += `Element ${y} = ${array[y]}<br/>`;
    }
    document.getElementById("Result").innerHTML = "You Have " + (y + 1) + " Todos Left";

}

function table(x) {
    z = 0;
    h = 0;
    /*var d = new Date();
    var txt;
    txt = x + " was inserted at " + d;*/

    var row = myTable.insertRow(z);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    //var cell4 = row.insertCell(3);

    cell1.innerHTML = "<input type = 'checkbox' id = 'check1' name = 'check1' value='false'>";
    cell1.onclick = function () { checktask(cell1) };

    function checktask(cell1) {

        cell1.childNodes[0].value = ~(cell1.childNodes[0].value);
        //console.log(cell1.childNodes[0].value);
        if (cell1.childNodes[0].value == -1) {
            y--;
            hides.push(cell2.innerHTML);
            if (finish.includes(cell2.innerHTML) == true) {
                var index = finish.indexOf(cell2.innerHTML);
                if (index > -1) {
                    finish.splice(index, 1);
                }
            }
            document.getElementById("Result").innerHTML = "You Have " + y + " Todos Left";
        }
        else {

            var select = document.getElementById("selectcheckbox");
            if (select.value == -1) {
                select.value = 0;
            }

            const index = hides.indexOf(cell2.innerHTML);
            if (index > -1) {
                hides.splice(index, 1);
            }
            y++;
            document.getElementById("Result").innerHTML = "You Have " + y + " Todos Left";
        }
    }

    cell2.innerHTML = x;
    cell3.innerHTML = "<button type = 'button' class = 'jsbtn'>remove</button>";
    //cell4.innerHTML = txt;



    cell3.onclick = function () { removeTask(cell2) };

    z++;
    document.forms["todoform"]["inserttudo"].value = "";

    function removeTask(cell3) {
        var r = confirm("Are you sure You want to delete the Record");
        if (r == true) {
            tudos.splice(z - 1, 1);
            y--;
            document.getElementById("Result").innerHTML = "You Have " + y + " Todos Left";
            var div = cell3.parentElement;
            div.style.display = "none";
        }
        else {
            document.getElementById("message").innerHTML = "Your Record was not deleted";
        }
    }
}

/*function selectall() {
    var select = document.getElementById("selectcheckbox");
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    if (select.value != -1) {
        for (i = 0; i < tr.length; i++) {
            tr[i].childNodes[0].childNodes[0].checked = true;
            //hides = tudos;
            m = 1;
            tr[i].childNodes[0].childNodes[0].value = -1;
        }

        document.getElementById("Result").innerHTML = "You Have " + 0 + " Todos Left";
        for (var i = 0; i < tudos.length; i++) {
            hides[i] = tudos[i];
        }
    }
    else {
        for (i = 0; i < tr.length; i++) {
            tr[i].childNodes[0].childNodes[0].checked = false;
            tr[i].childNodes[0].childNodes[0].value = 0;
        }
        document.getElementById("Result").innerHTML = "You Have " + y + " Todos Left";
        while (hides.length > 0) {
            hides.pop();
        }
        m = 0;
    }
    select.value = ~(select.value);
}*/

selectall = () => {
    var select = document.getElementById("selectcheckbox");
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    if (select.value != -1) {
        for (i = 0; i < tr.length; i++) {
            tr[i].childNodes[0].childNodes[0].checked = true;
            //hides = tudos;
            m = 1;
            tr[i].childNodes[0].childNodes[0].value = -1;
        }
        y = 0;
        document.getElementById("Result").innerHTML = "You Have " + y + " Todos Left";
        for (var i = 0; i < tudos.length; i++) {
            hides[i] = tudos[i];
        }

    }
    else {
        for (i = 0; i < tr.length; i++) {
            tr[i].childNodes[0].childNodes[0].checked = false;
            tr[i].childNodes[0].childNodes[0].value = 0;
        }
        y = tr.length;
        document.getElementById("Result").innerHTML = "You Have " + y + " Todos Left";
        while (hides.length > 0) {
            hides.pop();
        }
        m = 0;
    }
    select.value = ~(select.value);
}



function myFunction(event) {
    var x = event.keyCode;
    if (x == 13) {
        //alert("You pressed the Enter key!");
        event.preventDefault();  //it prevents reloading the page
        insertvalues(x);
    }
}














