// all variables 
let registerForm = document.querySelector("#registerForm")
let signName = document.querySelector("#signName")
let signEmail = document.querySelector("#signEmail")
let signPassword = document.querySelector("#signPassword")
//alerts
let nameAlert = document.querySelector("#nameAlert")
let emailAlert = document.querySelector("#emailAlert")
let existAlert = document.querySelector("#existAlert")
let successAlert = document.querySelector("#successAlert")
let passwordAlert = document.querySelector("#passwordAlert")
// all variables
let data = []
if (localStorage.getItem("data")!= null) {
  data=JSON.parse(localStorage.getItem("data"))
}




registerForm.addEventListener("submit" , function(e){
  e.preventDefault()
  if (checkValidation()==true) {
    addUser()
  }
})




function addUser() {
  let newUser={
    name:signName.value,
    email:signEmail.value,
    password:signPassword.value,
  }
  if (iExists(newUser) == true) {
    existAlert.classList.replace("d-none" , "d-block")
    successAlert.classList.replace("d-block" , "d-none")
  }else{
    existAlert.classList.replace("d-block" , "d-none")
    data.push(newUser)
    localStorage.setItem("data" , JSON.stringify(data))
    setTimeout(function(){
      window.location.href='../../sign In/login.html'
    }, 2000)
    clear ()
  }
}


function iExists (newUser){
  for (let i = 0; i < data.length; i++) {
    if (data[i].email.toLowerCase() == newUser.email.toLowerCase()) {
      return true
    }
  }
}


function clear (){
  signName.value= ""
  email:signEmail.value=""
  signPassword.value=""
  successAlert.classList.replace("d-none" , "d-block")
}



// validation
function validation(regex , element , mes){
  let param = regex ;
  if (param.test(element.value) == true) {
    mes.classList.replace("d-block" , "d-none")
    return true
  }else{
    mes.classList.replace("d-none" , "d-block")
    return false
  }
}

function checkValidation(){
  if (validation(/^[a-zA-Z]{2,}$/ , signName , nameAlert )==true&& 
      validation(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/ , signEmail ,emailAlert )==true&&
      validation(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.{8,}).*$/, signPassword , passwordAlert)==true ) {
    return true
  }else{
    return false
  }
}