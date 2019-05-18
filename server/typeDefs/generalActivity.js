import {gql} from 'apollo-server-express';

export default gql`
    extend type Query {
        activity(id:ID) : GeneralActivity
        activities: [GeneralActivity]
    }

    extend type Mutation{
        create(name: String!, description: String) : GeneralActivity!
    }

    type GeneralActivity{
        id:ID!
        name:String!
        description: String
    }
`;