---
slug: docusaurus
title: docusaurus
tags: [docusaurus]
---

### 博客
- slug: 链接中的路由 blog之后的二级路由
- title: 标题
- tags: 文章分类 点击文章分类 会把所有有相同标签的文章列出来
- author: 作者
- author_title: 作者简介
- author_url: 作者主页
- author_image_url: 作者头像
  设置了作者的相关信息之后效果是这样的


  
  <img src={require('./images/docusaurus-2.png').default} />


### 自定义页面
自定义页面可以在src/pages 文件夹中添加
1. 直接添加文件，不区分大小写 对应的路由即 文件的名称
   <img src={require('./images/docusaurus-1.png').default}/>

   Backup.js -> 路由 /backup

   index.js -> 路由 /
2. 添加一个文件夹 文件夹的名称为一级路由 文件夹内的文件的路由与1相同 更多层级以此类推

### docusaurus.config.js 配置文件
配置文件的详细请看<a href='https://www.docusaurus.cn/docs/docusaurus.config.js'>详细配置</a>

### MDX

普通md文档引入图片在打包时不会被打包，src采用require引入时会背打包。
```jsx
 <img src={require('./images/docusaurus-2.png').default} />
```
欠着，网上资料比较少，等什么时候用到了新的再更新。
