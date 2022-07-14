const express = require("express");
const machines = express.Router();
const machinesArray = require("../models/machine.model.js");

machines.get("/", (request, response) => {
	response.json(machinesArray);
});

module.exports = machines;
