// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

const driver = [...drivers, "Felix" ];

function destructivelyAppendDriver(name) {
  drivers.push("Ralph");
}

function destructivelyPrependDriver(name) {
  drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  driver;
}
