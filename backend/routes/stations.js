const express = require('express');
const Station = require('../models/Station');

const router = express.Router();

// GET ALL STATIONS
router.get('/', async (req, res) => {
	try {
		const stations = await Station.find();
		res.json(stations);
	}  catch (err) {
		res.json({message: err});
	}
});

// ADD STATION
router.post('/', async (req, res) => {
	const station = new Station({
		name: req.body.name
	});

	try {
		const savedStation = await station.save();
		res.json(savedStation);
	} catch (err) {
		res.json({message: err});
	}
});

// GET STATION BY ID
router.get('/:stationID', async (req, res) => {
	try {
		const station = await Station.findById(req.params.stationID);
		res.json(station);
	} catch (err) {
		res.json({message: err});
	}
});

// DELETE STATION BY ID
router.delete('/:stationID', async (req, res) => {
	try {
		const removedStation = await Station.remove({_id: req.params.stationID});
		res.json(removedStation);
	} catch (err) {
		res.json({message: err});
	}
})

// UPDATE STATION BY ID
router.patch('/:stationID', async (req, res) => {
	try {
		const updatedStation = await Station.updateOne(
			{_id: req.params.stationID},
			{$set: {name: req.body.name}}
		 );
		res.json(updatedStation);
	} catch (err) {
		res.json({message: err});
	}
})

module.exports = router;
