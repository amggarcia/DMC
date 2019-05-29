import { gql } from 'apollo-server-express';

export default gql`
    extend type Query {
        activityLink(id:ID) : ActivityLink
        linksByActivity(activity:ID!): [ActivityLink]
    }

    extend type Mutation{
        createActivityLink(activity: ID!
             description: String!
             link: String!
             ) : ActivityLink!
    }

    type ActivityLink{
        id:ID!
        activity: Activity!
        description: String!
        link: String!
    }
`;