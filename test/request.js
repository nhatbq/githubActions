const axios = require('axios');

module.exports = {
    request: () => {
        return axios.post('https://n46ugv8pe2.execute-api.ap-northeast-1.amazonaws.com/testAPI')
    }
}