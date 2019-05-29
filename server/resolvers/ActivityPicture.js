import mongoose from 'mongoose';
import { UserInputError } from 'apollo-server-express';

export default {
    Query: {
        activityPicture: (root, args, context, info) => {
            if (!mongoose.Types.ObjectId.isValid(args.id))
                throw new UserInputError('Invalid ID');
            return context.models.ActivityPicture.findById(args.id);
        },
        picturesByActivity: (root, args, contex, info) => {
            return contex.models.ActivityPicture.find({ 'activity': args.activity });
        }
    },
    Mutation: {
        createActivityPicture: async (root, args, context, info) => {
            //TODO: Make sure only provided are set on the object
            var picture = context.models.ActivityPicture.create(args);
            var activity = await context.models.Activity.findById(args.activity);
            picture = await picture;
            activity.pictures.push(picture.id);
            activity.save();
            return picture;
        }
    },
    ActivityPicture: {
        activity: async (link, args, context) => {
            return await context.models.Activity.findById(link.activity);
        }
    }
}