alert("Welcome !!");

const chk = document.getElementById("chk");
console.log(chk);

const life = document.getElementById("life_count");

liv = 10;
// const liv = document.getElementById("life_count").value;
// console.log(liv);

const msg = document.getElementById("msg");
console.log(msg);

chk.onclick = function fun(){
let ui = document.getElementById("no").value;
console.log(ui);
if(ui!=guess){
    msg.innerHTML = "Wrong";
    liv--;
    life.innerHTML = liv;
}else{
    msg.innerHTML = "Right";
    alert("Won");
}

if(liv==0){
    alert("Lost");
}
}

var guess = Math.round(Math.random()*100);
console.log(guess);


