// console.log("yes");

// console.log(+2);
// console.log(-45);
// console.log(1 * "88");
// console.log(+true);
// console.log(+false);

// console.log("------------------");

// var myname = 23,
//   lastname = "asdif";

// function sum() {
//   ++myname;
//   console.log(myname);
// }

// switch (lastname) {
//   case "asdif":
//     console.log("its equals");
//     sum();
//     sum();
//     sum(), sum();
//     break;

//   case 24:
//     console.log("its work we add 111111");
// }

// // comments

// document.getElementById("text").innerHTML = "---------------------";

// var listperson = {
//   name: "hamza",
//   age: 24,
//   city: "khenifra",
//   married: ["yes married", "not married"],
// };

// document.getElementById("btn2").onclick = function () {
//   document.getElementById("text").innerHTML = "my age is : " + listperson.age;
// };

// document.getElementById("btn3").onclick = function () {
//   document.getElementById("text").innerHTML =
//     " my city is : " + listperson.city;
// };

// document.getElementById("btn-clear").onclick = function () {
//   document.getElementById("text").innerHTML = "";
// };

// var btn4 = document.getElementById("btn4"),
//   btn3 = document.getElementById("btn3"),
//   btn2 = document.getElementById("btn2"),
//   btn1 = document.getElementById("btn1");

// var btn_object = [btn1, btn2, btn3, btn4];
// var textdiv = document.getElementById("text");

// btn_object[0].onclick = function ts() {
//   console.log("its true");
//   textdiv.innerHTML = "my name is : " + listperson.name;
// };

// var inner_fn = function () {
//   textdiv.innerHTML = "the state is: " + listperson.married[1];
// };

// var clear_fn_4 = function () {
//   textdiv.innerHTML = "";
// };

// var inner_fn_1 = function () {
//   textdiv.innerHTML = "my name is : " + listperson.name;
// };

// function print() {
//   print_output = btn4.onclick = inner_fn;
//   clear_output = btn4.addEventListener("dblclick", clear_fn_4);
// }

// print();

// console.log("its printed");

// var names = ["hamza", "adil", "moshissin", "meryem"];
// for (i = 0; i < 4; ++i) {
//   console.log(names[i]);
// }

// function logbtn4() {
//   console.log("btn4.onlick = true");
// }

// btn4.onclick = logbtn4;

// for (number = "*", i = 0; i <= 10; ++i) {
//   console.log("the number is : ", number, i);
// }

// var x = 0;

// while (x <= 44) {
//   console.log("yes" + x);
//   x++;
// }

// var num1 = 50,
//   num2 = 40;

// function numbers(a, b) {
//   var finalnum = ++a + ++b;
//   var sum_of_numbers = "the sum fo this numbers is : " + finalnum;
//   console.log(sum_of_numbers);
// }
// numbers(10, 20);

// datainput = document.querySelector(".inp");
// btns = document.querySelectorAll(".btn-div button");
// btnsum = document.querySelector(".btn-sum");
// totalprice = 0;

// btns.forEach(function (btn) {
//   btn.onclick = function () {
//     datainput.innerHTML += btn.textContent;

//     if (datainput != "") {
//       btnsum.style.display = "block";

//       function run () {
//         btn_content = btnsum.textContent;
//         price = parseInt(btn.getAttribute('price'));
//         totalprice += price;

//         btnsum.innerHTML = "Your products sum is: " + totalprice;
//       }

//       run();
//     }

//     // function run() {
//     //   price = 0;
//     //   price += parseInt(btn.getAttribute("price"));
//     //   btnsum.innerHTML = price;
//     // }
//   };

//   function run() {
//     price += parseInt(btn.getAttribute("price"));
//     btnsum.innerHTML = price++;

//     console.log("hello");
//   }
// });

// var input = document.querySelector(".inp");
// var btns = document.querySelectorAll(".button");
// var sum_btn = document.querySelector(".btn-sum");
// var add_data = 0;
// var clear = document.querySelector(".clear");
// var btn_content = "your product price is ($) :";

// var show_addtocart = function addtocart() {
//   if (input != "") {
//     sum_btn.style.display = "block";
//     sum_btn.style.visibility = "visible";
//   }
// }

// btns.forEach(function (btn) {
//   btn.onclick = function () {
//     input.innerHTML += (" " + btn.textContent);

//     if (add_data => 0) {
//       sum_btn.style.display = "block";
//       sum_btn.style.visibility = "visible";
//     }

//     var price = parseInt(btn.getAttribute("price"));
//     add_data += price;

//     sum_btn.innerHTML = (btn_content + add_data);
//   };

//   clear.onclick = function() {
//     input.innerHTML = "";
//     sum_btn.innerHTML = btn_content;
//     sum_btn.style.display = "none";
//     add_data = 0;
//   }
// });

// var input = document.querySelector(".inp");
// var buttons = document.querySelectorAll(".button");
// var sum_button = document.querySelector(".btn-sum");
// var data_price = 0;
// var clear = document.querySelector(".clear");

// buttons.forEach(function (btn) {
//   btn.onclick = function () {
//     input.innerHTML += " " + btn.textContent;

//     // show addtocart button
//     if (sum_button != "") {
//       sum_button.style.display = "block";
//       sum_button.style.visibility = "visible";
//     }

//     // function to get the prices
//     var price = parseInt(btn.getAttribute("price"));
//     var symbol = "dh";
//     data_price += price;
//     sum_button.innerHTML =
//       "your product price is ($) :" + data_price + symbol.toUpperCase();

//     // work on the clear button
//     if (sum_button != "") {
//       clear.style.display = "inline-block";
//     }

//     clear.onclick = function () {
//       input.innerHTML = "";
//       data_price = 0;
//       alert_sum = sum_button.innerHTML =
//         "pls select at least one product : ....";
//       alert(alert_sum);
//     };
//   };
// });

var text = "yes its js here";

var result = text.toUpperCase() + text.toLowerCase();
console.log(result);

// if ( username() == "hamza") {
//   console.log(
//     "hello mr : " + username() + " enjoy"
//   )
// }

// array test

var student_names = [
  "saida",
  "mohammed",
  "simo",
  "yassin",
  "maryem",
  "fatim ezzahra",
];

// تحقق من إذا كان عدد الطلاب أقل من 7 وأضف "hamza" إذا لم يكن موجودًا
student = "hamza";

var append_hamza = function () {
  if (!student_names.includes(student)) {
    student_names.unshift(student);
    console.log(student_names);
  }
};

append_hamza();

var arr = "welcome gays to the first episode";
var res = arr.split(" ");
var new_res = student_names.concat(res);

console.log(arr, new_res);
// for ( myname = 0; myname = student_names[length]; ++myname) {
//   if (myname == "hamza") {
//     console.log("its found");
//   }

//   else if ( myname != "hamza") {
//     student_names.push("hamza")
//   }
// }

myobject = [
  {
    id: 23,
    name: "hamza",
    adress: "khenifra",
  },

  {
    id: 55,
    name: "mouad",
    adress: "khenifra",
  },
];

window.ope


object_convert = JSON.

input.innerHTML = object_convert
