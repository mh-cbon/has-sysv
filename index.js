
var fs = require('fs');

var hasSysv = function (then) {
  if (!process.platform.match(/linux/))
    return then('nop')
  fs.stat('/etc/init.d', function (err) {
    if(err) return then('nop')
    return then(null, true);
  })
}

module.exports = hasSysv;
