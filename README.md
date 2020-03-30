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

- 安装城市选择下拉滑动插件 better-scroll

  - yarn add better-scroll --save

- 解决白屏

  - yarn add babel-polyfill --save

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

- config/index.js 中，代理转发

```js
   proxyTable: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/static/mock'
        }
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
  - 分支推送：git push --set-upstream origin index-swiper
  - 切换到主分支：git checkout master
  - 合并分支：git merge origin/index-swiper
  - 提交代码：git push

## vuex 实现数据共享

- yarn add vuex --save

```js
  import { mapState, mapMutations } from 'vuex'
  computed: {
    ...mapState(['city'])
  }
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
```

## keep-alive 优化性能

- keep-alive
  - 加载过就放内存中，下次不需要重新渲染，请求数据
  - 会增加一个勾子
  ```js
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
  ```
