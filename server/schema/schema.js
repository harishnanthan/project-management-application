const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLInt, GraphQLList, GraphQLNonNull, graphql, GraphQLEnumType } = require("graphql");
const Client = require("../models/Client.js");
const Project = require("../models/Project.js");


const ProjectType = new GraphQLObjectType({
    name: 'Project',
    description: 'This is Todos',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString },
        client: {
            type: ClientType,
            resolve(parent, args) {
                return Client.findById(parent.clientId)
            }
        }
    })
})

const ClientType = new GraphQLObjectType({
    name: 'Client',
    description: "This is Client",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString }
    })
})

const Rootquery = new GraphQLObjectType({
    name: 'root',
    description: 'root type',
    fields: {
        projects: {
            type: new GraphQLList(ProjectType),
            resolve(parent, args) {
                return Project.find()
            }
        },
        project: {
            type: ProjectType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Project.findById(args.id)
            }
        },
        clients: {
            type: new GraphQLList(ClientType),
            resolve(parent, args) {
                return Client.find()
            }
        },
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Client.findById(args.id)
            }
        }
    }
})

// Mutations
const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        // add a client
        addClient: {
            type: ClientType,
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                email: { type: GraphQLNonNull(GraphQLString) },
                phone: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                const client = new Client({
                    name: args.name,
                    email: args.email,
                    phone: args.phone
                })
                return client.save();
            }
        },
        // Remove a client
        removeClient: {
            type: ClientType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                Project.find({ clientId: args.id }).then(projects => {
                    projects.forEach(project => {
                        project.remove()
                    })
                })
                return Client.findByIdAndRemove(args.id)
            }
        },
        // add a project
        addProject: {
            type: ProjectType,
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                description: { type: GraphQLNonNull(GraphQLString) },
                status: {
                    type: new GraphQLEnumType({
                        name: 'ProjectStatus',
                        values: {
                            NOT_STARTED: { value: "NOT STARTED" },
                            IN_PROGRESS: { value: "IN PROGRESS" },
                            COMPLETED: { value: "COMPLETED" }
                        }
                    }),
                    defaultValue: 'not stated'
                },
                clientId: { type: GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                const project = new Project({
                    name: args.name,
                    description: args.description,
                    status: args.status,
                    clientId: args.clientId
                })
                return project.save()
            }
        },
        // remove project
        removeProject: {
            type: ProjectType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                return Project.findByIdAndRemove(args.id)
            }
        },
        // Update a project
        updateProject: {
            type: ProjectType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) },
                name: { type: GraphQLNonNull(GraphQLString) },
                description: {
                    type: GraphQLString
                },
                status: {
                    type: new GraphQLEnumType({
                        name: 'ProjectStatusUpdate',
                        values: {
                            NOT_STARTED: { value: "NOT STARTED" },
                            IN_PROGRESS: { value: "IN PROGRESS" },
                            COMPLETED: { value: "COMPLETED" }
                        }
                    })
                }
            },
            resolve(parent, args) {
                return Project.findByIdAndUpdate(args.id, {
                    $set: {
                        name: args.name,
                        description: args.description,
                        status: args.status
                    }
                }, { new: true })
            }
        }
    })
})

module.exports = new GraphQLSchema({
    query: Rootquery,
    mutation
})