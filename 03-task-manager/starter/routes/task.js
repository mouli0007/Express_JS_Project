// All routes !

const express = require("express");
const router = express.Router();

// Imports !

const {
  getAllItems,
  createItem,
  deleteTask,
  getTask,
  updateTask,
} = require("../controllers/tasks");

router.route("/").get(getAllItems).post(createItem);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
