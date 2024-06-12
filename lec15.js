console.log("Riya");
let mycreatedDate = new Date(2025,10,25)
console.log(mycreatedDate.toDateString());
//For (Date,Month,Year)we use DD MM yy for eg.(2023-01-12)Here the month sarts with 1 which is jan and in normal format it starts with o which is jan 
let IndianDate= new Date("01-25-2013")
console.log(IndianDate.toDateString());
let myCreatedDate = new Date(2023,0,23,5,3)
console.log(myCreatedDate.toLocaleString());
//let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//Date.now is used for milisecond
let myTimeStamp=Date.now()
//console.log(myTimeStamp2.getTime());
console.log(Math.floor(Date.now()/1000));

