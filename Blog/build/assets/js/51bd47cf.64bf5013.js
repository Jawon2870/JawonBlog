"use strict";(self.webpackChunkjawon_blog=self.webpackChunkjawon_blog||[]).push([[5123],{5300:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"\u670d\u52a1\u5668\u76f8\u5173/\u4e91\u51fd\u6570\u642d\u5efa/vercel nodejs\u514d\u8d39\u90e8\u7f72\u4e91\u51fd\u6570","title":"vercel nodejs\u514d\u8d39\u90e8\u7f72\u4e91\u51fd\u6570","description":"\u9700\u6c42\u7b80\u4ecb","source":"@site/docs/\u670d\u52a1\u5668\u76f8\u5173/\u4e91\u51fd\u6570\u642d\u5efa/vercel nodejs\u514d\u8d39\u90e8\u7f72\u4e91\u51fd\u6570.md","sourceDirName":"\u670d\u52a1\u5668\u76f8\u5173/\u4e91\u51fd\u6570\u642d\u5efa","slug":"/\u670d\u52a1\u5668\u76f8\u5173/\u4e91\u51fd\u6570\u642d\u5efa/vercel nodejs\u514d\u8d39\u90e8\u7f72\u4e91\u51fd\u6570","permalink":"/docs/\u670d\u52a1\u5668\u76f8\u5173/\u4e91\u51fd\u6570\u642d\u5efa/vercel nodejs\u514d\u8d39\u90e8\u7f72\u4e91\u51fd\u6570","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"JS Hook","permalink":"/docs/JavaScript/JS Hook"},"next":{"title":"Hexo+Gitee pages\u514d\u8d39\u90e8\u7f72\u535a\u5ba2\uff08\u5df2\u5f03\u7528\uff09","permalink":"/docs/\u670d\u52a1\u5668\u76f8\u5173/\u7f51\u7ad9\u642d\u5efa/Hexo+Gitee pages\u514d\u8d39\u90e8\u7f72\u535a\u5ba2\uff08\u5df2\u5f03\u7528\uff09"}}');var l=r(4848),c=r(8453);const t={},i="vercel nodejs\u514d\u8d39\u90e8\u7f72\u4e91\u51fd\u6570",o={},d=[{value:"\u9700\u6c42\u7b80\u4ecb",id:"\u9700\u6c42\u7b80\u4ecb",level:2},{value:"\u4e91\u51fd\u6570\u90e8\u7f72\u6b65\u9aa4",id:"\u4e91\u51fd\u6570\u90e8\u7f72\u6b65\u9aa4",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"vercel-nodejs\u514d\u8d39\u90e8\u7f72\u4e91\u51fd\u6570",children:"vercel nodejs\u514d\u8d39\u90e8\u7f72\u4e91\u51fd\u6570"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9700\u6c42\u7b80\u4ecb",children:"\u9700\u6c42\u7b80\u4ecb"}),"\n",(0,l.jsx)(n.p,{children:"\u6709\u65f6\u5019\u6211\u4eec\u9700\u8981\u4e00\u4e9b\u52a8\u6001\u7684api\u63a5\u53e3\uff0c\u4f8b\u5982\u7f51\u7edc\u9a8c\u8bc1\uff0c\u670d\u52a1\u5668\u9700\u8981\u5224\u65ad\u7528\u6237\u7684\u8bf7\u6c42\u662f\u5426\u5408\u6cd5\uff0c\u4ee5\u8fd4\u56de\u76f8\u5e94\u7684\u7ed3\u679c\u3002\u8fd9\u65f6\u5019\u5982\u679c\u8d2d\u4e70\u4e00\u53f0\u670d\u52a1\u5668\uff0c\u663e\u7136\u5927\u6750\u5c0f\u7528\uff0c\u56e0\u4e3a\u6211\u4eec\u4ec5\u4ec5\u9700\u8981\u51e0\u4e2aapi\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u8fd9\u65f6\u4fbf\u53ef\u4ee5\u9009\u62e9\u4e91\u51fd\u6570(serverlsess functions)\uff0c\u817e\u8baf\u3001\u963f\u91cc\u4ee5\u53ca\u767e\u5ea6\u7684\u4e91\u51fd\u6570\u90fd\u6709\u5404\u81ea\u7684\u514d\u8d39\u671f\u9650\uff0c\u8d85\u8fc7\u671f\u9650\u5c31\u4f1a\u5f00\u59cb\u6536\u8d39\uff0c\u56fd\u5185\u7c7b\u4f3c\u7684\u5e73\u53f0\u8fd8\u6709memfire\uff0c\u4e0d\u8fc7\u524d\u9635\u5b50\uff08\u5927\u698224\u5e74\u5e95\uff09\u4e5f\u5f00\u59cb\u6536\u8d39\u4e86\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u4f5c\u4e3a\u4e07\u5e74\u767d\u5ad6\u515a\uff0c\u6211\u9009\u62e9\u56fd\u5916\u5e73\u53f0 ",(0,l.jsx)(n.a,{href:"https://vercel.com/",children:"vercel"}),"\uff08\u4e5f\u53ef\u4ee5\u9009\u62e9 ",(0,l.jsx)(n.a,{href:"https://dash.cloudflare.com/",children:"cloudflare"}),"\uff09\uff0cvercel\u7684\u514d\u8d39\u8ba1\u5212\u6301\u7eed\u514d\u8d39\uff0c\u4e14\u989d\u5ea6\u975e\u5e38\u5927\uff0c\u5c0f\u578b\u9879\u76ee\u6d4b\u8bd5\u5b8c\u5168\u591f\u7528\u3002\u4f46\u7531\u4e8evercel\u662f\u56fd\u5916\u7f51\u7ad9\uff0c\u5176\u4e3a\u9879\u76ee\u63d0\u4f9b\u7684\u57df\u540d\u65e0\u6cd5\u5728\u56fd\u5185\u8bbf\u95ee\uff0c\u4f46\u53ef\u4ee5\u901a\u8fc7\u81ea\u5b9a\u4e49\u57df\u540d\uff0c\u642d\u914d cloudflare \u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u4e91\u51fd\u6570\u90e8\u7f72\u6b65\u9aa4",children:"\u4e91\u51fd\u6570\u90e8\u7f72\u6b65\u9aa4"}),"\n",(0,l.jsxs)(n.p,{children:["vercel \u652f\u6301\u5f88\u591a\u8bed\u8a00\u548c\u6846\u67b6\uff0c\u6211\u9009\u62e9\u7684\u662f nodejs\uff0c\u53c2\u8003 ",(0,l.jsx)(n.a,{href:"https://vercel.com/docs/functions/quickstart",children:"vercel\u5b98\u65b9\u4e91\u51fd\u6570\u90e8\u7f72\u6587\u6863"}),"\uff0c\u4fbf\u53ef\u4ee5\u8f7b\u677e\u7684\u90e8\u7f72\u4e91\u51fd\u6570\uff0c\u5176\u8fc7\u7a0b\u5927\u81f4\u5982\u4e0b\uff08\u5177\u4f53\u6b65\u9aa4\u53ef\u81ea\u884c\u67e5\u9605\u76f8\u5173\u8d44\u6599\uff09\uff1a"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u521b\u5efa\u4e00\u4e2a nodejs \u9879\u76ee\uff0c\u5b89\u88c5 vercel\uff0c\u7f16\u5199\u4e91\u51fd\u6570\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'// \u521d\u59cb\u5316 npm \u9879\u76ee\r\nnpm init\r\n// \u5b89\u88c5 vercel\r\nnpm i vercel@latest\r\n\r\n// \u5728\u9879\u76ee\u6839\u76ee\u5f55\u521b\u5efa\u4ee5\u4e0b\u76ee\u5f55\u548c\u6587\u4ef6\r\n/api/hello/route.js\r\n// \u5728 route.js \u4e2d\u5199\u5165\u4ee5\u4e0b\u4ee3\u7801\r\nexport function GET(request) {\r\n    let respond = "Hello!";\r\n  // ...\r\n  // \u7ecf\u8fc7\u4e00\u4e9b\u81ea\u5b9a\u4e49\u903b\u8f91\u540e\u8fd4\u56de\u76f8\u5e94\u7684\u6570\u636e\r\n  // ...\r\n  return new Response(respond);\r\n}\n'})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5c06\u9879\u76ee\u4e0a\u4f20\u81f3 github \u4ed3\u5e93\uff0c\u4e4b\u540e\u5728vercel\u5e73\u53f0\u9009\u62e9\u6b64\u4ed3\u5e93\u4e00\u952e\u90e8\u7f72\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u90e8\u7f72\u6210\u529f\u540e\u4f1a\u5f97\u5230\u4e00\u4e2a xxx.vercel.app \u7684\u57df\u540d\uff0c\u5728\u56fd\u5185\u65e0\u6cd5\u8bbf\u95ee\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u53bb\u817e\u8baf\u4e91\u6216\u963f\u91cc\u4e91\u4e70\u4e00\u4e2a\u57df\u540d\uff0c\u4ef7\u683c\u57285\u5230\u51e0\u767e\u5143\u4e0d\u7b49\uff08\u6211\u9009\u62e9\u4e94\u5143\u7684\uff01\uff09\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5728\u8d2d\u4e70\u57df\u540d\u7684\u5e73\u53f0\u4e0a\u5c06\u57df\u540d\u7684 DNS \u670d\u52a1\u5546\u5730\u5740\u4fee\u6539\u4e3a cloudflare \u4e0a\u63d0\u4f9b\u7684\u5730\u5740\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4e4b\u540e\u56de\u5230 vercel \u9879\u76ee\uff0c\u5728\u8bbe\u7f6e\u4e2d\u81ea\u5b9a\u4e49\u57df\u540d\uff0c\u6dfb\u52a0\u4e0a\u9762\u8d2d\u4e70\u7684\u57df\u540d\uff0c\u6dfb\u52a0\u65f6\u6839\u636e\u63d0\u793a\u7684 DNS\u8bb0\u5f55\uff0c\u5c06DNS\u8bb0\u5f55\u6b63\u786e\u6dfb\u52a0\u5230 cloudflare\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5728 cloudflare \u4e2d\u5c06\u57df\u540d\u7684 SSL \u52a0\u5bc6\u6a21\u5f0f\u8bbe\u7f6e\u4e3a\u5b8c\u5168\u4e25\u683c\uff0c\u5426\u5219\u4f1a\u51fa\u73b0\u91cd\u5b9a\u5411\u9519\u8bef\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"1736785898145",src:r(6603).A+"",width:"1144",height:"645"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5b8c\u6210\u4ee5\u4e0a\u6b65\u9aa4\u540e\u7b49\u5f85\u51e0\u5206\u949f\u5373\u53ef\u901a\u8fc7\u81ea\u5b9a\u4e49\u57df\u540d\u8bbf\u95ee\u9879\u76eeapi\uff0c\u89e3\u51b3\u4e86\u56fd\u5185\u65e0\u6cd5\u8bbf\u95ee\u7684\u95ee\u9898\uff0c\u81f3\u6b64\uff0c\u514d\u8d39\u4e91\u51fd\u6570\u642d\u5efa\u5b8c\u6bd5\u3002"}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},6603:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/1736785898145-680138df33e4f86aa9fbf8d11ad0a757.png"},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>i});var s=r(6540);const l={},c=s.createContext(l);function t(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);