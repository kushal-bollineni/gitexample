var startingminutes = 1;
var time = startingminutes * 60;
var minutes, seconds;
const countdownEl = document.getElementById("countdown");
myvar = setInterval(updatecountdown, 1000);
function updatecountdown() {

    minutes = Math.floor(time / 60);
    seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownEl.innerHTML = "Time Left : " + `${minutes}:${seconds}`;

    time--;
    if (seconds == '0-1' && minutes == "-1") {
        clearInterval("myvar");
        var seconds1 = "00";
        container.style.display = "none";
        result.style.display = "block";
        result.textContent = "Your score is " + score + " And Time Took To complete the Quiz was " + `${startingminutes}minutes:${seconds1}seconds`;
        document.getElementById("demo").innerHTML = "No of Attempted questions was " + (currentquestion) + "<br>" + "And Total Questions was " + (totquestions);
        loadTableData(displayvalues, values, questions);
        myTable.style.display = "block";
        reload.style.display = "block";

    }

}

