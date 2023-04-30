// Controller funcitons !

// Using our mongoose model here !

const Task = require("../models/Task");

// Getting all Items !

const getAllItems = async (req, res) => {
  try {
    const tasks = await Task.find({});
    return res.status(200).json({ tasks });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

// Creating a single Item

const createItem = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    return res.status(201).json(task);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

// Getting a single Item !

const getTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const tasks = await Task.findOne({ _id: taskId });

    if (!tasks) {
      return res.status(404).json({ msg: "There is no task with " + taskId });
    }
    return res.status(200).json({ tasks });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const data = req.body;
    const task = await Task.findOneAndUpdate({ _id: taskID }, data, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.stats(404).json({ msg: `No Task found with ${taskID}` });
    }
    res.status(200).json({ task });
    return;
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err.message });
    return;
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `there is no id : ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: err.message });
  }
};

module.exports = { getAllItems, createItem, updateTask, getTask, deleteTask };
