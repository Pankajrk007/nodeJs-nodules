const fsm= require('fs');
fsm.readFile("text.txt",'utf-8',(err,data)=>{
    // console.log(err,data)
})
// fsm.writeFile('text1.txt',"Mai hoon don",(err,data)=>{
// console.log(err);
// })
try{
    const a = fsm.readFileSync("file_example_XLS_5000.csv",'utf-8');
// console.log(a);
}
catch(error){
// console.log(error)
}
const c= fsm.appendFile("text.txt","kya huwa bhai",(err)=>{
//     console.log(c);

})
// const b = fsm.writeFileSync('text1.txt',' Hello brother');
// console.log(b);

const rstream = fsm.createReadStream('file_example_XLS_5000.csv');
console.log(rstream);
rstream.on('data', (chunkdata1)=>{
    console.log(chunkdata1.toString());
})