---
title: 缺陷
description: 内容问题和技术困难
sidebar_position: 3
---

### 索引延迟

&emsp;&emsp;本站右上角（Ctrl&thinsp;+&thinsp;K）搜索功能并不是在网页文件当中检索文本，而是用&thinsp;[**Algolia**](https://www.algolia.com/products)&thinsp;的免费 crawler&thinsp;功能生成索引。Algolia&thinsp;用他们的服务器访问本站，索引一遍，本站再访问他们的&thinsp;API&thinsp;接口，拿回最新索引。本来这顺理成章地可以「部署触发」，也就是在我每次上传改动或新内容到源代码库时自动生成新索引。然而&thinsp;Docusaurus&thinsp;唯一能完美支持的&thinsp;Algolia&thinsp;方式是在&thinsp;JavaScript&thinsp;语句中写密钥，而这个免费密钥又是用电子邮件发送附带网址信息的申请得到的。这种方式在&thinsp;Algolia&thinsp;的产品线中相对独立，无法与托管站点的服务器形成工作流协同。  
&emsp;&emsp;因此，我只能设定每天固定时间生成一次索引，间隔&thinsp;24&thinsp;小时。

&emsp;&emsp;所以，如果你发现某些文字内容是存在的，但在搜索框搜不到，请勿惊慌，说明这些文本上传还不到&thinsp;24&thinsp;小时，明天你就能搜到了。

### Markdown 链接对搜索功能的支持缺陷

&emsp;&emsp;受本人技术水平限制（也有可能是受此&thinsp;Docusaurus&thinsp;开发者的产品设计水平限制），此网站使用&thinsp;Markdown&thinsp;文件编辑内容的网页当中，使用&thinsp;Markdown&thinsp;扩展语法形成的网页链接，无论是文字内容，还是链接地址，在搜索框中均无法显示为搜索结果。  
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