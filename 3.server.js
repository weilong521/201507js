var http = require('http');
var menus = ["鱼香茄子","红烧茄子","酱香茄子"];
/**
 * @param req 请求
 * @param res 响应
 */
function serve(req,res){
  console.log(req.url);//请求的URL
  console.log(req.headers);//请求头
  console.log(req.method);
  var url = req.url;
  if(url == '/'){
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.setHeader('zfname','zfpx');
    res.write('<ul>');
    menus.forEach(function(menu){
      res.write('<li><a href="/'+menu+'">'+menu+'</a></li>');
    });
    res.write('</ul>');
    res.end();//结束响应
  }else{
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.write(decodeURIComponent(url.slice(1)));
    res.end();//结束响应
  }

}

//有客人进来的时候,调用serve函数进行处理
var server = http.createServer(serve);
server.listen(8080,'localhost');//让别人能找到你



