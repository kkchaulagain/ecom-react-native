const { constants } = require("../../../constants");

const urilize = (url) => {
    let baseUrl = constants.server.url;
    url = baseUrl +'/'+ url;
    //replace // with /
    url = url.replace(/\/\//g, '/');
    return  {
        uri:url.replace(/\s/g, '%20')
    }
}
module.exports = {
    urilize
}