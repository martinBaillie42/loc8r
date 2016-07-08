/* GET 'about' page */
module.exports.about = function(req, res, next) {
    res.render('generic-text', {
        title: 'About Loc8r',
        content: 'Loc8r was created to help people find places to sit down and get a bit of work done.\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Munc sed lorem ac nisi dignissim accumsan.'
    });
};