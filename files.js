//readign files ............................................................................................

const files = require('fs');
// files.readFile('./docs/deals.txt',(err,data)=>{
// if(err){
//     console.log(err)
// }
// else{
//     console.log(data.toString());
// }
// })


//writing files .....................................................................................................

// files.writeFile('deal.js','Im removing all in one',(err,mesage)=>{
// if(err){
//     console.log(err);
// }
// else{
//     mesage='File written';
//     console.log(mesage);
// }

// })

//directories.........................

// if(files.existsSync('./assets')){
//     files.rmdir('./assets',(error)=>{
//         if(error){
//             console(error);
//         }
//         else{
//             console.log('directory removed sucessfully');
//         }
//     })
// }
// else{
//     files.mkdir('./assets',()=>{
//         console.log('You Have Successfully created Directory');
//     })
// }

//deleting files .........................................................................................................

// if(files.existsSync('./docs/deals.txt')){
//     files.unlink('./docs/deals.txt',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log('file deleted successfully');
//         }
//     })
// }
// else{
//     files.writeFile('./docs/deals.txt','Im with them guys',()=>{
//         console.log('file created successfully');
//     })
// }