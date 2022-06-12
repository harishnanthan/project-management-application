const mongoose = require('mongoose')
const Client = require('./Client')

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    stauts: {
        type: String,
        enum: ["NOT STARTED", "IN PROGRESS", "COMPLETED"]
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    }
})

module.exports = mongoose.model('Project', ProjectSchema)