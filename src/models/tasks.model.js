const { model, Schema } = require('mongoose');

const TaskSchema = new Schema({
    title: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    description: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    isActive: {
        type: Schema.Types.Boolean,
        default: true
    },
    userId: {
        type: Schema.Types.ObjectId, ref: 'Users',
        required: true
    }
}, {versionKey: false});

module.exports = model('Tasks', TaskSchema);