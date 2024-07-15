//all ariables
let loginForm= document.querySelector("#loginForm") 
let loginEmail= document.querySelector("#loginEmail") 
let loginPassword= document.querySelector("#loginPassword") 
let loginAlert= document.querySelector("#loginAlert") 
let loginSuccessAlert= document.querySelector("#loginSuccessAlert") 
let data =[]


if (localStorage.getItem("data")!= null) {
  data=JSON.parse(localStorage.getItem("data"))
}



loginForm.addEventListener("submit" , function(e){
  e.preventDefault()
  login()
 
})

function login(){
  let newUser ={
    email:loginEmail.value ,
    password:loginPassword.value
  }
  if (loginValid(newUser)==true) {
    loginAlert.classList.replace("d-b;ock", "d-none")
    loginSuccessAlert.classList.replace("d-none", "d-block")
    setTimeout(function(){
      window.location.href='../../welcome/welcome.html'
    }, 2000)
  }else{
    loginAlert.classList.replace("d-none", "d-block")
  }
}


function loginValid (newUser){
  for (let i = 0; i < data.length; i++) {
    if (data[i].email.toLowerCase() == newUser.email.toLowerCase()&&
    data[i].password.toLowerCase() == newUser.password.toLowerCase()) {
      localStorage.setItem("name" , data[i].name)
      return true
    }else{
      return false
    }
    
  }
}