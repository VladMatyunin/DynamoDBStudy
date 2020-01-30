const AWS = require('aws-sdk');
AWS.config.update({ region : 'us-east-2'});

const docClient = new AWS.DynamoDB.DocumentClient();
const getInfoFromRequest = (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
};

docClient.put({
    TableName: 'td_notes_sdk',
    Item: {
        userId: 'bb',
        timestamp: 1,
        title: 'my_title',
        content: 'mycontent'
    },
    ConditionExpression: '#t <> :t',
    ExpressionAttributeNames: {
        '#t': 'timestamp'
    },
    ExpressionAttributeValues: {
        ':t': 1
    }
}, getInfoFromRequest);