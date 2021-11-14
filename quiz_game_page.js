player1name = localStorage.getItem("player1")
player2name = localStorage.getItem("player2")
document.getElementById("player1name").innerHTML=player1name+"="
document.getElementById("player2name").innerHTML=player2name+"="
player1score=0
player2score=0
document.getElementById("player1score").innerHTML=player1score
document.getElementById("player2score").innerHTML=player2score
document.getElementById("playerq").innerHTML="questionturn:"+player1name
document.getElementById("playeranswer").innerHTML="answerturn:"+player2name

function send() {
   number1 = document.getElementById("number1_input").value;
   number2 = document.getElementById("number2_input").value;
   actual_answer = parseInt(number1) * parseInt(number2);
   question_number = "<h4>" + number1 + "X" + number2 + "</h4>"
   input_box= "<br>Answer: <input type='text' id='input_check_box'>";
  
   question_number= "<h4>" + number1+" X "+ number2 +"</h4>";
    input_box = "<br>Answer: <input type='text' id='input_check_box'>"; 
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"; 
row = question_number + input_box+check_button; 
document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";

}
questionturn = "player1";
answerturn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer==actual_answer){
        if (answerturn="player1") {
            update_player1_score = player1_score +1;
            document.getElementById("player1score").innerHTML = update_player1_score;
        } else {
            update_player2_score = player2_score +1;
            document.getElementById("player2score").innerHTML = update_player2_score;
    
        }
    }
    if (questionturn="player1") {
        questionturn = "player2";
        document.getElementById("playerquestion").innerHTML = "Question turn - " + player2name;
    } else {
        questionturn = "player1";
        document.getElementById("playerquestion").innerHTML = "Question turn - " + player1name;
     
    }
}