import mongoose from 'mongoose';
import { UserInputError } from 'apollo-server-express';

export default {
    Query: {
        activityDescription: (root, args, context, info) => {
            if (!mongoose.Types.ObjectId.isValid(args.id))
                throw new UserInputError('Invalid ID');
            return context.models.ActivityDescription.findById(args.id);
        },
        descriptionsByActivity: (root, args, contex, info) => {
            return contex.models.ActivityDescription.find({ 'activity': args.activity });
        }
    },
    Mutation: {
        createActivityDescription: async (root, args, context, info) => {

            var description = await context.models.ActivityDescription.create(args);
            var activity = await context.models.Activity.findById(args.activity);
            activity.description.push(description.id);
            activity.save();
            return description;
        }
    },
    ActivityDescription: {
        activity: async (link, args, context) => {
            return await context.models.Activity.findById(link.activity);
        }
    }
}