import { gql } from 'apollo-server-express';

export default gql`
    extend type Query {
        activityDescription(id:ID) : ActivityDescription
        descriptionsByActivity(activity:ID!): [ActivityDescription]
    }

    extend type Mutation{
        createActivityDescription(activity: ID!
             language: String!
             description: String!
             ) : ActivityDescription!
    }

    type ActivityDescription{
        id:ID!
        activity: Activity!
        language: String!
        description: String!
    }
`;