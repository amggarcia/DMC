import mongoose from 'mongoose';
import { UserInputError } from 'apollo-server-express';

export default {
    Query: {
        activity: (root, args, context, info) => {
            if (!mongoose.Types.ObjectId.isValid(args.id))
                throw new UserInputError('Invalid ID');
            return context.models.Activity.findById(args.id);
        },
        activities: (root, args, context, info) => {
            return context.models.Activity.find({});
        },
        activitiesByType: (root, args, contex, info) => {
            return contex.models.Activity.find({ 'acitivityType': args.acitivityType });
        }
    },
    Mutation: {
        createActivity: (root, args, context, info) => {
            //TODO: Make sure only provided are set on the object
            return context.models.Activity.create(args)
        }
    },
    Activity: {
        descriptions: async (link, args, context) => {
            return context.models.ActivityDescription.find({ _id: { $in: link.descriptions } });
        },
        type: async (link, args, context) => {
            return context.models.ActivityType.findById(link.type);
        },
        pictures: async (link, args, context) => {
            return context.models.ActivityPicture.find({ _id: { $in: link.pictures } });
        },
        links: async (link, args, context) => {
            return context.models.ActivityLink.find({ _id: { $in: link.links } });
        }
    }
}