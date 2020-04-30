function myModule() {
  this.hello = function () {
    return "Hello";
  };
  this.goodbye = function () {
    return "Goodbye";
  };
}

module.exports = myModule;
