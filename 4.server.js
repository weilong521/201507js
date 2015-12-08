var http = require('http');//http服务器模块
var url = require('url');//把url字符串转成对象
var menus = [{name:"鱼香茄子",unit:"盘"},{name:"红烧茄子",unit:"碗"},{name:"酱香茄子",unit:"碟"}];
/**
 * @param req 请求
 * @param res 响应
 */
function serve(req,res){
  console.log(req.url);//请求的URL
  console.log(req.headers);//请求头
  console.log(req.method);//请求的方法
  var urlObj = url.parse(req.url,true);//把请求的URL转成对象
   //  pathname 端口号和?中间的部分
  // query 查询字符串 如果第二个参数 true,query就成为了一个json对象
  var pathname = urlObj.pathname;//取得路径名
  res.setHeader('Content-Type','text/html;charset=utf-8');
  if(pathname == '/'){//如果访问的是根目录
    res.write('<ul>');
    menus.forEach(function(menu){
      res.write('<li><a href="/'+menu.name+'?unit='+menu.unit+'">'+menu.name+'</a></li>');
    });
    res.write('</ul>');
    res.end();//结束响应
  }else{
    //设置内容类型

    //   /鱼香茄子?unit=盘  {unit:'盘'}
    res.write('一'+urlObj.query.unit+decodeURIComponent(pathname.slice(1)));
    res.end();//结束响应
  }

}

//有客人进来的时候,调用serve函数进行处理
var server = http.createServer(serve);
server.listen(8080,'localhost');//让别人能找到你



