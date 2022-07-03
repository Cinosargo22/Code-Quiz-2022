var questions = [
    //Put questions and answers here.
    //HTML, CSS And JavaScript Quiz: 
//1. Who is making the web standards?
//A. Mozilla B. Microsoft C. The World Wide Web Consortium
// 2. What is the correct HTML for creating a hyperlink?
//A. Itonlineclub.tk B. Itonlineclub.tk C. Itonlineclub.tk D. Http://itonlineclub.tk
//3. What does HTML stands for?
// A. Hyperlinks and Text Markup Language B. Hyper Text Markup Language C. Home Tool Markup Language
//4. How can you create an e-mail link?  
//A. Cas B. Csa C. Xxx@yyy D. Cas
// 5. How can you open a link in a new browser window
// A. _blank B. Target C. Same D. Open

];
var score = 0;
var timeEl = document.querySelector('#timer');

for(var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
score++;
alert("Correct");
else{
    alert("Wrong");
}
    }
