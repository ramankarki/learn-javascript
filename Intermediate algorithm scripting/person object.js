var Person = function (firstAndLastName) {
  let firstName = firstAndLastName.split(" ")[0];
  let lastName = firstAndLastName.split(" ")[1];

  this.getFirstName = function () {
    return firstName;
  };

  this.getLastName = function () {
    return lastName;
  };

  this.getFullName = function () {
    return firstAndLastName;
  };

  this.setFirstName = function (first) {
    firstName = first;
    firstAndLastName = firstName + " " + lastName;
  };

  this.setLastName = function (last) {
    lastName = last;
    firstAndLastName = firstName + " " + lastName;
  };

  this.setFullName = function (firstAndLast) {
    firstAndLastName = firstAndLast;
    firstName = firstAndLastName.split(" ")[0];
    lastName = firstAndLastName.split(" ")[1];
  };
};

var bob = new Person("Bob Ross");
let name = bob.getFullName();
console.log(name);
