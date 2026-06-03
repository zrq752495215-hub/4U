# 4U 玩家人格测试

这是一个纯静态手机端网页小游戏，可以直接部署到 Vercel、GitHub Pages 或任意静态网页空间。

## 如何打开

直接打开 `index.html` 即可预览。也可以用本地预览服务打开当前文件夹，然后访问显示的网址。

如果预览链接打不开，可以双击 `open-preview.bat`。它会尝试启动本地预览；如果电脑没有可用的预览环境，会直接打开 `index.html`。

## 如何修改题目

打开 `data.js`，找到 `questions`。每道题有：

- `text`：题目文字
- `dimension`：对应维度，例如 `EI`、`SN`、`TF`、`JP`
- `options`：两个选项，每个选项的 `score` 写对应字母

## 如何修改结果文案

打开 `data.js`，找到 `results`。每种类型都可以修改：

- `title`：玩家称号
- `description`：趣味评价
- `position`：推荐队伍位置
- `partner`：最佳搭档类型
- `verdict`：公会鉴定意见

## 如何部署到 Vercel

1. 把整个文件夹上传到 GitHub 仓库。
2. 在 Vercel 新建项目并选择这个仓库。
3. Framework Preset 选择 `Other`。
4. Build Command 留空。
5. Output Directory 留空或填写 `.`。
6. 点击 Deploy。

部署成功后，把 Vercel 生成的网址发给别人，对方打开后就可以直接参与测试。

## 结果海报

结果页有 `生成结果海报` 按钮。点击后会生成一张 PNG 图片，手机上通常会弹出分享或保存入口，电脑上通常会直接下载图片。

## 文件说明

- `index.html`：网页入口
- `styles.css`：页面样式
- `data.js`：题目和结果内容
- `app.js`：答题、计分、复制和分享逻辑
- `assets/4u-home.webp`：首页和海报使用的 4U 图片
- `assets/personas/*.png`：16 种人格结果图，文件名对应人格类型，例如 `entj.png`
