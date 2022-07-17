import express from "express";
import router from "./routes/Table.routes.js";
import config from "config";
import cors from "cors";

const app = express();
const port = process.env.PORT || config.get("port");

app.use(express.json());
app.use(cors())
app.use(router);

app.listen(port, () => {
    console.log(`Server has been launched on port ${ port }`);
})