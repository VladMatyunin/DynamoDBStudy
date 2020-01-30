const AWS = require("aws-sdk");
AWS.config.update({region : 'us-east-2'});

const dynamodb = new AWS.DynamoDB();

const params = {
};

const getInfoFromRequest = (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
};
dynamodb.listTables({}, getInfoFromRequest);

dynamodb.describeTable({TableName : "td_notes"}, getInfoFromRequest);

dynamodb.createTable({TableName: "td_notes_sdk", 
AttributeDefinitions: [
    {
        AttributeName: "user_id",
        AttributeType: "S"
    },
    {
        AttributeName: "timestamp",
        AttributeType: "N"
    }
],
KeySchema: [
    {
        AttributeName: "user_id",
        KeyType: "HASH"
    },
    {
        AttributeName: "timestamp",
        KeyType: "RANGE"
    }
],
ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
}
});

dynamodb.updateTable(
    {
        TableName: "td_notes_sdk",
        ProvisionedThroughput: {
            ReadCapacityUnits: 2,
            WriteCapacityUnits: 1
        }
    },
     getInfoFromRequest);

     dynamodb.deleteTable({TableName: "td_notes_sdk"}, getInfoFromRequest);