### React Native学习札记1
### React Native环境搭建
----------------
>欢迎使用React Native！这篇文档会帮助你搭建基本的React Native开发环境。如果你已经搭好了环境，那么可以尝试一下编写<a href=“http://reactnative.cn/docs/0.38/tutorial.html” target="_blank" style="text-decoration:none;">HelloWorld</a>。——<a href=“http://reactnative.cn/docs/0.38/getting-started.html#content” target="_blank" style="text-decoration:none;">[ 搭建开发环境 ]</a>

本文以MacOS系统为前提,主要介绍mac平台上开启 react native 学习旅程。

### 安装
#### 必须的软件（此处只做各软件命令展现）
#### Homebrew
<a href=“http://brew.sh/” target="_blank" style="text-decoration:none;">Homebrew</a>,Mac系统的包管理器，用于安装NodeJS和一些其他必需的工具软件。

>/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

⚠️ 在Max OS X 10.11（El Capitan)版本中，homebrew在安装软件时可能会碰到/usr/local目录不可写的权限问题。可以使用下面的命令修复：

>sudo chown -R 'whoami' /usr/local

#### Node
用Homebrew来安装<a href=“https://nodejs.org/” target="_blank" style="text-decoration:none;">Node.js.</a>

><font color='red'>React Native需要NodeJS 4.0或更高版本。本文发布时Homebrew默认安装的是最新版本，一般都满足要求。</font>

>brew install node

安装完node后建议设置npm镜像以加速后面的过程（或使用科学上网工具）。
>npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global

#### Yarn、React Native的命令行工具（react-native-cli）
<a href=“http://yarnpkg.com/” target="_blank" style="text-decoration:none;">Yarn</a>是Facebook提供的替代npm的工具，可以加速node模块的下载。React Native的命令行工具用于执行创建、初始化、更新项目、运行打包服务（packager）等任务。
>npm install -g yarn react-native-cli

如果你看到<font color="red">EACCES: permission denied</font>这样的权限报错，那么请参照上文的homebrew译注，修复<font color="red">/usr/local</font>目录的所有权：
>sudo chown -R 'whoami' /usr/local

#####推荐工具（来自于Facebook）
><a href=“https://facebook.github.io/watchman/docs/install.html” target="_blank" style="text-decoration:none;">Watchman</a> 捕捉文件变化，实现实时刷新。
><a href=“http://www.flowtype.org/” target="_blank" style="text-decoration:none;">Flow</a>是一个静态的JS类型检查工具。可根据自身需要自己下载（brew install ——）

#### 版本控制
React Native目前需要<a href=“https://developer.apple.com/xcode/downloads/” target="_blank" style="text-decoration:none;">Xcode 7.0</a>,你也可以直接下安装Git命令如下：
>npm install git

#### 开发工具
推荐使用<a href=“https://www.jetbrains.com/webstorm/” target="_blank" style="text-decoration:none;">WebStorm</a>或<a href=“http://www.sublimetext.com/” target="_blank" style="text-decoration:none;">Sublime Text</a>来编写React Native应用。
#### 运行模拟器（关键）
- Android Studio 包含Android SDK和模拟器,注意AS需要Java Development Kit [JDK] 1.8或更高版本。
- <a href="https://www.genymotion.com/" target="_blank" style="text-decoration:none;">Genymotion</a> 可自行百度安装。

#### 测试安装
>```
react-native init AwesomeProject
cd AwesomeProject
react-native run-android
```

#### 到此结束
>重要：如果阅读完本文档后还碰到很多环境搭建的问题，我们建议你还可以再看看由<a href=“http://reactnative.cn/docs/0.38/getting-started.html#content” target="_blank" style="text-decoration:none;">React Native中文社</a>提供的<a href=“http://v.youku.com/v_show/id_XMTQ4OTYyMjg4MA==.html” target="_blank" style="text-decoration:none;">环境搭建视频教程</a>、<a href=“http://bbs.reactnative.cn/topic/10” target="_blank" style="text-decoration:none;">windows环境搭建文字教程</a>、以及<a href=“http://bbs.reactnative.cn/topic/130” target="_blank" style="text-decoration:none;">常见问题。</a>

-----------------------

### 参考网站
- <a href=“http://reactnative.cn/docs/0.38/getting-started.html#content” target="_blank" style="text-decoration:none;">React Native中文社--搭建开发环境</a>
- <a href=“http://bbs.reactnative.cn/topic/10” target="_blank" style="text-decoration:none;">windows环境搭建文字教程</a>
- <a href=“http://bbs.reactnative.cn/topic/130” target="_blank" style="text-decoration:none;">常见问题</a>


	
