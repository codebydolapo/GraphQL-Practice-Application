const graphql = require('graphql')
const _ = require('lodash')

const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql

//DUMMY DATA
var books = [
    {name: 'Name of The Wind', genre: 'fantasy', id:'1'},
    {name: 'The Final Empire', genre: 'fantasy', id:'2'},
    {name: 'The Long Earth', genre: 'Sci-Fi', id:'3'}
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields:()=>({
        name: {type: GraphQLString},
        id: {type: GraphQLString},
        genre: {type: GraphQLString},
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        book:{
            type: BookType,
            args:{id: {type: GraphQLString}},
            resolve(parent, args){
                return _.find(books, {id:args.id})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})