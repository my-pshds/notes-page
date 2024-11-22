---
title: 缺陷
description: 内容问题和技术困难
sidebar_position: 3
---

### Markdown 链接对搜索功能的支持缺陷

&emsp;&emsp;受本人技术水平限制（也有可能是受此 Docusaurus 开发者的产品设计水平限制），此网站使用 Markdown 文件编辑内容的网页当中，使用 Markdown 扩展语法形成的网页链接，无论是文字内容，还是链接地址，在搜索框中均无法显示为搜索结果。  
例如：　　
```markdown title="xxx.md"
xxx  
[入口](https://notes.pengxianzhe.org)  
xxx
```
显示效果：  
> xxx  
> [入口](https://pengxianzhe.org)  
> xxx  

&emsp;&emsp;在搜索框搜索「xxx」会显示两个结果，但无论搜索「域名主页」还是「[https://notes.pengxianzhe.org](https://notes.pengxianzhe.org)」都不会显示任何结果。  
&emsp;&emsp;如果您知道问题的成因和解决方式，欢迎在源代码库指出。