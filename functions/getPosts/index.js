var AWS = require("aws-sdk");
// import { Buffer } from 'buffer';
var fs = require('fs');

exports.handler = function (event, context, callback) {
    // console.log(JSON.stringify(event));
    const s3 = new AWS.S3();
    
    var params = {
        Bucket: "testencode",
        Key: "test1/test.txt",
        ResponseContentEncoding: 'base64'
        // ContentEncoding: "base64"
        // SSECustomerKey: Buffer.from('base64')
    };

    return s3.getObject(params)
        .promise()
        .then((data) => {
            console.log("data.body", data)
            let objJsonStr = JSON.stringify(data);
            console.log("objJsonStr",objJsonStr)
            let objJsonB64 = Buffer.from(objJsonStr).toString("base64");
            // console.log(objJsonB64)
            var res = {
                data : objJsonB64,
                itemId : 100,
                itemName : "test"
            }
            return callback(null,res)
        })
        .catch((error) => {
            console.log(error)
            return (null, null)
        });
};