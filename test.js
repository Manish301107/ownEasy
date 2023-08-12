const http = require('http')
const PORT = process.env.PORT || 3011
const server = http.createServer((req, res)=>{
    res.writeHead(200, ({"Content-Type": "application/json"}))
    res.write(`{
                "teamMember": [
                    {
                        "name": "Naveen Bansal",
                        "temperature": "12 °C",
                        "wind": "31 km/h"
                    },
                    {
                        "name": "Namita Thapar",
                        "temperature": "11 °C",
                        "wind": "19 km/h"
                    },
                    {
                        "name": "Aman Gupta",
                        "temperature": "+12 °C",
                        "wind": "19 km/h"
                    }
                ]
}`)
    res.end()
})

server.listen(PORT)