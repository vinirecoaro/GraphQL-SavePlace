import { gql } from "apollo-server";


const typeDefs = gql`
    type Query{
        localizations: [Localization]
        localization(id: String): Localization
    }

    type Mutation {
        addLocalization(localization: addLocalizationInput): Localization!
        updateLocalization(localization: updateLocalizationInput): Localization!
        deleteLocalization(id: String): Boolean
    }

    input addLocalizationInput {
        name: String    
        latitude: String
        longitude: String
        pinColor: String
    }

    input updateLocalizationInput{
        id: String
        name: String    
        latitude: String
        longitude: String
        pinColor: String
    }

    type Localization{
        id: String
        name: String    
        latitude: String
        longitude: String
        pinColor: String
    }
`

export default typeDefs