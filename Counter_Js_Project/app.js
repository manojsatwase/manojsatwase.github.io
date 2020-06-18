(function() {
  const btn = document.querySelector("#btn");
  const btn2 = document.querySelector("#btn2");
  const player1 = document.querySelector(".player1");
  const player2 = document.querySelector(".player2");
  const winMsg = document.querySelector(".win");
  const btn_replay = document.querySelector("#btn-replay");
  const wonImg = document.querySelector(".wonImg");
  const palyer1_Button = document.querySelector("#palyer1_Button");
  const palyer2_Button = document.querySelector("#palyer2_Button");
  let total = [];
  let total2 = [];

  palyer1_Button.addEventListener("click", function() {
    Player1_After_Six_StartGame();
  });
  function Player1_After_Six_StartGame() {
    let num = Math.floor(Math.random() * 6 + 1);
    if (num === 6) {
      btn.classList.remove("hide");
      Player1_Random_Num(num);
      randomRollDice(num);
      document.querySelector("#palyer1_Button").style.display = "none";
    } else {
      palyer1_Button.classList.add("hide");
      palyer2_Button.classList.remove("hide");
      randomRollDice(num);
    }
  }

  palyer2_Button.addEventListener("click", function() {
    Player2_After_Six_StartGame();
  });
  function Player2_After_Six_StartGame() {
    let num = Math.floor(Math.random() * 6 + 1);
    if (num === 6) {
      btn2.classList.remove("hide");
      Player2_Random_Num(num);
      randomRollDice(num);
      document.querySelector("#palyer2_Button").style.display = "none";
    } else {
      palyer1_Button.classList.remove("hide");
      palyer2_Button.classList.add("hide");
      randomRollDice(num);
    }
  }

  btn.addEventListener("click", function() {
    let num = Math.floor(Math.random() * 6 + 1);
    Player1_Random_Num(num);
  });

  // player1_Random_num
  function Player1_Random_Num(num) {
    if (num === 6) {
      total.push(num);
      randomRollDice(num);
    } else {
      btn.classList.add("hide");
      btn2.classList.remove("hide");
      total.push(num);
      randomRollDice(num);
    }
    setTimeout(() => {
      player1.textContent = total.reduce((acc, curr) => {
        return (acc += curr);
      }, 0);
      if (player1.textContent >= 20) {
        player1_Won();
      }
    }, 1000);

    // player1 won logic
  }

  btn2.addEventListener("click", function() {
    let num = Math.floor(Math.random() * 6 + 1);
    Player2_Random_Num(num);
  });
  // player2 random num function
  function Player2_Random_Num(num) {
    if (num === 6) {
      total2.push(num);
      randomRollDice(num);
    } else {
      btn.classList.remove("hide");
      btn2.classList.add("hide");
      total2.push(num);
      randomRollDice(num);
    }
    setTimeout(() => {
      player2.textContent = total2.reduce((acc, curr) => {
        return (acc += curr);
      }, 0);
      if (player2.textContent >= 20) {
        player2_Won();
      }
    }, 1000);

    // player2 won logic
  }

  function randomRollDice(num) {
    const diceRoll = document.querySelector(".diceRoll");
    let img = `<img class="animationEffect" src="./images/img-${num}.png" alt="" />`;

    diceRoll.innerHTML = img;
  }

  // tossPlayer 1 and 2

  //Player 1 Won
  function player1_Won() {
    btn.classList.add("hide");
    btn2.classList.add("hide");
    winMsg.textContent = "!!! player 1 is Wooohhooo,You are a born Winner !!!";
    winMsg.style.fontSize = "1rem";
    btn_replay.style.display = "block";
    document.querySelector(".score_box").style.display = "none";
    document.querySelector(".diceRoll").style.display = "none";
    let winimg = ` <img
        style="width:100%" class='img-fluid'
        src="https://www.workbuster.com/wp-content/uploads/2017/11/fireworks.gif"
        alt=""
      />`;
    wonImg.innerHTML = winimg;
  }
  //Player 2 Won
  function player2_Won() {
    btn.classList.add("hide");
    btn2.classList.add("hide");
    winMsg.textContent = "!!! player 2 is Wooohhooo,You are a born Winner !!!";
    winMsg.style.fontSize = "1rem";
    btn_replay.style.display = "block";
    document.querySelector(".score_box").style.display = "none";
    document.querySelector(".diceRoll").style.display = "none";
    let winimg = ` <img
        style="width:100%" class='img-fluid'
        src="https://www.workbuster.com/wp-content/uploads/2017/11/fireworks.gif"
        alt=""
      />`;
    wonImg.innerHTML = winimg;
  }
})();
