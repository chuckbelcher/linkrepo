const axios = require('axios');
require('dotenv').config();
const { DELETE_LINK } = require('./utils/linkQueries');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {
    const {id} =  JSON.parse(event.body);
    const variables = {id}

    try{
        const {deleteLink} = await sendQuery(DELETE_LINK, variables);
        return formattedResponse(200, deleteLink);
    } catch (err) {
        console.error(err)
        formattedResponse(500, {ERROR: "Can't get there from here"})
    }
}