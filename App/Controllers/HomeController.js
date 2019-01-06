var HomeController = {
    index: function(req, resp){
        return resp.send("Hello World!");
    }
};

module.exports = HomeController;
