import { gql } from 'apollo-server-express';

export default gql`
    extend type Query {
        activityType(id:ID) : ActivityType
    }

    extend type Mutation{
        createActivityType(type:String!):ActivityType
    }

    type ActivityType{
        id:ID!
        type:String!
    }
`;