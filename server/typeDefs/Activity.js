import { gql } from 'apollo-server-express';

export default gql`
    extend type Query {
        activity(id:ID) : Activity
        activities: [Activity]
        activitiesByType(activityType:ID!): [Activity]
    }

    extend type Mutation{
        createActivity(name: String!,
            type: ID!
             description: String
             pictures:[ID]
             location: String
             capacity: String
             links: [ID]
             ) : Activity!
    }

    type Activity{
        id:ID!
        name:String!
        description: ActivityDescription
        type: ActivityType!
        pictures:[ActivityPicture]
        location: String
        capacity: String
        links: [ActivityLink]
    }
`;