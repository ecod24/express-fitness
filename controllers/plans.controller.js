const express = require("express");
const plans = express.Router();
const plansArray = require("../models/plan.model.js");

plans.get("/plans", (request, response) => {
	response.json(plansArray);
});

module.exports = plans;
