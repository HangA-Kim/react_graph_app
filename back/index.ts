import express, { Express, Request, Response } from "express";
import { pool } from "./services/database";
import cors from "cors";

const app: Express = express();
const port = 8081;

// const corsOrigin =
//   process.env.NODE_ENV === "development" ? ["http://localhost:3000"] : [""];
// app.use(cors({ credentials: true, origin: '["http://localhost:3000"]' }));

const allowedOrigins = ["http://localhost:3000", "http://localhost:3001"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
app.use(cors(options));
// app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Typescript + Node.js + Express Server");
});

function createGet(dicName: string) {
  app.get("/" + dicName, async (req: Request, res: Response) => {
    try {
      const result = await pool.query("SELECT * FROM " + dicName);
      return res.status(200).json(result.rows);
    } catch (error) {
      console.error("post ", dicName, error);
      return res.status(500).json({ error });
    }
  });
}

createGet("visitors");
createGet("customers");
createGet("revenue");
createGet("targetReality");
createGet("topProducts");
createGet("salesMap");
createGet("volumeServices");

app
  .listen(port, () => {
    console.log(`[server]: Server is running at <http://localhost>:${port}`);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
