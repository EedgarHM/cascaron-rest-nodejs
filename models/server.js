
const express = require('express')


class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT

        // rutas y path del api para usuarios
        this.userPath = '/api/usuarios'
        this.userRoutes= require('../routes/userRoutes');
        
        this.middlewares()
        this.routes()
    }


    middlewares(){

        // Lectura y parseo del body
        this.app.use( express.json() )


        // Contenido estatico
        this.app.use(express.static('public'))
    }

    routes (){
        this.app.use(this.userPath, this.userRoutes)
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log(`server ready on: http://localhost:${this.port}`);
        })
    }
}



module.exports = Server;