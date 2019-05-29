import Activity from './Activity';
import ActivityDescription from './ActivityDescription';
import ActivityType from './ActivityType';
import ActivityPicture from './ActivityPicture';
import ActivityLink from './ActivityLink';

import { gql } from 'apollo-server-express';
const root = gql`
    type Query{
        _: String
    }

    type Mutation {
        _:String
    }

    type Subscription{
        _:String
    }
`;

export default [root, Activity, ActivityDescription, ActivityType, ActivityPicture, ActivityLink]