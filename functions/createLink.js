const axios = require('axios');
require('dotenv').config();
const { CREATE_LINK } = require('./utils/linkQueries');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {
    const {name, url, description} =  JSON.parse(event.body);
    const variables = {name, url, description, archived: false}

    try{
        const {createLink: newLink} = await sendQuery(CREATE_LINK, variables);
        return formattedResponse(200, newLink);
    } catch (err) {
        console.error(err)
        formattedResponse(500, {ERROR: "Can't get there from here"})
    }
}