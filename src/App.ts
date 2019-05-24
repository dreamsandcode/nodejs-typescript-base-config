import * as express from "express";

class App {
    public express;
    public test: string;
    public abc: string;

    public constructor() {
        this.express = express();
        this.mountRoutes();
    }

    private mountRoutes(): void {
        const router = express.Router();
        router.get(
            "/",
            (req, res): void => {
                res.json({
                    message: "Hello World!"
                });
            }
        );

        this.express.use("/", router);
    }
}
export default new App().express;
