const http = require('http')
const port = process.env.PORT || 3000

http.createServer(function (req,res){
  res.write(`{
  name:"Manish",
  post:"CTO",
  age:"16",
  salary:"65000"
  }`)
  res.end()
}).listen(port)
