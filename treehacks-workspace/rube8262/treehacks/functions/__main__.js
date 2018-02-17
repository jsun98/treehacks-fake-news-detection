/**
* @param {string} headline
* @param {string} body
* @returns {string}
*/
module.exports = (headline, body, context, callback) => {

  callback(null, `${headline} ////// ${body}`);

};
