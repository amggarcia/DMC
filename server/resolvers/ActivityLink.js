import mongoose from 'mongoose';
import { UserInputError } from 'apollo-server-express';

export default {
    Query: {
        activityLink: (root, args, context, info) => {
            if (!mongoose.Types.ObjectId.isValid(args.id))
                throw new UserInputError('Invalid ID');
            return context.models.ActivityLink.findById(args.id);
        },
        linksByActivity: (root, args, contex, info) => {
            return contex.models.ActivityLink.find({ 'activity': args.activity });
        }
    },
    Mutation: {
        createActivityLink: async (root, args, context, info) => {
            var createdLink = context.models.ActivityLink.create(args);
            var activity = await context.models.Activity.findById(args.activity).exec();
            createdLink = await createdLink;
            activity.links.push(createdLink.id);
            activity.save();
            return createdLink;
        }
    },
    ActivityLink: {
        activity: async (link, args, context) => {
            return await context.models.Activity.findById(link.activity);
        }
    }
}