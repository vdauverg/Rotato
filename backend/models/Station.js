const mongoose = require('mongoose');

// SCHEMAS
const StationSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	created: {
		type: Date,
		default: Date.now,
	}
});

module.exports = mongoose.model('Station', StationSchema);
