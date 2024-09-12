var input = document.querySelector(".inp");
var buttons = document.querySelectorAll(".button");
var sum_button = document.querySelector(".btn-sum");
var data_price = 0;
var clear = document.querySelector(".clear");

buttons.forEach(function (btn) {
  btn.onclick = function () {
    input.innerHTML += " " + btn.textContent;

    // show addtocart button
    if (sum_button != "") {
      sum_button.style.display = "block";
      sum_button.style.visibility = "visible";
    }

    // function to get the prices
    var price = parseInt(btn.getAttribute("price"));
    var symbol = "dh";
    data_price += price;
    sum_button.innerHTML =
      "your product price is ($) :" + data_price + symbol.toUpperCase();

    // work on the clear button
    if (sum_button != "") {
      clear.style.display = "inline-block";
    }

    clear.onclick = function () {
      input.innerHTML = "";
      data_price = 0;
      sum_button.innerHTML =
        "pls select at least one product : ....";
    };
  };
});