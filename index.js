const questions = [{
    'question': "Who is the founder of BonDeV ?",
    'a': "Tom Cruse",
    'b': "Shoaib Akter",
    'c': "Bondon Datta",
    'd': "Robert Jerk",
    'correct': 'c'
},
{
    'question': "When did Bondon got a ipad ?",
    'a': "2017",
    'b': "2021",
    'c': "2018",
    'd': "2020",
    'correct': 'b'
},
{
    'question': "Who is the founder of ChillHub ?",
    'a': "Tom Cruse",
    'b': "Shoaib Akter",
    'c': "Robert Jerk",
    'd': "Bondon Datta",
    'correct': 'd'
}];

const questionName = document.querySelector('.questionName')
const options = document.querySelectorAll('.optionsDec')
const selected = document.querySelectorAll('.optionsD')
const buttons = document.querySelector('.ansSubmitBtn');
const heading = document.getElementById('queHeading');


buttons.addEventListener('click',()=>{
    submitAns();
})



let index = 0;
let totalQuestion = questions.length;
let score =0;

const submitAns = () =>{
    checkAns();
    reset();
    index++;
    loadQuestions();
}

const loadQuestions = () =>{
    if(index == totalQuestion){
        index=0;   
        result();
    }
    heading.innerText = `Question No ${index+1}`
    questionName.innerText = questions[index].question;
    options[0].innerText = questions[index].a;
    options[1].innerText = questions[index].b;
    options[2].innerText = questions[index].c;
    options[3].innerText = questions[index].d;
}
const checkAns =()=>{
    selected.forEach((item)=>{
        if(item.checked){
            if(item.value === questions[index].correct){
                score++;
            }
        }
    })
}

// Resetting radio button
const reset = () => {
    selected.forEach ((selectedOption)=>{
        selectedOption.checked = false;
    })
}

// displaying Results of Quiz
const template = document.querySelector('.questions')
const result= () =>{
    template.innerHTML=` <h2 style="margin-top:2.5rem" > Thanks for playing the Quiz <br><br> Result: ${score} / ${totalQuestion} <br>
    <button style="margin-top:.7rem" class="ansSubmitBtn" onclick="history.go(0)">Play Again</button> </h2> `;

}


loadQuestions();




// const backToHome = () =>{
//     const buttons = document.querySelectorAll('.ansSubmitBtn');

//     buttons.forEach((btns)=>{
//         let value = btns.textContent
//         if(value.toLowerCase() === "Play Again".toLowerCase()){
//             submitAns();
//         }
//     })
// }