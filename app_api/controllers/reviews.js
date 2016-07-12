var sendJsonResponse = function ( res, status, content ) {
    res.status( status );
    res.json( content );
};

module.exports.reviewsCreate = function ( req, res, next ) {
    sendJsonResponse(res, 200, {'status': 'success'});
};

module.exports.reviewsReadOne = function ( req, res, next ) {
    sendJsonResponse(res, 200, {'status': 'success'});
};

module.exports.reviewsUpdateOne = function ( req, res, next ) {
    sendJsonResponse(res, 200, {'status': 'success'});
};

module.exports.reviewsDeleteOne = function ( req, res, next ) {
    sendJsonResponse(res, 200, {'status': 'success'});
};
