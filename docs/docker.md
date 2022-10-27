# NodeJS docker部署
## docker

### 介绍

> Docker 是一个开源的应用容器引擎，基于 [Go 语言](https://www.runoob.com/go/go-tutorial.html) 并遵从 Apache2.0 协议开源。
>  
> Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。
>  
> 容器是完全使用沙箱机制，相互之间不会有任何接口（类似 iPhone 的 app）,更重要的是容器性能开销极低


### 安装

可以以ubuntu为例，一步步按照的文档，安装完docker

```bash
sudo docker ps -a #查看所有运行的docker
```

## node.js

### node项目

以打包后的项目为准

在新建一个项目目录，放置打包后的代码

### 1.创建一个`Dockerfile`的文件

在项目目录的同层级创建文件

```bash
touch Dockerfile
```

写入内容，比如我们的项目

```bash
#拉取node镜像
FROM node:14
#创建项目目录
RUN mkdir -p /opt/offical
#docker镜像的运行目录
WORKDIR /opt/offical
#拷贝代码到目录
COPY /offical /opt/offical
#安装依赖
RUN npm install
#暴露端口
EXPOSE 3000
#运行项目
CMD [ "npm", "start" ]
```

这是一个最简单的dockerfile，都可以参考这个文件来创建docker镜像

### 2.创建`.dockerignore` 文件

```bash
node_modules
npm-debug.log
```

这个类似于gitignore文件，忽略某些文件或目录

### 3.构建镜像

```bash
 sudo docker build -t mynodeapp .
```

查看你已经构建的镜像

```bash
sudo docker images
```

### 4.运行镜像

```bash
sudo docker run -e TZ=Asia/Shanghai -d -p 10010:3000 mynodeapp
```

使用 `-d` 模式运行镜像将以分离模式运行 Docker 容器，使得容器在后台自助运行。开关符 `-p` 在容器中把一个公共端口导向到私有的端口，请用以下命令运行你之前构建的镜像

有时候时区还需要调整，记得加一下

查看已经运行的docker

```bash
sudo docker ps -a
```

### 5.我们的发布

`一般我们自己项目`的发布目前还是采用了`docker`的发布，采用了`build image`

一般的操作步骤：

```bash
#查看当前所有运行的docker
sudo docker ps -a 
#将当前运行的docker停止，并删除
sudo docker stop xxxx 
sudo docker rm xxxx
#到项目目录下
cd /data/XXX/xxx-admin
#删除目前的项目目录
sudo rm -rf xxxx
#上传项目文件
sudo rz 
#解压项目文件
sudo unzip xxxx
#build 镜像
sudo docker build -t mynodeapp .
#运行 镜像
sudo docker run -e TZ=Asia/Shanghai -d -p 10010:3000 mynodeapp
#查看docker镜像
sudo docker images 
#删除旧的docker 镜像
sudo docker image rm xxxx
```

# 指南

还发现了一篇文章，讲的挺好的，是关于对镜像的优化

[NodeJS 服务 Docker 镜像极致优化指北--来自腾讯AlloyTeam](https://mp.weixin.qq.com/s/QfHHJnzD4vhenjFcFSNMhQ)
