#### 前言：来自开源博客软件，并非本人原创
## vue+node 实现的一套简易博客系统,包括博客前端展示页和博客后台管理页

## 简要技术栈：
 + vue2.0+vue-router+vue-resource
 + node+express+mongodb
 + 后台管理页的编辑器用的simplemde，支持markdown语法
 + markdown解析部分使用了marked这个库，语法高亮用highlight

### [博客在线地址](https://weiweiblog.herokuapp.com)（仅供临时预览）
 
![](https://github.com/linguowei/myblog/blob/master/PreviewImg/blog01.png)
---
![](https://github.com/linguowei/myblog/blob/master/PreviewImg/blog02.png)
---

### [博客后台管理页在线地址](https://weiweiblog.herokuapp.com/admin)（仅供临时预览）

![](https://github.com/linguowei/myblog/blob/master/PreviewImg/admin01.png)
---
![](https://github.com/linguowei/myblog/blob/master/PreviewImg/admin02.png)
---
![](https://github.com/linguowei/myblog/blob/master/PreviewImg/admin3.png)
---
![](https://github.com/linguowei/myblog/blob/master/PreviewImg/admin4.png)
---
### 本地查看方法

使用git 获取源码：
> git clone https://github.com/linguowei/myblog.git
1. 查看管理端
``` bash
cd myblog  # 进入项目根目录 
cd admin   # 进入管理端目录
npm install  # 安装依赖
npm run build # 打包
cd .. # 回到根目录
npm install # 安装依赖
node app.js  # 启动服务
localhost:9000/admin # 浏览器中查看
```
2. 查看前端
```bash
cd / # 在项目根目录下
npm run build # 打包
localhost:9000/  # 浏览器中查看
```
### License
[MIT](https://www.oschina.net/question/54100_9455)
