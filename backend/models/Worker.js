const mongoose = require('mongoose');

// SCHEMAS
const WorkerSchema = mongoose.Schema({
	name: {
		first: {
			type: String,
			required: true
		},
		middle: String,
		last: {
			type: String,
			required: true
		}
	},
	created: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Worker', WorkerSchema);
