import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ActivityTypeSchema = new mongoose.Schema({
    type: { type: String, required: true, unique: true },
});

const ActivityType = mongoose.model('ActivityType', ActivityTypeSchema);

export default ActivityType;