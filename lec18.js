console.log("Riya");
//onbject literals

const mysym=Symbol("@")
  

const Jsuser= {
    name: "Riya Sharama",
    age:21,
    location:"Delhi",
email:"riyasharma@gmail.com",
isLoggedIn:false,
lastLoginDays: ["Mondays","Saturdays"],
[mysym] :"@",//For symbol we need ton write it in [] square brackets as it will then only  the type will be considered as a  symbol otherwise it wuill give the output type as string.
 email:"riyasharma9434319394@gmail.com",
 
 
}

 

console.log(Jsuser["email"])
console.log(Jsuser[mysym]);
console.log("email");
console.log(Jsuser);
console.log(Jsuser.greeting);

