function Counter(element, value) {
  console.log(element, value);
  this.counter = element;
  this.resetValue = value;
  this.value = value;
  // updates value in the DOM
  this.valueDOM = element.querySelector(".value");
  this.valueDOM.textContent = value;
  // selects btns
  this.increaseBtn = element.querySelector(".increase");

  this.resetBtn = element.querySelector(".reset");
  this.decreaseBtn = element.querySelector(".decrease");
  // points 'this' to the element, instead of the button when we apply the event listener
  this.increase = this.increase.bind(this);
  this.reset = this.reset.bind(this);
  this.decrease = this.decrease.bind(this);
  // adds eventListeners
  this.increaseBtn.addEventListener("click", this.increase);
  this.resetBtn.addEventListener("click", this.reset);
  this.decreaseBtn.addEventListener("click", this.decrease);
}
Counter.prototype.increase = function () {
  this.value++;
  this.valueDOM.textContent = this.value;
};
Counter.prototype.decrease = function () {
  this.value--;
  this.valueDOM.textContent = this.value;
};
Counter.prototype.reset = function () {
  this.value = this.resetValue;
  this.valueDOM.textContent = this.resetValue;
};

function getElement(name) {
  const element = document.querySelector(name);

  if (element) {
    return element;
  }
  throw new Error(`selector "${name}" does not exist`);
}

const counterOne = new Counter(getElement(".counter-1"), 100);
const counterTwo = new Counter(getElement(".counter-2"), 1500);
