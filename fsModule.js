const fs  = require('fs');
// fs.readFile('text.txt','Utf-8', (err,data)=>{  utf-8 or to stringfy() convert buffer(number) to data
//     console.log(err,data);
// });

// const a=fs.readFileSync('text.txt','utf-8');
// console.log(a);
// console.log('finished ');

fs.appendFile('text.txt',' I was lying',(err,data)=>{
    console.log(data,'Done Finished')
})



// chatgpt
// const fs = require('fs');

// // Reading a file asynchronously
// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading the file:', err);
//     return;
//   }

//   console.log('File content:', data);
// });

// // Writing to a file asynchronously
// const contentToWrite = 'Hello, Node.js!';
// fs.writeFile('output.txt', contentToWrite, 'utf8', (err) => {
//   if (err) {
//     console.error('Error writing to the file:', err);
//     return;
//   }

//   console.log('File has been written successfully.');
// });

// // Reading a directory asynchronously
// fs.readdir('.', (err, files) => {
//   if (err) {
//     console.error('Error reading the directory:', err);
//     return;
//   }

//   console.log('Files in the current directory:', files);
// });



// file nhi hogi toh bana lete h 
// hofi toh usme write kr deta