# node.js代码混淆
* * *
## 前言
我们的后台项目一般都使用 __vue+element__ 的脚手架，然后前端打包 __npm run build__ 会生成一个dist目录，这个dist目录就是前端build后的代码，我们把项目跑起来只需要起一个 __http server__ 即可

## 前端+后端
前端在 __package.json__ 下修改build命令
```
   "scripts": {
    "dev": "vue-cli-service serve",
    "build:prod": "vue-cli-service build && cp -r dist ./express/",
    "build:stage": "vue-cli-service build --mode staging",
  }, 
```
主要是 *build* 完把 *dist* 目录copy到*express* 目录下
我们的后台管理平台是基于 __node.js__ 的 __express__ 的框架，所以将前端的dist目录打包后，只需要在 __express__ 的 *app.js* 下引用路由
```
app.use('/static', express.static(path.resolve(__dirname, './dist/static')))
app.get('*', (req, res) =>
  res.send(
    fs.readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf-8')
  )
)
```
这样我们运行 __express__ 就可以直接访问前端的项目

```
    npm run start
```
## 问题
### 1.代码泄露
我们把server端的代码打包上传到服务器，运行，代码会存在服务器里面，虽说前端代码已经打包，但是服务端的代码没有任何加密，所以源码全部可见，存在一定的泄露风险。
### 2.安全
前端代码所说已经打包，但是一些key，变量都如果都存在前端，也会有安全风险，所以我们的项目在前端项目，没有环境变量需要根据不同企业的需求重新打包，也没有配置任何因为开发环境生产坏境的配置
### 3.开发vs打包
如果目前要引入混淆，需要对代码目录做一些调整，开发跟打包又是不一样的操作，所以我们这边开始着手对代码项目目录做一些调整

## 实现
### 代码混淆
前端的代码我们知道有 *webpack* 之类的构建工具，基本是非常常见的，但是我们在写后台 *node.js* 的项目很多时候都是透明的，所以我们对代码也需要压缩混淆
方案 |以下引用了掘金的一篇文章[如何保护价值上千万的Node.js源代码？](https://juejin.cn/post/6844903953323261965)
>混淆
> * [JavaScript obfuscator](https://github.com/javascript-obfuscator/javascript-obfuscator)-一个强大的JS混淆器。
> * [萨满科技](http://www.jshaman.com)-一套JS代码安全问题解决方案。

>编译
> * [bytenode](https://github.com/OsamaAbbas/bytenode)，一个极简的Node.js字节码编译器。


>打包
> * [ncc](https://github.com/zeit/ncc) 可以把Node.js项目打包成一个js单文件，支持 TypeScript，动态导入。
> * [pkg](https://github.com/zeit/pkg) 可以把Node.js项目打包成一个二进制的可执行文件，pkg不支持动态导入，但是会将Node本身一起打包，可以实现在没安装Node.js的环境运行。
> * [pmq20/node-packer](https://github.com/pmq20/node-packer) 也能打包成一个二进制的可执行文件，它的优势在于支持各种形式的require, 也支持C++模块。可惜项目已经两年没更新了，只支持到Node.js 8.3.0, 对于更高版本的支持，请移步slee047/node-packer。
>> 作者：Winston_Lee
>> 链接：https://juejin.cn/post/6844903953323261965
>> 来源：掘金
>> 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
### JavaScript Obfuscator
这个项目有一个在线混淆的网站[obfuscator.io](https://obfuscator.io/)
先全局安装 __javascript-obfuscator__
```
    npm i javascript-obfuscator -g
```
在 *express* 目录 *package.json* 同层目录下新建文件 *javascript-obfuscator.json*
```
{
  "compact": true,
  "controlFlowFlattening": true,//默认 false。设为 true，表示开启代码控制流展平，这是源代码的一种结构转换，使代码增大且变得难以理解。
  "controlFlowFlatteningThreshold": 0.75,//和 controlFlowFlattening配合，表示代码控制流展平的概率，此设置对于大代码影响较大，大量的控制流转换会减慢代码速度并增加代码大小。
  "deadCodeInjection": true,//默认false。设为true，表示将添加随机废代码到被混淆代码中
  "deadCodeInjectionThreshold": 0.4,//设置废代码注入的百分比。值范围是从0到1，如果为0等同于 deadCodeInjection为false。
  "debugProtection": false,
  "debugProtectionInterval": false,
  "disableConsoleOutput": true,
  "identifierNamesGenerator": "hexadecimal",
  "log": false,
  "renameGlobals": false,
  "rotateStringArray": true,
  "selfDefending": true,
  "stringArray": true,//删除字符串文字并将其放置在特殊数组中。例如，var m=“Hello World”中的字符串“Hello World”，将被替换为var m=x12c456[0x1]；
  "stringArrayEncoding": "base64",//使用 base64或 rc4对stringArray影响的所有字符串文本进行编码，并插入用于在运行时对其进行解码的特殊代码
  "stringArrayThreshold": 0.75,//此设置调整将字符串文本插入stringArray的概率（从0到1）。
  "transformObjectKeys": true,
  "unicodeEscapeSequence": false
}
```
在目录下运行
```
    javascript-obfuscator ./ --output ./obfuscated --exclude node_modules --config javascript-obfuscator.json   
```
### 项目打包
在运行完命令后，发现相关的代码已经是混淆后代码了

但是我们发现在输出的目录下无法运行项目，还缺少了一些文件，比如 *package.json* ，所以我们在压缩代码后，把一些无法压缩的文件 __copy__ 到输出的目录下
这里我们改进一下我们的 *package.json* ，新增一条script
```
"obfuscator": "javascript-obfuscator ./ --output ./obfuscated --exclude node_modules,public,dist,obfuscated --config javascript-obfuscator.json && cp -rf ./{bin,dist,key,modules,public,views,package.json} ./obfuscated/"
```

这里命令是对一些无需压缩的目录做一些排除，比如 *node_modules,public,dist,obfuscated* 
然后混淆后把一些需要的目录文件copy到混淆后的目录下，比如 *bin,dist,key,modules,public,views,package.json* 
这样后续用户拿到了 __obfuscated__ 文件就是一个完整的混淆后的后台 __express__ 项目，只需要几步就可以运行项目
```
npm install 
npm run start
```
用户也可以自行修改运行端口，在 __bin/www__ 下，也可以修改数据库配置，也可以自行修改替换 __https__ 证书