const arrayOfClasses = [
  ".hoursFirstDigit",
  ".hoursSecondDigit",
  ".minutesFirstDigit",
  ".minutesSecondDigit",
  ".secondsFirstDigit",
  ".secondsSecondDigit"
];

/*  100 ms  - pontosabb, de erőforrásigényesebb
    1000 ms - másodperces eltérés lehetséges, de kevesebb erőforrást használ */
setInterval(showTime, 100);

const turnDateToString = (date) => {
  return presentTimeString = date.toLocaleTimeString([],{
    hourCycle: 'h23',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
};

const createSeparateCharacters = (dateAsString) => {
  return arrayOfDigits = [
      dateAsString[0],
      dateAsString[1],
      dateAsString[3],
      dateAsString[4],
      dateAsString[6],
      dateAsString[7]
  ]
};

function showTime() {
  let presentTime = new Date();
  turnDateToString(presentTime)
  createSeparateCharacters(presentTimeString)

  for (let i = 0; i < arrayOfDigits.length; i++) {
    document.querySelector(arrayOfClasses[i]).innerHTML = arrayOfDigits[i];
  }
};

showTime();