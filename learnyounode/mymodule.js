const fs = require('fs');

// function filterDir(dir, filter, callback) {
//   fs.readdir(dir, function (err, list){
//       if(err) 
//         return callback(err, null);
//       callback(null, list.filter(f => f.endsWith('.' + filter)));
//   });
// }

// module.exports.filterDir = filterDir; 

module.exports = function(dir, filter, callback) {
  fs.readdir(dir, function (err, list){
      if(err) 
        return callback(err);
      callback(null, list.filter(f => f.endsWith('.' + filter)));
  });
}