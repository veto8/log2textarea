window.onload = function () {
  const $button1 = document.querySelector("#btn_1");
  const $button2 = document.querySelector("#btn_2");
  const $button3 = document.querySelector("#btn_3");

  $button1.addEventListener("click", () => {
    console.log("button 3 clicked");
  });

  $button2.addEventListener("click", () => {
    console.log("button 2 clicked");
  });

  $button3.addEventListener("click", () => {
    console.log("button 3 clicked");
  });
};
