const files = require('fs')
//.............................first way ...............................

 const ReadStream = files.createReadStream('./docs/deals.txt',{encoding:'utf-8'});
const writeStream = files.createWriteStream('./docs/blog3.txt');
// ReadStream.on('data',(Chuck)=>{
//     writeStream.write('.............File was written here............');
//     writeStream.write(Chuck);
//     writeStream.write('....................writing process ends from here ...............');
// })

// ReadStream.on('end',()=>{
    
    
// })


//...........................second Way .......................


// writeStream.write('Im Writting data here ',()=>{
//   console.log('data creatwd succedffully');
// })


//......................Third way ......................................

ReadStream.pipe(writeStream);

