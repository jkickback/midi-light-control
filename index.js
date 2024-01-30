
const easymidi = require('easymidi');
const axios = require("axios");
require('dotenv').config()

// var inputs = easymidi.getInputs();
const inputName = process.env.INPUT_NAME;
const lightOnId = process.env.HA_ON_ID;
const lightOffId = process.env.HA_OFF_ID;
const haUrl = process.env.HA_WEBHOOK_URL;

const note = 25;
let isRecording = false;

var input = new easymidi.Input(inputName);

console.log("Listening to " + inputName);
input.on('noteon', function (msg) {
  if (msg.note == note) {
    console.log("Start")
    isRecording = true;
    printState();
    toggleLight();
  }
});

input.on('noteoff', function (msg) {
  if (msg.note == note) {
    console.log("Stop")
    isRecording = false;
    printState();
    toggleLight();
  }
});

function printState() {
  console.log(isRecording ? "Light on" : "Light off")
}

function toggleLight() {
  const url = haUrl + (isRecording ? lightOnId : lightOffId);
  console.log(url)
  axios.post(url)
    .catch(function (error) {
      console.log(error);
    });
}
