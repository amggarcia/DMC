import mongoose from 'mongoose';
import { UserInputError } from 'apollo-server-express';

export default {
    Query: {
        activityType: (root, args, context, info) => {
            if (!mongoose.Types.ObjectId.isValid(args.id))
                throw new UserInputError('Invalid ID');
            return context.models.ActivityType.findById(args.id);
        },
        activityTypes: (root, args, context, info) => {
            return context.models.ActivityType.find({});
        },
    },
    Mutation: {
        createActivityType: (root, args, context, info) => {
            //TODO: Make sure only provided are set on the object
            return context.models.ActivityType.create(args)
        }
    },
    ActivityType: {
        activities: async (link, args, context) => {
            return context.models.Activity.find({ 'type': mongoose.Types.ObjectId(link.id) });
        }
    }
}