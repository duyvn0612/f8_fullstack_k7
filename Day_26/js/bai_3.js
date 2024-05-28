//function push2()
Array.prototype.push2 = function (...arg) {
  for (let i = 0; i < arg.length; i++) {
    this[this.length] = arg[i];
  }
};
