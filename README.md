# MIDI Light Control

This project is designed to control lights using MIDI signals. It provides a way to connect MIDI devices to a lighting system and trigger different lighting effects based on the MIDI input. It currently only supports Home Assistant via webhooks.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)

## Installation

To install and run this project, follow these steps:

1. Clone the repository: `git clone https://github.com/jkick/midi-light-control.git`
2. Install the required dependencies: `npm install`
3. Configure the MIDI devices and lighting system (see [Configuration](#configuration) section).
4. Start the application: `npm start`

## Usage

Once the application is running, it will listen for MIDI signals and trigger the corresponding lighting effects. You can connect your MIDI devices and start sending MIDI signals to control the lights.

## Configuration

The configuration for this project can be found in the `config.json` file. It allows you to specify the MIDI input and output devices, as well as define the mapping between MIDI signals and lighting effects.

Here's an example configuration:
