
const easymidi = require('easymidi');
const http = require("http");
const axios = require("axios");


// var inputs = easymidi.getInputs();
const inputName = 'IAC Driver Bus 1';
const note = 25;
let lightOn = false;
const lightOnId = '-RrZ9uvzp9V_XirZum3y_MAlp';
const lightOffId = '-ielOm0Gg1gKc6lCRUTyU7669';
const haUrl = 'http://192.168.5.39:8123/api/webhook/'

var input = new easymidi.Input(inputName);
console.log("Listening to " + inputName);
input.on('noteon', function (msg) {
  if (msg.note == note) {
    console.log("Start recording")
    lightOn = true;
    printState();
    toggleLight();
  }
});

input.on('noteoff', function (msg) {
  if (msg.note == note) {
    console.log("Stop recording")
    lightOn = false;
    printState();
    toggleLight();
  }
});

function printState() {
  console.log(lightOn ? "Light on" : "Light off")
}

function toggleLight() {
  const url = haUrl + (lightOn ? lightOnId : lightOffId);
  console.log(url)
  axios.post(url)
    .catch(function (error) {
      console.log(error);
    });
}
