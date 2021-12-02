const express = require('express');
const Worker = require('../models/Worker');

const router = express.Router();

// GET ALL WORKERS
router.get('/', async (req, res) => {
	try {
		const workers = await Worker.find();
		res.json(workers);
	} catch (err) {
		res.json({message: err});
	}
})

// GET WORKER BY ID
router.get('/:workerID', async (req, res) => {
	try {
		const workers = await Worker.findById(req.params.workerID);
		res.json(workers);
	} catch (err) {
		res.json({message: err});
	}
})

// GET WORKERS BY NAME
router.get('/:workerName', async (req, res) => {
	try {
		const workers = await Worker.find({name: req.params.workerName});
		res.json(workers);
	} catch (err) {
		res.json({message: err});
	}
})

// ADD WORKER
router.post('/', async (req, res) => {
	let data = req.body;

	worker = new Worker({
		name: data.name,
	});

	try {
		const savedWorker = await worker.save();
		res.json(savedWorker);
	} catch (err) {
		res.json({message: err});
	}
})

// DELETE WORKER BY ID
router.delete('/:workerID', async (req, res) => {
	try {
		const deletedWorker = await Worker.remove(_id, req.params.workerID);
		res.json(deletedWorker);
	} catch (err) {
		res.json({message: err});
	}
})

// UPDATE WORKER BY ID
router.patch('/:workerID', async (req, res) => {
	try {
		const updatedWorker = await Worker.updateOne(
			{_id: req.params.workerID},
			{$set: req.body}
		);
		res.json(updatedWorker);
	} catch (err) {
		res.json({message: err});
	}
});

module.exports = router;
