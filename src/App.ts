import * as express from 'express';

class App {
    public express;

    public constructor() {
        this.express = express();
        this.mountRoutes();
    }

    private mountRoutes(): void {
        const router = express.Router();
        router.get(
            '/',
            (req, res): void => {
                res.json({
                    message: 'Hello World',
                });
            },
        );

        router.use(
            '/_healthcheck',
            (req, res): void => {
                res.status(200).json({ uptime: process.uptime() });
            },
        );

        this.express.use('/', router);
    }
}
export default new App().express;
