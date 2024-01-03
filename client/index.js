let btn = document.getElementById("btn"); //抓button
let pId = document.getElementById("paragraph"); //抓想修改颜色的element

btn.addEventListener("click", () => { //让btn被点击的时候发生什么
  pId.style.color = "red";
})

let loginBtn = document.getElementById("login-btn"); //抓button
let accountName = document.getElementById("accountName"); //抓想修改颜色的element
let password = document.getElementById("password"); //抓想修改颜色的element


let document = {
  name: "tom",
  age: "40",

  job: function () {
    return "sold an icecream";
  },
  
  selfIntro: function () {
    return `my name is ${this.name}, i am ${this.age} years old, I sell Ice cream`;
   }
}

loginBtn.addEventListener("click", (e) => { //让btn被点击的时候发生什么
  e.preventDefault();
  let acc = accountName.value;
  window.alert(acc);
})

let tomGameBtn = document.getElementById("tom-game-btn");
tomGameBtn.addEventListener("click", (e) => { //让btn被点击的时候发生什么
  e.preventDefault();
  window.alert(tom.selfIntro());
})



