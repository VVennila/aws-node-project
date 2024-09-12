module.exports.handler = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Go Serverless v3.0! Scheduled event executed successfully!",
        },
        null,
        2
      ),
    };
  };


    // console.log("Scheduled event triggered:", event);
