---
title: 'nodejs express github zeabur免费部署云函数'
categories:
  - 网站搭建
  - 云函数搭建
date: 2023-10-12 08:00:00
---

# 简介

​	[Zeabur](https://dash.zeabur.com) 支持免费部署网站和云函数，相当于一个服务器，我们可以免费部署自己的应用，让他在云端运行，而不是简单的静态网站。由于我已经部署了静态网站 [Jawon's blog](https://www.jawon.site) ,后来才有了云函数的需求，因此下面是云函数的部署步骤。

> zeabur 和 vercel 、 Netlify 类似，都可以搭建网站和云函数，但由于他们在国内都被墙了，目前只有zeabur 搭建后的提供的 xxx.zeabur.app 在国内仍可访问，因此选用zeabur。

# 云函数部署

## 创建GitHub仓库

​	在GitHub创建自己的仓库用于存放云应用，后面再部署到zeabur。仓库最好使用ssh连接到本地，方便后期推送代码，详细步骤请参考 [提交本地代码到github](https://www.cnblogs.com/wangcuican/p/12522239.html) 

## 创建本地项目

​	本着不重复造轮子的原则，这里使用基于nodejs的express服务器框架。环境配置参考： [Installing Express (expressjs.com)](https://expressjs.com/en/starter/installing.html) 

​	配置好环境后，文件夹内会出现一些文件，在package.json内我们只需保留：

```json
{
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

​	其中"start": "node app.js"是告诉zeabur服务器部署后执行node app.js命令。

​	之后按照 [Express "Hello World" example (expressjs.com)](https://expressjs.com/en/starter/hello-world.html) 创建app.js，将其中的端口改为8080，否则部署到zeabur后无效(别问我是怎么知道的:cry: :anger:)。

​	这时在本地运行node app.js后，打开 http://localhost:8080/ 可以看到hello word。

## 推送到github

​	如果你按照[提交本地代码到github](https://www.cnblogs.com/wangcuican/p/12522239.html) 部署好ssh后，可以使用

```cmd
git add . && git commit -m '1' && git push -u myapp master:main
```

​	若后期要更改本地路径，需要到目标路径打开 bash，执行以下命令

```cmd
git init 
git remote add NewRepositoryName NewHHSLink
git add .
git commit -m 'first commit'
git push --force NewRepositoryName master
```

​	其中 --force 表示强制推送覆盖仓库。

推送代码，其中的 myapp master:main 因人而异。

>  如果没有部署ssh，将除node_modules文件夹外的所有文件手动上传到仓库也是可以的。

## 创建zeabur服务

​	注册[Zeabur](https://dash.zeabur.com) ，创建服务，连接你的github，选择目标仓库即可一键部署。之后在该服务中可以为服务添加域名xxx.zeabur.app，访问该域名即可看到Hello Word，搭建成功。

## 编写云函数

​	仅仅显示Hello Word显然不是我要的结果，我要的是一个实时运行的云函数，当我访问他时他要返回计算结果。

​	为了代码模块化，我们新创建一个func.js作为云函数：

```js
module.exports = function() {
    var array = [];
    var i = 0;
    setInterval(() => {
        array.push(i);
        i++;
    }, 5000);
    return array;
}
```

​	这个函数返回一个数组，该数组每隔五秒会自动增加一个成员，用以证明云函数在无人访问时也可以运行。

​	之后在app.js中调用该函数，同时当收到get请求时返回该数组：

```js
const express = require('express')
const func = require('./func');

const app = express()
const port = 8080

var array = func();

app.get('/', (req, res) => {
    res.send(array.toString());
})

app.listen(port, () => {
  console.log(`应用正在监听端口 ${port}`)
})
```

将其重新部署后，访问网页可以看到 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14, . . . ，并随着时间增多。关闭网页，过一会再打开可以看到数字更多了，说明云函数成功运行。

## get请求的参数解析

​	云函数可以响应浏览器输入请求地址，也可以响应js的get请求。为了实现在请求地址中加入不同的参数来获取不同的返回值，我们将app.js改为以下内容，方便实验：

```js
const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
	const key = req.query.key;
	res.send('你的请求参数是：' + key);
})

app.listen(port, () => {
    console.log(`应用正在监听端口 ${port}`)
})
```

这是当我们请求地址http://127.0.0.1:8080/?key=123，就会返回 你的请求参数是：123

使用js发送get请求，打印返回结果：

```js
fetch('http://127.0.0.1:8080/?key=123')
  .then(response => response.text())
  .then(data => console.log(data))
  .catch((error) => {
    console.error('Error:', error);
  });
// 你的请求参数是：123
```

> 注意：get请求不可跨域



我们可以在服务端对请求参数进行判断从而执行不同的逻辑，进而返回不同的结果，下面是具体代码：

```js
// 单参数的get请求 http://localhost:8080/?key=value
//const key = req.query.key;
//res.send('你的请求参数是：' + key);

// 多参数的get请求 http://localhost:8080/?key1=value1&key2=value2
//const { key1, key2 } = req.query;
//res.send('你的请求参数是：' + key1 + ',' + key2);

// 遍历所有请求参数 http://127.0.0.1:8080/?key1=111&key2=222&key3=333
var params = '';

for (let key in req.query) {
    params += key + ' = ' + req.query[key] + '\n';
}
res.send('你的请求参数是：\n' + params);
```

