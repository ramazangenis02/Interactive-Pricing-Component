var slider = document.getElementById("slider");

var views = document.getElementById("views");

var price = document.getElementById("price");

var toggle = document.getElementById("checkbox");

const pricingList = {
  1: { views: "10K", price: 8 },
  2: { views: "50K", price: 12 },
  3: { views: "100K", price: 16 },
  4: { views: "500K", price: 24 },
  5: { views: "1M", price: 36 },
};

const discount = 0.75;

const getViews = function () {
  return pricingList[slider.value]["views"];
};

const getPrice = function () {
  if (!toggle.checked) {
    return `$${pricingList[slider.value]["price"]}.00`;
  } else {
    return `$${pricingList[slider.value]["price"] * discount}.00`;
  }
};

const displayViews = function () {
  views.innerText = getViews();
};

const displayPrice = function () {
  price.innerHTML = getPrice();
};

toggle.addEventListener("input", e => {
  displayViews();
  displayPrice();
});

slider.addEventListener("input", e => {
  displayViews();
  displayPrice();
});

window.onload = () => {
  displayViews();
  displayPrice();
};

slider.addEventListener("mousemove", function () {
  var x = ((this.value - this.min) * 100) / (this.max - this.min);
  var color =
    "linear-gradient(90deg, hsl(174, 77%, 80%)" +
    x +
    "%, hsl(224, 65%, 95%)" +
    x +
    "%, hsl(224, 65%, 95%) 100%)";
  slider.style.background = color;
});
