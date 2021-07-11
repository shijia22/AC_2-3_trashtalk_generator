# 幹話產生器

這是 AC 2-3 學期 A5 用 Node.js、Express 所幹話產生器

## Features

- 使用者選擇角色後按「產生幹話」即可隨意產出一句話

## 環境建置與需求 (prerequisites)

- Visual Studio Code - 開發環境
- express - 4.17.1
- express - handlebars 5.3.2
- npm - a JavaScript package manager
- body-parser - 1.19.0
- nodemon - 可讓網頁即時呈現套件
- nvm version v14.17.0
- Bootstrap v4.6.0
- jQuery v3.5.1
- popperjs v1.16.1

## 安裝與執行步驟

1. 打開終端機，clone 此專案至本機電腦
   `https://github.com/shijia22/AC_2-3_trashtalk_generator.git`
2. 開啟終端機，進入存放此專案資料夾
   `cd AC_2-3_trashtalk_generator`
3. 安裝 npm 套件
   `npm install`
4. 啟動專案
   `npm run dev`
5. 啟動 nodemon
   `nodemon app.js`
6. 出現以下訊息後，即可在 http://localhost:3000 開始使用
   `App is running on port 3000.`

## 待修復

- 下方輸出框 + 按鈕可以置中整頁（左右兩旁留空）
- 將程式碼優化為可以使用 JSON 匯入便於優化
