let correctShow = document.querySelector(".correctShow");
let wrongShow = document.querySelector(".wrongShow");
let rightShow = document.querySelector(".rightShow");
let left = document.querySelector(".left");
console.log(left);

let randomNumbs = generateNumber();
let btn = document.querySelector(".btn");
let correctNumbs = document.querySelectorAll(".correctNumbs");
let correctPoss = document.querySelectorAll(".correctPoss");
let inputNumbsTable = document.querySelectorAll(".inputNumbsTable");

function isDistinctNumber(num) {
  // Chuyển số thành chuỗi và kiểm tra độ dài
  const strNum = num.toString();
  if (strNum.length !== 4) {
    return false;
  }

  // Kiểm tra từng chữ số trong chuỗi
  const numArr = [];
  for (let i = 0; i < strNum.length; i++) {
    const digit = strNum[i];
    if (numArr.includes(digit)) {
      return false;
    }
    numArr.push(digit);
  }

  // Nếu kiểm tra qua tất cả các chữ số mà không thấy chữ số nào bị lặp lại
  // thì đó là số có 4 chữ số khác nhau
  return true;
}
function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function generateNumber() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  shuffle(arr);
  return arr.slice(0, 4).join("");
}

console.log(randomNumbs);

let i = 0;
btn.addEventListener("click", (e) => {
  let inputNumbs = document.querySelector(".inputNumbs").value;
  if (
    !isNaN(inputNumbs) &&
    inputNumbs > 1000 &&
    inputNumbs < 9999 &&
    isDistinctNumber(inputNumbs)
  ) {
    inputNumbsTable[i].innerText = inputNumbs;
    // console.log("inputNumbs " + inputNumbs[1]);
    // console.log("randomNumbs " + randomNumbs.toString()[1]);
    let countCorrectNumbs = 0;
    let countCorrectPoss = 0;
    for (let a = 0; a < 4; a++) {
      for (let b = 0; b < 4; b++) {
        if (inputNumbs[a] === randomNumbs.toString()[b]) {
          countCorrectNumbs++;
          if (a === b) {
            countCorrectPoss++;
          }
        }
      }
    }

    correctNumbs[i].innerText = countCorrectNumbs;
    correctPoss[i].innerText = countCorrectPoss;
    i++;
  } else {
    alert(
      "Please enter a number form 1000 to 9999 and The digits must be different!!!"
    );
  }

  if (randomNumbs === inputNumbs) {
    alert("You win!");
    correctShow.classList.add("show");
    rightShow.classList.add("hide");
  }
  if (i === 10) {
    wrongShow.classList.add("show");
    rightShow.classList.add("hide");
  }

  e.preventDefault();
});

let start = document.querySelector(".start");
let wrapper2 = document.querySelector(".wrapper2");
start.addEventListener("click", (e) => {
  wrapper2.classList.add("hide");
  e.preventDefault();
});
