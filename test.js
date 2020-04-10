const result = [];

/* draw function */
const draw = function() {
  if (result.length === 6) {
    return;
  }
  const div = document.createElement("div");
  div.textContent = Math.floor(Math.random() * 49 + 1);

  for (let x = 0; x < result.length; x++) {
    if (result[x] == div.textContent) {
      return draw();
    }
  }
  document.getElementById("container").appendChild(div);
  result.push(div.textContent);
};

const button = document.querySelector(".draw");
button.addEventListener("click", draw);
