const { handler } = require('./handler');

describe('handler', () => {
  it('should return a success message and status code 200', async () => {
    const event = {};  

    const response = await handler(event);
    
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
