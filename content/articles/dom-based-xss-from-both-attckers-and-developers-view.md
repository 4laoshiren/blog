---
title: "DOM-based XSS Optimizing"
description: "Everything I know about DOM-based XSS"
published: 2026/4/9
slug: "dom-based-xss-from-both-attckers-and-developers-view"
---

> 我写文章，内容以我个人能学到更多东西出发，除此以外不会在意任何东西，包括可读性，当然，尽管如此，我依然认为我的文章可读性是很强的

> 本文将完全从攻击角度，分析DOM XSS挖掘的最优解，会涉及部分开发角度，但始终将本着从攻击角度分析的理念，一切为最优的攻击服务

## 术语

### sink

网络安全中的术语，表示本不该解析js/html的地方解析了js/html，很优雅的命名

## 本质

sink函数/sink属性的setter函数的输入可控，且受的是url参数的控制
两个条件：`sink函数`，`输入受url参数控制`
用伪代码可以写成：
```js
// https://xxx.com/?redirect=xxx
const params = UrlSearchParam(location.search);
const param = params.get("redirect");
sink(param);
```


## 特征

特征很多，可以从sink入手，可以从参数入手，但显然最优解一定是从参数入手

直接原因是一个url加载的所有js中，用到`sink`函数的地方很多，多达上百个，即满足第一个条件的地方有上百个，但实际上99%的输入都不受url参数控制

比如location.href这个sink属性，这个属性是一个getter and setter，即xxx=f(location.href)这样用，和location.href=xxx这样用，除了调用/赋值，还都可以带有副作用

其中setter的副作用就是跳转

研究只要研究setter就行了，即找location.href=xxx，然后实际结果会带有很多xxx=f(location.href)
毕竟，只要用到“当前url”的前端场景，都可以用location.href，

实际操作中，90%的location.href的getter情况，都很复杂，比如：
```js
t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href,
t.head.appendChild(r)) : t = E),
```
我甚至都不知道我有没有截全，这种东西完全就没必要看，谁爱看谁看去吧。

顺带一提的是js分析中，一个很常见的情况就是会遇到很多很复杂的情况，ai能cover99%的js分析，在这种情况下，假设能完全使用ai的情况下最优的方案，就是最好的方案

发现url里有重定向之类的参数，就改成payload就完事，开门见山省得中间段上下文去做提示词绕过消耗上下文，绕是能绕，反正目前没什么绕不过的安全策略，在开头绕不影响提示词一点，关键需要走一遍登陆流程，相当于打断点

```bash
`DOM-XSS payload` 用chrome-devtools去走一遍手机登陆的流程 看一下是如何处理这个参数的 你归你做 要填手机号验证码的时候我会第一时间填上 之后你点击登陆就完事 xxx参数是否被用于location.href之类的跳转？拿到这个参数后，是如何处理的？给我真实的能在js里搜到的相关代码
```