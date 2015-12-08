var http=require('http');//require是全局方法
var menu=[{name:"鱼香茄子",unit:"盘"},{name:"红烧茄子",unit:"碗"},{name:"酱香茄子",unit:"碟"}];
//@param req 请求
//* @param res 响应
//*
var url = require('url');
function serve(req,res){
    //请求和响应
    console.log(req.url);//请求的路径URL
    console.log(req.headers);//请求的头
    console.log(req.method);//
    // console.log(req.httpVersion);
    var urlObj=url.parse(req.url,true);////把请求的URL转成对象
    //  pathname 端口号和?中间的部分
    // query 查询字符串 如果第二个参数 true,query就成为了一个json对象
    //console.log(urlObj);
    var pathname=urlObj.pathname;
    if(pathname=="/"){
        //自定义头（自定义的要求，传输数据用的）
        res.setHeader('Content-Type','text/html;charset=utf-8');
        res.write('');
        res.write('<ul>');
        menu.forEach(function(menu){
            res.write('<li><a href="/'+menu.name+'?unit='+menu.unit+'"> '+menu.name+'</a></li>');//相应体
        });
        //setTimeout(function(){
        res.write('</ul>');
        res.end();//结束响应
        //},3);
    }else{
        res.setHeader('Content-Type','text/html;charset=utf-8');
        res.write('一'+urlObj.query.unit+decodeURIComponent(pathname.slice(1)));//中文，取得是斜杠之后的内容。
        res.end();//结束响应
    }
}
//有客人进来的时候，调用serve函数进行处理。
var server=http.createServer(serve);//创建了一个服务器
server.listen(8080,"localhost");//本地的80端口上启动服务了，让别人能够找到你  低于1000的端口的话，是需要管理员权限的。


