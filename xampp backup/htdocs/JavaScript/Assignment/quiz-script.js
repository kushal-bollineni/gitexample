
var currentquestion = 0;
var score = 0;
var q;
var totquestions = questions.length;
var container = document.getElementById("quizcontainer");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nextbutton = document.getElementById("nextbutton");
var resultcont = document.getElementById("result");
var values = [];
var displayvalues = ["IN TIME TEC", "Jaipur", "Bangalore", "New Delhi", "Two", "Java Script"];

function loadquestion(questionIndex) {
    if (questionIndex == 0) {
        prevbutton.style.display = "none";
        finishbutton.style.display = "none";
    }
    if (questionIndex > 0) {
        prevbutton.style.display = "block";
        finishbutton.style.display = "block";
    }
    if (questionIndex == (totquestions - 1)) {
        finishbutton.style.display = "none";
    }
    q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '.' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};

function loadagain() {
    location.reload();
}


function loadprevquestion() {
    var prevqs = currentquestion - 1;
    currentquestion--;
    if (currentquestion == (totquestions - 1)) {
        nextbutton.textContent = "Finish";
    }
    else {
        nextbutton.textContent = "Next";
    }

    document.getElementById(values[prevqs]).checked = true;
    console.log(values);
    loadquestion(prevqs);
};


function finish() {
    container.style.display = "none";
    result.style.display = "block";
    var selectedoption = document.querySelector('input[type=radio]:checked');
    if (!selectedoption) {
        result.textContent = "Your score is " + score + " And Time Took To complete the Quiz was " + `${minutes}minutes:${60 - seconds}seconds`;
        document.getElementById("demo").innerHTML = "No of Attempted questions was " + (currentquestion) + "<br>" + "And Total Questions was " + (totquestions);
    }
    else {
        var answer = selectedoption.value;
        values.push(answer);
        if (questions[currentquestion].answer == answer) {
            score += 10;
            result.textContent = "Your score is " + score + " And Time Took To complete the Quiz was " + `${minutes}minutes:${60 - seconds}seconds`;
            document.getElementById("demo").innerHTML = "No of Attempted questions was " + (currentquestion + 1) + "<br>" + "And Total Questions was " + (totquestions);
        }

        else {
            result.textContent = "Your Score is " + score + " And Time Took To complete the Quiz was " + `${minutes}minutes:${60 - seconds}seconds`;
            document.getElementById("demo").innerHTML = "No of Attempted questions was " + (currentquestion + 1) + "<br>" + "And Total Questions was " + (totquestions);
        }

    }
    loadTableData(displayvalues, values, questions);
    myTable.style.display = "block";
    reload.style.display = "block";
}




function loadnextquestion() {
    if (values.length > currentquestion) {
        currentquestion++;
        document.getElementById(values[currentquestion]).checked = true;
    }
    else {
        var selectedoption = document.querySelector('input[type=radio]:checked');
        if (!selectedoption) {
            alert('Please select your answer');
            return;
        }
        var answer = selectedoption.value;
        values.push(answer);
        if (questions[currentquestion].answer == answer) {
            score += 10;
        }
        selectedoption.checked = false;
        currentquestion++;
    }

    if (currentquestion == (totquestions - 1)) {
        nextbutton.textContent = "Finish";
    }
    else {
        nextbutton.textContent = "Next";
    }

    if (currentquestion < totquestions) {
        loadquestion(currentquestion);
    }
    else {
        container.style.display = "none";
        result.style.display = "block";
        console.log(minutes);
        console.log(seconds);
        result.textContent = "Your score is " + score + " And Time Took To complete the Quiz was " + `${minutes}minutes:${60 - seconds}seconds`;
        document.getElementById("demo").innerHTML = "No of Attempted questions was " + (totquestions) + "<br>" + "And Total Questions was " + (totquestions);
        loadTableData(displayvalues, values, questions);
        myTable.style.display = "block";
        reload.style.display = "block";
    }
}
loadquestion(currentquestion);

