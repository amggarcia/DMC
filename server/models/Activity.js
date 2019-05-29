import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ActivitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: [{ type: Schema.Types.ObjectId, ref: 'ActivityDescription' }],
    activityType: { type: Schema.Types.ObjectId, ref: 'ActivityType' },
    //TODO set the sc..hemaType
    pictures: [{ type: Schema.Types.ObjectId, ref: 'ActivityPictures' }],
    location: { type: String },
    capacity: { type: String },
    links: [{ type: Schema.Types.ObjectId, ref: 'ActivityLinks' }]
});

const Activity = mongoose.model('Activity', ActivitySchema);

export default Activity;