## 项目初始配置

```
yarn global add vue-cli
vue init webpack my-project
yarn run dev
```

- 1px 边框解决：引入 border.css
- 移动端 300ms 点击延迟解决方案：`yarn add fastclick —save`
- 安装 stylus

  - `yarn add stylus --save`
  - `yarn add stylus-loader --save`

- 安装轮播插件

  - yarn add vue-awesome-swiper@2.6.7 --save

- 关于 rem

  - html{ font-size: 50px}
  - 1rem = html font-size = 50px

- stylus 提取公共颜色变量
- build/webpack.base.conf.js 中配置简写名

```js
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'styles': resolve('src/assets/styles'),
      'common': resolve('src/common'),
    }
  },
```

- git 分支
  - 查看远程分支：git branch -r
  - 查看所有分支以及当前分支：git branch -a
  - 本地创建新分支：git branch [branch name]
  - 切换到新分支：git checkout [branch name] index-swiper
  - 创建分支的同时切换到该分支上：git checkout -b [branch name]
  - 删除分支：git branch -D [branch name]
