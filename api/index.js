const express = require('express');
const path = require('path');
const app = express();
const hostname = 'https://www.jawon.site';

/**
 * 将目标目录作为静态资源提供给客户端，如果请求路径属于该目录，
 * 则直接返回请求的资源，否则将继续向下执行，检查是否存在对应的路由。
*/
app.use(express.static(path.join(__dirname, '../Blog/build')));

app.get('*', (req, res) => {
    console.log('received URL: ' + hostname + req.url);
    
    res.sendFile(path.join(__dirname, '../Blog/build', 'index.html'));

    // res.send('<h1 style="text-align:center">404 Not Found</h1>');
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running at: http://localhost:${port}`);
});

module.exports = app;