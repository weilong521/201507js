var http = require('http');//http服务器模块
var url = require('url');//把url字符串转成对象
var fs = require('fs');
/**
 * @param req 请求
 * @param res 响应
 */
function serve(req,res){
  console.log(req.url);//请求的URL
  console.log(req.headers);//请求头
   if(req.url == '/'){
       fs.readFile('clock.html',function(err,data){
           if(err)
            res.end('错了');
           else
           res.end(data);
       });
   }else if(req.url == '/clock'){
       console.log(req.method);
       console.log(req.headers.zf);
       res.setHeader('Access-Control-Allow-Headers','zf');
       res.setHeader('Access-Control-Allow-Origin','http://localhost:63342');
    res.write(new Date().toLocaleString());
    res.end();
  }

}

//有客人进来的时候,调用serve函数进行处理
var server = http.createServer(serve);
server.listen(8080,'localhost');//让别人能找到你



