module.exports = function (app) {
    app.use('/',         require('./routes/index/index.js'));
    app.use('/api',      require('./routes/api/api.js'));
    app.use('/api/user', require('./routes/api/api-user.js'));
};
