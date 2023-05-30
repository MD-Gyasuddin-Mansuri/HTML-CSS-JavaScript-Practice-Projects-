const getColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  navigator.clipboard.writeText("#" + randomColor);
  return "#" + randomColor;
  //console.log("#" + randomColor);
};

document.getElementById("btn").addEventListener("click", () => {
  document.body.style.backgroundColor = getColor();
  document.getElementById("color-code").innerHTML = getColor();
});

getColor();
