const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });

const registerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    text: {
        type: Number,
        unique: true,
        required: true
    }
});

const chatModel = mongoose.model('chat', registerSchema, 'chat');

module.exports = chatModel
