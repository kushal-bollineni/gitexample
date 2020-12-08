/*function gethistory() {
    return document.getElementById("history-value").innerText;
}*/

gethistory = () => document.getElementById("history-value").innerText;

function printhistory(num) {
    document.getElementById("history-value").innerText = num;
}

/*function getoutput() {
    return document.getElementById("output-value").innerText;
}*/

getoutput = () => document.getElementById("output-value").innerText;

function printoutput(num) {

    if (num == "") {
        document.getElementById("output-value").innerText = num;
    }

    else {
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }

}
//this function reads the number and returns the comma seperated value
function getFormattedNumber(num) {
    if (num == "-") {
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

//to manipulate the comma seperated value for correct evaluation 

/*function reversenumberformat(num) {
    return Number(num.replace(/,/g, ''));
}*/

reversenumberformat = (num) => Number(num.replace(/,/g, ''));

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function () {
        if (this.id == "clear") { // if its clear make as empty
            printhistory("");
            printoutput("");
        }
        else if (this.id == "backspace") {
            var output = reversenumberformat(getoutput()).toString();  //to string bcoz it shouldnt consider comma
            if (output) {
                output = output.substr(0, output.length - 1);
                printoutput(output);
            }
        }
        else {
            var output = getoutput();
            var history = gethistory();
            if (output == "" && history != "") {  //checks last charcter is an operator
                if (isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1);
                }
            }
            if (output != "" || history != "") {

                output = output == "" ? output : reversenumberformat(output);
                history = history + output;

                if (this.id == "=") {   //for == operator eval occurs
                    var result = eval(history);
                    printoutput(result);
                    printhistory("");
                }
                else {
                    history = history + this.id;   //for other operators operators will get concated 
                    printhistory(history);
                    printoutput("");
                }

            }
        }


    });
}

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function () {
        var output = reversenumberformat(getoutput());
        if (output != NaN) {
            output = output + this.id;   //for concatenation 
            printoutput(output);
        }

    });
}





