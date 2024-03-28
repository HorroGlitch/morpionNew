import './style.css'

let squares = document.querySelectorAll(".square");

let currentPlayer = 1;
let count = 0;

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',()=>{

    if (count === 8) {
      setTimeout(() => {
        alert("Fin de partie")
      }, 10);
      
    }

    if (squares[i].textContent === "" && currentPlayer === 1) {

      squares[i].textContent = "x";
      currentPlayer = 2;
      console.log(currentPlayer);
      count++

    } else if(squares[i].textContent === "" && currentPlayer === 2) {

      squares[i].textContent = "o";
      currentPlayer = 1;
      console.log(currentPlayer);
      count++;

    }

  })
  
}