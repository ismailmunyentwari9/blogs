const http = require('http');
const files = require('fs');

const server = http.createServer((request,response)=>{
    let path ='./pages/';
    switch(request.url){
        case '/about':
            path+='about.html';
            break;
        case '/aboutme':
            response.statusCode= 301;
            response.setHeader('Location', '/about');
            response.end();
            break;    
        default:
            path+='404.html';
            break;
    }
files.readFile(path,(error,data)=>{
    if(error){
        console.log('error accurs');
    }
    else{
        
        response.write(data.toString());
        response.end();
    }
})
})

server.listen(3000,'localhost',()=>{
console.log('we are listenning the server from  now');

})