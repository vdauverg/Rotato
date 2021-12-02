const mongoose = require('mongoose');

// SCHEMAS
const TaskSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	trained: {
		type: [String]
	},
	created: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Task', TaskSchema);