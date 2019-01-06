var express = require('express');
var routes = require('./App/Routes/web');

var app = new express();
app.set('template engine', 'ejs');

app.use('/assets', express.static('assets'));

routes.forEach(function(route) {
    let action = route.action.split('@');

    var controllerName = action[0];
    var controllerMethod = action[1];

    app[route.method](route.url, function(req, resp) {

        if ( route.middleware != undefined ) {
            let middlewareAction = route.middleware.split('@');
    
            let middlewareName = middlewareAction[0];
            let middlewareMethod = middlewareAction[1];
    
            let middleware = require('./App/Middlewares/' + middlewareName);
    
            middleware[middlewareMethod](req, resp);
        }

        let controller = require('./App/Controllers/' + controllerName);

        return controller[controllerMethod](req, resp);
    });
});

app.listen(3000);
