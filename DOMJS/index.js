//setup
let del = document.getElementById("del");
let dIv = document.getElementById("child");
let price1 = document.getElementById("p1");
let price2 = document.getElementById("p2");
let price3 = document.getElementById("p3");
let quantity1 = document.getElementById("q1");
let btnDec = document.getElementById("remove");
let btnInr = document.getElementById("add");
let total = document.getElementById("total-price");
let lek = document.getElementById("lek");
let quantity = 0;
let Up1 = document.getElementById("q1");
let Up2 = document.getElementById("q2");
let Up3 = document.getElementById("q3");
let i = 1;
let heart = document.getElementById("#heartS");
let p1 = 1379.0;
let p2 = 176.8;
let p3 = 249.0;
let sub = document.getElementById("sub");
//Functionality
function UpdatedBtn1() {
  if (btnInr.onclick) {
    Up1.setAttribute("value", i++);
    quantity++;
    quantity1.textContent = quantity;
    price1.textContent = p1 + 1379.0;
  } else if (btnDec.onclick) {
    quantity--;
    quantity1.textContent = quantity;
    price1.textContent = p1 - 1379.0;
    Up1.setAttribute("value", i--);
  } else if (i && quantity && quantity1 == 0) {
    ((quantity1 == quantity) == i) == 1;
    quantity1.textContent = i;
    Up1.setAttribute("value", i);
    price1.textContent = (p1 == p1) == 1379.0;
  }
}
function UpdatedBtn2() {
  if (btnInr.onclick) {
    Up2.setAttribute("value", i++);
    quantity1++;
    quantity.textContent = quantity1;
    price2.textContent = p2 + 176.8;
  } else if (btnDec.onclick) {
    quantity1--;
    quantity.textContent = quantity1;
    price2.textContent = p2 - 176.8;
    Up2.setAttribute("value", i--);
  } else if (i && quantity && quantity1 == 0) {
    ((quantity1 == quantity) == i) == 1;
    quantity1.textContent = i;
    Up2.setAttribute("value", i);
    price2.textContent = (p2 == p2) == 176.8;
  }
}

function UpdatedBtn3() {
  if (btnInr.onclick) {
    Up3.setAttribute("value", i++);
    quantity1++;
    quantity.textContent = quantity1;
    price3.textContent = p3 + 249.0;
  } else if (btnDec.onclick) {
    quantity1--;
    quantity.textContent = quantity1;
    price3.textContent = p3 - 249.0;
    Up3.setAttribute("value", i--);
  } else if (i && quantity && quantity1 == 0) {
    ((quantity1 == quantity) == i) == 1;
    Up3.setAttribute("value", i);
    quantity1.textContent = i;
    price3.textContent = (p3 == p3) == 249.0;
  }
}

function Delete() {
  if (del.onclick) {
    dIv.style.display = "none";
  }
}
function Lek() {
  if (lek.onclick) {
    heart.style.backgroundColor = "red";
  } else if (lek.ondblclick) {
    heart.style.backgroundColor = "black";
  } else {
    return "";
  }
}
if (dIv) {
  addEventListener("click", Delete);
}

if (Up1) {
  addEventListener("click", UpdatedBtn1);
}
if (Up2) {
  addEventListener("click", UpdatedBtn2);
}
if (Up3) {
  addEventListener("click", UpdatedBtn3);
}

function PUpdate() {
  let pTotal = p1 + p2 + p3;
  total.setAttribute("value", pTotal);
  total.textContent = pTotal;
}

function Done() {
  if (sub.onclick) {
    window.alert("done");
  }
}
