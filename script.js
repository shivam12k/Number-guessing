
const submitForm = (e) => {
  e.preventDefault();
  let name = document.forms["welcome_form"]["name"].value;
  //store player name
  sessionStorage.setItem("name",name);
  if(name.length!=0){
  location.href="questions.html";
  console.log(name);}
  else{
    alert("Please enter your name")
  }
}