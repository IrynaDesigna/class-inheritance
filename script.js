'use strict';

// base Class
function Builder(el) {
    this.el = el;
    this.get = function() {
      return this.el;
    }
}
// ES6 class IntBuilder:
class IntBuider extends Builder {
  constructor (int) {
    if (Number.isInteger(int)) super(int)
    else super(0);
  }

  plus(...n) {
    if (this.el !== 0) {
      n.unshift(this.el);
    } else { n.unshift(this.el); }
    if (n.length) n = n.reduce((nums, current) => nums + current);
    this.el = n
    return this;
  }

  minus(...n) {
    if (this.el !== 0) {
      n.unshift(this.el);
    } else { n.unshift(this.el); }
    if (n.length) n = n.reduce((nums, current) => nums - current);
    this.el = n
    return this;
  }

  multiply(n) {
    this.el = this.el * n
    return this;
  }

  divide(n) {
    this.el = this.el / n
    return this;
  }

  mod(n) {
    this.el = this.el % n
    return this;
  }

  static random(from, to) {
    from = Math.ceil(from);
    to = Math.floor(to);
    return this.int = Math.floor(Math.random() * (to - from) + from);
  }

}



let num = new IntBuider(10);
num
  .plus(2,3,2)
  .minus(1,2)
  .multiply(2)
  .divide(4)
  .mod(3);

console.log(num.get());
console.log(IntBuider.random(10,100));


// ES5 class StringBuilder

function StringBuilder(str) {
  if (typeof str === 'string') Builder.call(this,str)
  else Builder.call(this,'');
}


StringBuilder.prototype.plus = function(...str) {
  this.el = this.el + " " + str.join(" ");
  return this
}

StringBuilder.prototype.minus = function(n) {
  this.el = this.el.slice(0,-n-1);
  return this
}

StringBuilder.prototype.multiply = function(int) {
  this.el = this.el.repeat(int);
  return this
}

StringBuilder.prototype.divide = function(n) {
  this.el = this.el.slice(0,this.el.length/n);
  return this
}

StringBuilder.prototype.remove = function(str) {
    while (this.el.includes(str)) {
      this.el = (this.el.substring(0,this.el.indexOf(str)) + this.el.substring(this.el.indexOf(str) + str.length));
    }
  return this
}

StringBuilder.prototype.sub = function(from,n) {
    this.el = this.el.substring(from,n+1);
  return this
}

StringBuilder.prototype.get = function(from,n) {
  return this
}


let strBuilder = new StringBuilder('Hello');

strBuilder.plus('all','!')
  .minus(4)
  .multiply(3)
  .divide(4)
  .remove('l')
  .sub(1,1)
  .get();

console.log(strBuilder.get());
