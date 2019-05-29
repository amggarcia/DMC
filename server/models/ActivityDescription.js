import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ActivityDescriptionSchema = new mongoose.Schema({
    activity: { type: Schema.Types.ObjectId, ref: 'Activity', required: true },
    language: { type: String, maxlength: 5, required: true },
    description: { type: String, required: true }
});

const ActivityDescription = mongoose.model('ActivityDescription', ActivityDescriptionSchema);

export default ActivityDescription;