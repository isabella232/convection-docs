module.exports = function() {
  return (function(req, res, next) {
    res.type('png');
    res.send(cloud);
  });
};

var cloud = new Buffer('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' +
  'Jggg==', 'base64');
