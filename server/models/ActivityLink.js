import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ActivityLinksSchema = new mongoose.Schema({
    activity: { type: Schema.Types.ObjectId, ref: 'Activity', required: true },
    description: { type: String, required: true },
    link: { type: String, required: true }
});

const ActivityLinks = mongoose.model('ActivityLinks', ActivityLinksSchema);

export default ActivityLinks;