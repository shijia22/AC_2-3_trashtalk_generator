// 載入 express 並建構應用程式伺服器
const express = require('express')
const exphbs = require('express-handlebars')
const generateTrash = require('./generate_trash')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true })) 

// 設定首頁路由
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const talk = generateTrash(req.body)
  res.render('index', {talk: talk})
})

// 設定 port 3000
app.listen(3000, () => {
  console.log(`App is running on port ${port}.`)
})