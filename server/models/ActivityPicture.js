import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ActivityPicturesSchema = new mongoose.Schema({
    activity: { type: Schema.Types.ObjectId, ref: 'Activity', required: true },
    //TODO: for now the picture is the fileSystem address for it check if we should save them as blob's (Base64) or use mongo's GRIDFS later
    picture: { type: String, required: true },
    isStarred: { type: Boolean, required: true }
});

const ActivityPictures = mongoose.model('ActivityPictures', ActivityPicturesSchema);

export default ActivityPictures;