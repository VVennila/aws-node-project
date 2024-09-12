const { handler } = require('./handler');

 // Adjust the path to where your handler.js file is located

describe('handler', () => {
  it('should return a success message and status code 200', async () => {
    // Arrange
    const event = {};  // You can pass any event data if needed, or leave it as an empty object

    // Act
    const response = await handler(event);

    // Assert
    expect(response.statusCode).toBe(200);
    expect(response.body).toBe(
      JSON.stringify(
        {
          message: "Go Serverless v3.0! Scheduled event executed successfully!",
        },
        null,
        2
      )
    );
  });
});
