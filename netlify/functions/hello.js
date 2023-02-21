exports.handler = async function (event, context) {  // eslint-disable-line
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello World"})
    };
};