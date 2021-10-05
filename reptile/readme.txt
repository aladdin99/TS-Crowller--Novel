说明:
爬取"奇迹小说网"小说网站的目录和内容并生成到本地的json文件中.
url: https://www.ximalaya.com/


选取一小说目录: https://www.ximalaya.com/youshengshu/4756811/
选取一章节: https://www.qijizuopin.com/book/read/1355/566311


技术栈点:
superagent: 伪造请求.
cheerio: 类似jquery操作dom节点包.

结构类型：组合设计模式。
设计模式：单例模式（"书旗小说网"）

目录结构：
./src/crowller.ts      ------->  存放 TS 爬虫公共基础类。
./src/crowllerBase.ts  ------->  存放 TS 爬虫公共基础子类。

./src/controller       ------->  配置 不同网站下需要爬虫的url地址，入参以及爬取之后存放在本地的地址。
    ./src/controller/HimalayanController.ts     ----->  "奇迹小说网" 爬取首页榜单、章节目录、章节内容
    ./src/controller/ShuqiController.ts         ----->  "书旗小说网" 爬取首页【主编强推】榜单。(采用单例模式)
    ./src/controller/...                        ----->  其它网站，后续可追加

./src/service          ------->  操作 网页 DOM 节点，处理需要返回的数据内容。
    ./src/service/HimalayanService.ts     ----->  "奇迹小说网" 爬取首页榜单、章节目录、章节内容
    ./src/service/ShuqiService.ts         ----->  "书旗小说网" 爬取首页【主编强推】榜单。(采用单例模式)
    ./src/service/...                     ----->  其它网站，后续可追加

./data                 ------->  存放 数据生成 json 格式。
./build                ------->  存放 TS编译生成的JS文件。


package.json文件配置：
方式一:
"scripts": {
    // 启动运行某个文件命令
    "dev": "ts-node ./src/controller/ShuqiController.ts && ts-node ./src/controller/HimalayanController.ts",
    // 编译ts文件为js文件，-w 全局监听时刻编译。
    "build": "tsc -w", 
    // 使用nodemon全局监听，改变时重新运行以下文件。
    "start": "nodemon node ./build/controller/ShuqiController.js"
  },
  // 全局监听下，忽视某些不必要的文件.
  "nodemonConfig": {
    "ignore": [
      "data/*"
    ]
  },

方式二:
"scripts": {
    "devx": "ts-node ./src/controller/ShuqiController.ts && ts-node ./src/controller/HimalayanController.ts",
    "dev:build": "tsc -w",
    "dev:start": "nodemon node ./build/controller/ShuqiController.js",
    "dev": "concurrently npm:dev:*"
  },

npm install concurrently -D  支持并行允许scripts命令
"dev:build" "dev:start"  代表在开发环境下运行.
"dev":"concurrently npm:dev:*" 并行运行 dev: 开头的scripts命令.



启动命令:
 npm install
 npm run dev    ----> 仅编译了"书旗小说网"API



tsconfig.json文件配置:
"outDir": "./build", 编译ts文件到指定的 ./build 目录下.


学习点:
关于TS类\接口\继承知识的掌握.


欠缺点:
付费章节需要标志并过滤.