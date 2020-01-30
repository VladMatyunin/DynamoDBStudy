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


docClient.get({
    TableName: 'td_notes_test',
    Key: {
        user_id: 'A',
        timestamp: 1
    }
}, getInfoFromRequest);

docClient.query({
    TableName: 'td_notes_test',
    KeyConditionExpression: "user_id = :uid", 
    ExpressionAttributeValues: {
        ':uid': 'A'
    }
}, getInfoFromRequest);

docClient.scan({
    TableName: 'td_notes_test',
    FilterExpression: 'cat = :cat',
    ExpressionAttributeValues: {
        ":cat": "general"
    }
}, getInfoFromRequest);

docClient.batchGet({
    RequestItems: {
        'td_notes_test' : {
            Keys: [
                {
                    user_id: 'A',
                    timestamp: 1
                },
                {
                    user_id: 'B',
                    timestamp: 2
                }
            ]
        },
        'td_notes_sdk': {
            Keys: [
                {
                    user_id: '11',
                    timestamp: 1
                }
            ]
        }
    }
}, getInfoFromRequest);