'use strict';

const { SNSClient, PublishCommand } = require('@aws-sdk/client-sns');

// Create an SNS client
const snsClient = new SNSClient({ region: 'ap-southeast-1' });

module.exports.handler = async (event) => {
  console.log('Event:', JSON.stringify(event, null, 2));

  try {
    // Define SNS parameters
    const params = {
      Message: 'This is a test message from Lambda!',
      Subject: 'Test SNS Message',
      TopicArn: process.env.SNS_TOPIC_ARN // Ensure this environment variable is set in serverless.yml
    };

    // Create an SNS publish command
    const command = new PublishCommand(params);

    // Publish the message to SNS
    const result = await snsClient.send(command);
    console.log('SNS Message ID:', result.MessageId);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Go Serverless v3.0! Your function executed successfully!',
        className: process.env.CLASS_NAME,
        snsMessageId: result.MessageId
      }),
    };
  } catch (error) {
    console.error('Error sending SNS message:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Failed to send SNS message',
        error: error.message
      }),
    };
  }
};
