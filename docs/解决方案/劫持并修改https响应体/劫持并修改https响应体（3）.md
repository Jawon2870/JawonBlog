# 劫持并修改https响应体（3）

又过了一段时间，我开始对 electron 感兴趣，而且我问了豆包，他说 electron 具备劫持 https 响应体的能力，还给了我这样一段代码，

```js
const { app, BrowserWindow, session } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        }
    });

    // 加载百度页面
    mainWindow.loadURL('https://www.baidu.com');

    // 获取当前会话
    const ses = mainWindow.webContents.session;

    // 拦截请求
    ses.webRequest.onBeforeRequest({ urls: ['<all_urls>'] }, (details, callback) => {
        // 示例：假设拦截 index.html 请求
        if (details.url.includes('index.html')) {
            // 模拟修改响应内容
            const modifiedContent = '<html><body>Modified HTML</body></html>';
            callback({
                cancel: false,
                redirectURL: null,
                responseHeaders: {
                    'Content-Type': 'text/html'
                },
                body: Buffer.from(modifiedContent)
            });
        } else {
            // 不拦截其他请求
            callback({ cancel: false });
        }
    });

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});
```

我看着挺有戏的，于是开始尝试 electron。

### 安装 electron

原本以为一键 npm install electron -D 就OK了，是的，我第二天在公司的电脑上确实一键成功了，但之前的晚上我在家花费了近4小时才勉强安装成功。网上的解决方法基本都试过了，安装的时候不是报红就是卡住，三个多小时后，我放弃了（世上无难事，只要肯放弃）。

我开始第一次尝试去手动安装一个 npm 包，我 Google 到了这篇文章，是他救了我：[手把手离线安装 electron](https://juejin.cn/post/7003249707216535565)。

按照这篇文章，我成功离线安装了 electron，值得一提的是，离线安装包不要下错：[Releases · electron/electron · GitHub](https://github.com/electron/electron/releases)

他 release 页面的压缩包非常多，一定要选对才行，window 系统选这个：

![1744783275956](image/劫持并修改https响应体(三)/1744783275956.png)

### 测试 electron 方案

在成功安装 electron 之后，我开始测试上面的代码，然而弹出网页并未被修改，说明劫持无效，之后我开始查阅大量资料，发现主要是围绕 electron 提供的 session.webRequest 相关的方法，但都是无效的，不错不错，被豆包狠狠地欺骗了！

我又陷入了沉思，那怎么办呢，使用 chromium 源码重编译一款符合需求的浏览器？查了一下编译一次需要 3~6 小时，搞不了一点啊！

那重编译一款 electron 呢？查了下好像也不太好搞，搞不好又是一条不归路！

### debugger

后来，在我发现了这个个可以修改响应体的浏览器插件 [ModResponse](https://chromewebstore.google.com/detail/modresponse-mock-and-repl/bbjcdpjihbfmkgikdkplcalfebgcjjpm?src=modheader-com)（基于[ chrome.debugger api](https://developer.chrome.com/docs/extensions/reference/debugger/)）之后，结合前面对 electron 的了解，我发现 electron 和浏览器扩展的 webRequest 下面的 api 很类似，那么 electron 是不是也有 debugger api 呢？如果是，那么我更倾向与使用 electron 开发，因为他的功能比浏览器扩展更强大。
