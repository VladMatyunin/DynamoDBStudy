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
    }
}, getInfoFromRequest);

docClient.update({
    TableName: 'td_notes_sdk',
    Key: {
        user_id: 'bb',
        timestamp: 1
    },
    UpdateExpression: 'set #t = :t',
    ExpressionAttributeValues: {
        ':t': "Updated title"
    }
}, getInfoFromRequest);

docClient.delete({
    TableName: 'td_notes_sdk',
    Key: {
        user_id: 'bb',
        timestamp: 1
    }
}, getInfoFromRequest);

docClient.batchWrite({
    RequestItems: {
        'td_notes_sdk': [
            {
                DeleteRequest: {
                    Key: {
                        user_id: 'bb',
                        timestamp: 2
                    }
                }
            },
            {
                PutRequest: {
                    Item : {
                        user_id: '22',
                        timestamp: 2,
                        title: 'Title 22',
                        content: 'Content 22'
                    }
                }
            }
        ]
    }
}, getInfoFromRequest);