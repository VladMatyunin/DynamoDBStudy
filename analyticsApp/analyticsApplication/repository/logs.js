const AWS = require('aws-sdk');
AWS.config.update({ region : 'us-east-2'});
const docClient = new AWS.DynamoDB.DocumentClient();

var Log = function (id, timestamp, application, message) {
    this.id = id;
    this.timestamp = timestamp;
    this.application = application;
    this.message = message;
};

var LogRepository = {
    getAll: () => {
        return docClient.scan({
            TableName: 'vm_logs'
        });
    }
};

module.exports = Log;
module.exports = LogRepository;