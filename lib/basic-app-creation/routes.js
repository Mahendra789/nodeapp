const fs = require('fs');

const requestHandler = (req,res)=>{
    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>First app</title></head>');
        res.write('<body> <form action="/message" method="POST"> <input type="text" name="message"><button type="submit">Submit</button>  </form> </body>');
        res.write('<html>');
        return res.end();
    }
    
    if(req.url === '/message' && req.method === 'POST'){
        const body = [];
        req.on('data', (chunk)=>{
            body.push(chunk);
        });
    
        return req.on('end', ()=>{
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
            res.statusCode = 302;
            res.setHeader('Location','/');
            return res.end();
    
        });
    }
}

// module.exports = requestHandler;

// module.exports = {
//     handler : requestHandler,
//     sometext : 'aaa'
// }

exports.handler = requestHandler;

