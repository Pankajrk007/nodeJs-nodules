const path  = require('path');
const a1 = path.basename('my-file.html');
console.log(a1);
const a2 = path.extname(__filename);
console.log(a2);
const a3= path.dirname(__dirname);
const a4=path.dirname(__filename)
console.log(a3,a4);
 