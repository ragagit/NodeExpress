
var localNumber=localStorage.getItem("prop");
if (localNumber == null) {
    localNumber = 1;
    localStorage.setItem("prop",localNumber);
}

localNumber = parseInt(localNumber)  + 1;

localStorage.setItem("prop",localNumber);
console.log(localStorage.getItem("prop"));
//--------------------

var session = sessionStorage.getItem("prop");
if(session==null){
   session = 1;
   sessionStorage.setItem("prop",session);
}

session = parseInt(session)  + 1;
sessionStorage.setItem("prop",session);
console.log(sessionStorage.getItem("prop"));