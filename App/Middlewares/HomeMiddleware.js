var HomeMiddleware = {
    index: function(req, resp) {
        console.log("Hello from middleware");
    }
};

module.exports = HomeMiddleware;
