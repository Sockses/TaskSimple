const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    'completed': {
        type: Boolean,
        default: false
    },
    'completed_at': Date
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = mongoose.model('Task', taskSchema);
