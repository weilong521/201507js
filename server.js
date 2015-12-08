var http = require('http');
/**
 * @param req 请求
 * @param res 响应
 */
function serve(req,res){
  res.write('hello');
  res.end();//结束响应
}

//有客人进来的时候,调用serve函数进行处理
var server = http.createServer(serve);
server.listen(8080,'localhost');//让别人能找到你



