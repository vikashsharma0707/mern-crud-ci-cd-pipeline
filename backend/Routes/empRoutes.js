const express = require("express");

const route = express.Router();

const empController = require("../Controllers/empController");

route.get("/empDisplay",empController.empDisplay);
route.post("/empInsert",empController.empInsert)
route.post("/empSearch",empController.empSearch)
route.post("/empDelete",empController.empDelete)
route.post("/empEdit",empController.empEdit)
route.post("/empUpdate",empController.empUpdate)
route.post("/empView",empController.empView)

module.exports =route;