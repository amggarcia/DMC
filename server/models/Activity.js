import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ActivitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    descriptions: [{ type: Schema.Types.ObjectId, ref: 'ActivityDescription' }],
    type: { type: Schema.Types.ObjectId, ref: 'ActivityType' },
    pictures: [{ type: Schema.Types.ObjectId, ref: 'ActivityPictures' }],
    location: { type: String },
    capacity: { type: String },
    links: [{ type: Schema.Types.ObjectId, ref: 'ActivityLinks' }]
});

const Activity = mongoose.model('Activity', ActivitySchema);

export default Activity;