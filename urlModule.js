const url =require('url');
// Parsing a URL:
// The url.parse() method is used to break down a URL into its components. 
// This method takes a URL string as its argument and
//  returns an object with properties representing various parts of the URL.
// const urlString= "https://www.google.com/search?q=gamma+app&oq=g&gs_lcrp=EgZjaHJvbWUqDAgCECMYJxiABBiKBTIGCAAQRRg8MgYIARBFGDkyDAgCECMYJxiABBiKBTIGCAMQRRg8MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg0MDYzajBqN6gCALACAA&sourceid=chrome&ie=UTF-8";
// const parseUrl = url.parse(urlString,false);
// console.log(parseUrl);



// const url = require('url');

// const baseUrl = 'https://www.example.com';
// const relativePath = '/path/to/page';
// const resolvedUrl = url.resolve(baseUrl, relativePath);

// console.log(resolvedUrl);


// const url = require('url');

const urlString = 'https://www.example.com/path/to/page?q=query#fragment';
const parsedUrl = new URL(urlString);

console.log(parsedUrl.protocol); // 'https:'
console.log(parsedUrl.host); // 'www.example.com'
console.log(parsedUrl.pathname); // '/path/to/page'
console.log(parsedUrl.search); // '?q=query'
console.log(parsedUrl.hash); // '#fragment'
console.log(myURL.href);      // Full URL string
