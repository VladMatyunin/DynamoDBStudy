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