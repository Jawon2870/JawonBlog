# Linux 自动部署

### 效果

在本地推送代码后，服务器自动拉取最新代码并重新部署。

### 原理

每次 push 后仓库中配置的 webHook 自动请求服务端事先准备好的 api，服务器验证请求的合法性，之后开始执行事先配置好的部署任务。

### 避坑

不能直接在自身服务中创建子进程去执行重新部署程序，因为重新部署程序需要先终止服务进程，然后再拉取新代码，这样才能保证新代码正常覆盖旧代码，否则旧代码被服务进程占用，无法被修改。但是，由于重新部署的进程属于服务进程的子进程，终止服务进程将同时终止部署进程，导致后续拉取代码等操作无法完成。

### 正确实现

#### 仓库端：

以 gitlab 为例，在仓库的 settings -> webHook 中添加一个 webHook，之后填写以下字段：

1. 填写 url, 也就是服务器自动部署的 api
2. 填写一个 token 用于验证
3. 选择触发器为 push

#### Linux 端：

注册另一个专门用于更新部署的服务，内容如下，具体创建步骤请移步本目录下的《Linux 常用命令》

```
[Unit]
Description=pawsome-server-deploy
After=network.target

[Service]
Type=oneshot
User=root
ExecStart=/bin/bash /home/ubuntu/pawsome-server/scripts/deploy.sh
```

以上部署服务每次启动后将仅执行一次，之后自动结束。

#### 后端接口：

```js
import { exec } from 'child_process';

export function deploy(req, res) {
    // 读取 header 中的 X-Gitlab-Token 信息进行验证
    const gitlabToken = req.get('X-Gitlab-Token');

    // 这里在实际应用中需要换成更加安全的验证方式
    if (!gitlabToken || gitlabToken !== "123456") {
        return res.status(401).send('error header X-Gitlab-Token: ' + gitlabToken);
    }
    res.send('Will redeploy the server.');

    console.log('[tip] Will redeploy the server.');

    // 执行部署服务
    exec('sudo systemctl start pawsome-server-deploy', (err, stdout, stderr) => {
        if (err) {
            console.error('启动部署服务失败', err);
            return;
        }
        console.log('部署服务已触发');
    });
}
```
