import {GeneralActivity } from '../models/generalActivity'
import mongoose from 'mongoose';
import {UserInputError} from 'apollo-server-express';
export default {
    Query:{
        activity:(root,args,context,info) => {
            if(!mongoose.Types.ObjectId.isValid(args.id))
                throw new UserInputError('Invalid ID');
            return context.models.GeneralActivity.findById(args.id);
        },
        activities:(root,args,context,info) => {
            console.log('heyo');
            return context.models.GeneralActivity.find({})
        }
    },
    Mutation:{
        create:(root,args,context,info) => {
            return context.models.GeneralActivity.create(args)
        }
    }
}