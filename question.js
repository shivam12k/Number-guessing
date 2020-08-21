window.onload = function () {
    show(0);
}

const questions = [
    {
        id: 1,
        question: 'Choose any number between 1-9'
    },
    {
        id: 2,
        question: 'Multiply that number by 2'
    }
    , {
        id: 3,
        question: 'Add 5 to the result'
    },
    {
        id: 4,
        question: 'Multiply the result by 50'
    },
    {
        id: 5,
        question: 'if you already had your birthday in this year, add 1767 if not add 1766'
    },
    {
        id: 6,
        question: 'Now substract the year of your birth from the result'
    },
    {
        id: 7,

    }


]


let question_count = 0;
let next = () => {
    question_count++
    console.log(question_count)
    let text = document.querySelector('.text_node');
    text.innerHTML = questions[question_count].question;

    if (questions[question_count].id === 7) {
        console.log("quit")
        text.innerHTML = ' ';
        location.href='answer.html'
        }
    


}
let show = () => {
    text = document.querySelector('.text_node');

    text.innerHTML = questions[question_count].question;

}

