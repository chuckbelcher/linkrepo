const axios = require('axios');
require('dotenv').config();
const { UPDATE_LINK } = require('./utils/linkQueries');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {
    const {_id: id, name, url, description, archived} =  JSON.parse(event.body);
    const variables = {id, name, url, description, archived}

    try{
        const {updateLink} = await sendQuery(UPDATE_LINK, variables);
        return formattedResponse(200, updateLink);
    } catch (err) {
        console.error(err)
        formattedResponse(500, {ERROR: "Can't get there from here"})
    }
}