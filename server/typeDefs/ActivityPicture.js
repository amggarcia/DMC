import { gql } from 'apollo-server-express';

export default gql`
    extend type Query {
        activityPicture(id:ID) : ActivityPicture
        picturesByActivity(activity:ID!): [ActivityPicture]
    }

    extend type Mutation{
        createActivityPicture(activity: ID!
             picture: String!
             isStarred: Boolean!
             ) : ActivityPicture!
    }

    type ActivityPicture{
        id:ID!
        activity: Activity!
        picture: String!
        isStarred: Boolean!
    }
`;