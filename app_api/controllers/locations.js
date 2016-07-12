var mongoose = require( 'mongoose' );
var Loc = mongoose.model( 'Location' );

var sendJsonResponse = function ( res, status, content ) {
    res.status( status );
    res.json( content );
};


module.exports.locationsListByDistance = function ( req, res, next ) {
    sendJsonResponse(res, 200, {'status': 'success'});
};

module.exports.locationsCreate = function ( req, res, next ) {
    sendJsonResponse(res, 200, {'status': 'success'});
};

module.exports.locationsReadOne = function ( req, res, next ) {
    Loc
        .findById( req.params.locationid )
        .exec( function ( err, location ) {
            sendJsonResponse( res, 200, location );
        })
};

module.exports.locationsUpdateOne = function ( req, res, next ) {
    sendJsonResponse(res, 200, {'status': 'success'});
};

module.exports.locationsDeleteOne = function ( req, res, next ) {
    sendJsonResponse(res, 200, {'status': 'success'});
};

