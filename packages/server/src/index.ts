import { createServer } from "http";

import app from "./app";
import { connectDatabase } from "./database";
import { config } from "./config";

(async () => {
    await connectDatabase();

    const server = createServer(app.callback());

    server.listen(config.PORT, () => {
        // eslint-disable-next-line
        console.log(`server running on port :${config.PORT}`);
    });
})();