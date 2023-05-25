let signUpTitle=document.querySelector("#signUp-title")
let loginTitle=document.querySelector("#login-title")
let loginBox=document.querySelector("#loginBox")

loginTitle.addEventListener("click",()=>{
    loginBox.classList.add("showLogin")
    loginBox.classList.add("BRadius60")
    signUpTitle.classList.replace("FS2","FS1")
    loginTitle.classList.replace("FS1","FS2")

})

signUpTitle.addEventListener("click",()=>{
    loginBox.classList.remove("showLogin")
    signUpTitle.classList.replace("FS1","FS2")
    loginTitle.classList.replace("FS2","FS1")
    loginBox.classList.remove("BRadius60")

})

