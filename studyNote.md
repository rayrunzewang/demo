# 1.Web Learning

## 1.1 学习和笔记
- 有一个自己的笔记，按用途分类，可以随着个人发展随时修改
- 笔学习笔记上传到github
- 如何记笔记  
  1. frame and value 大方向  
  2. detail 记容易忘的或者重要的，其他的可以随时查  
- 有自己的学习方法  
- 如何快速上手一个操作实践
  - 语言的frame: document 或者 crash course
  - 立马上手练习：做实验-暴漏问题-解决问题-工作中不再出问题-基本上可以说你已经学会了20%/80%
  - JS 读书 80%/20% 没太有必要 
- apply to Python
## 1.2 Web 学习 Frame/ path
### 1.2.1 现代web的构成
  ![study-note-frontend-backend](./imgs/study-note-frontend-backend.png)
  1. 前端 frendent/client  
      - broswer 像后端发送请求
        - chrome
        - 火狐
        - IE
        - mobile app
        等
  2. 后端 backend/api
      - 接受请求，处理数据CRUD(数据库)，返回
### 1.2.2 前端
  1. HTML - 超文本标记语言
  2. CSS - 其他：SCSS, Jquery
  3. JavaScript
    - 前端浏览器 js 框架:Dom（html）API ,BOM(浏览) API, web api 发送请求
    - 后端服务器 js（node）-> 提供API
接口：
收音机  按钮 播放按钮 暂停按钮 - api 音量旋转按钮 - api
手机 音乐播放器 


- 为什么会有Oject: 高度抽象化，实现功能，提供信息，并且只提供必要信息，不浪费任何空间


js 数据类型
基本数据类型:
  - String  
  - Number  
  - Boolean 
  - Null
  - undefined
  
引用数据类型:
  - Object
  ```js
  // Tom's data

  let tom = {
  name: "tom",
  age: "40",

  job: function () {
    return "sold an icecream";
  },
  
  selfIntro: function () {
    return `my name is ${this.name}, i am ${this.age} years old, I sell Ice cream`;
   }
  }
  ```
  Array 特殊的Object
  ```js
  let tomsIcecream = {
    0: "vanilla",
    1: "chocolate",
    2: "coffee",
  }
  
  let tomsIcecreamArray = [
  "vanilla",
  "chocolate",
  "coffee",
  ]
  ```
  Function 特殊的Object

表示法：很像js object
xml

计划 开课前需要做到的

学习js(什么是 web 和 编程)和python的区别
写简单的网页
提前预习（打电话？问同学？看python crash course）
js和python的练习
匠人课
note - markedown

前端 后端 都会写的 data engineer