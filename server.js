const http = require("http");4

http
.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });

    if(req.url === "/produto"){
        res.end(JSON.stringify({
            message: "rota de produto"
        }))
    }

    if(req.url === "/usuario") {
        res.end(JSON.stringify({
            message: "rota de Usuario"
        }))
    }

    res.end(JSON.stringify({
        message: "Qualquer outra Rota"
    }))
})
.listen(3333, () => console.log("servidor ouvindo a porta 3333"));
