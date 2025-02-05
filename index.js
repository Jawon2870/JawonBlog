const express = require('express');
const path = require('path');
const app = express();

// 处理大文件下载请求
app.get('/assets/', (req, res) => {
    const fileUrl = `https://www.jawon.site${req.url}`;
    res.redirect(302, fileUrl);
});


/**
 * 设置作为静态资源响应的目录，如果请求路径指向静态资源，
 * 则返回静态资源，否则继续向下寻找对应的路由。
*/
app.use(express.static(path.join(__dirname, './Blog/build')));

// 对于其他请求，自定义响应结果
app.get('*', (req, res) => {
    console.log('received URL: ' + req.url);
    res.sendFile(path.join(__dirname, './Blog/build/index.html'));
    // res.send('<h1 style="text-align:center">404 Not Found</h1>');
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running at: http://localhost:${port}`);
});

module.exports = app;