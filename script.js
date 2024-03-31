let choice = document.querySelectorAll(".img");
let userbtn = document.querySelector(".userb");
let compbtn = document.querySelector(".compb");
let msg = document.querySelector(".msg");
let reset = document.querySelector(".btn");
// reset button
reset.addEventListener("click", (e) => {
  location.reload(true);
});

let userscore = 0;
userbtn.innerText = userscore;
let compscore = 0;
compbtn.innerText = compscore;

// computer choice is made throught Math.random()
let gencompchoice = (comp) => {
  const options = ["rock", "paper", "scissor"];
  const randomnumber = Math.floor(Math.random() * 3); //   math.floor is used to remove numbers after Decimal
  return options[randomnumber];
  // console.log(options);
};
// function for winner
let playgame = (userchoice, comp) => {
  // user choice is called
  // console.log("Selected choice of user =", userchoice);
  //   computer choice is called
  let compchoice = gencompchoice();
  // console.log("Selected choice of comp =", compchoice);

  //   Conditions
  if (userchoice === compchoice) {
    let print_msg = (msg.innerText = "Close one it's a Draw");
    msg.style.backgroundColor = "#190A4C";
    msg.style.color = "#d8fdf8";
    userscore++;
    compscore++;
    userbtn.innerText = userscore;
    compbtn.innerText = compscore;
  } else {
    userwin = true;
    if (userchoice === "rock") {
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compchoice === "scissor" ? false : true;
    } else {
      userwin = compchoice === "rock" ? false : true;
    }
    if (userwin) {
      userscore++;
      userbtn.innerText = userscore;
      msg.style.backgroundColor = "rgb(0,200,0)";
      msg.style.color = "#000000";
      let print_msg =
        (msg.innerText = `Impresive 😗 You won!! Your ${userchoice} beats ${compchoice}`);
    } else {
      compscore++;
      compbtn.innerText = compscore;
      let print_msg =
        (msg.innerText = `Hahaha 😂😂 You loss!! comp ${compchoice} beats your ${userchoice}`);
      msg.style.backgroundColor = "rgb(200,0,0)";
      msg.style.color = "#000000";
    }
  }
  if (userchoice != compchoice) {
    let winner = userwin ? "winner user" : "winner comp";

    // console.log(winner);
  }
};

choice.forEach((choice) => {
  // user choice is made by selecting
  choice.addEventListener("click", () => {
    let userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
