const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

// GET ALL TASKS
router.get('/', async (req, res) => {
	try {
		const tasks = await Task.find();
		res.json(tasks);
	} catch (err) {
		res.json({message: err});
	}
});

// GET TASKS BY ID
router.get('/:taskID', async (req, res) => {
	try {
		const task = await Task.findByID(req.params.taskID);
		res.json(task);
	} catch (err) {
		res.json({message: err});
	}
});

// ADD TASKS
router.get('/', async (req, res) => {
	const task = new Task({
		name: req.body
	});

	try {
		const savedTask = await task.save();
		res.json({savedTask});
	} catch (err) {
		res.json({message: err});
	}
});

module.exports = router;
