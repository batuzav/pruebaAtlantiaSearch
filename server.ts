import express, { Application } from "express";
import cors from "cors";
import test1Routes from "./routes/test1.routes"
import test2Routes from "./routes/test2.routes"
import { connect } from "mongoose";


class Server {
    private app: Application
    private port: string
    private paths = {
        test1: '/prueba1',
        test2: '/prueba2'
    }

    constructor() {
        this.app = express()
        this.port = process.env.PORT ?? "8000"

        this.database()
        this.middlewares()
        this.routes()
    }

    async database() {
        await connect(process.env.DB ?? '');
    }

    middlewares() {
        this.app.use( cors() )
        this.app.use( express.json() )
    }

    routes() {
        this.app.use(this.paths.test1, test1Routes)
        this.app.use(this.paths.test2, test2Routes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("El servidor esta corriendo en el puerto: ", this.port)
        })
    }
}


export default Server