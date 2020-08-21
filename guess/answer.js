const done = () => {

    let answer = document.querySelector('#text').value;
    if (answer.length != 0) {
        let age = answer % 100;
        let num = (answer - age) / 100;
        console.log(num);
        sessionStorage.setItem("num",num);
       location.href="result.html";
    }
    else {
        alert("Enter your result first")
    }

}

