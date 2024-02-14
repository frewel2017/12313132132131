function generateNumber() {
  const min = 1;
  const max = 100;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  document.getElementById(
    "generatedNumber"
  ).textContent = `Сгенерированное число: ${randomNumber}`;
}
