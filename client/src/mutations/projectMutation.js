const { gql } = require("@apollo/client");

const DELETE_PROJECT = gql`
    mutation removeProject( $id: ID! ){
        removeProject( id: $id ){
            id
            name
            description
            status
        }
    }
`

const ADD_PROJECT = gql`
    mutation addProject($name: String!, $description: String!, $status: ProjectStatus!, $clientId: ID!){
        addProject(name: $name,description: $description, status: $status,clientId: $clientId){
             id
             name
             description
             status
             client{
                 name
                 email
                 phone
                 id
             }
        } 
    }`

export { DELETE_PROJECT, ADD_PROJECT }