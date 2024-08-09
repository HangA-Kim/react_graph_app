"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./services/database");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 8081;
// const corsOrigin =
//   process.env.NODE_ENV === "development" ? ["http://localhost:3000"] : [""];
// app.use(cors({ credentials: true, origin: '["http://localhost:3000"]' }));
const allowedOrigins = ["http://localhost:3000", "http://localhost:3001"];
const options = {
    origin: allowedOrigins,
};
app.use((0, cors_1.default)(options));
// app.use(cors());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Typescript + Node.js + Express Server");
});
function createGet(dicName, tableName) {
    app.get("/" + dicName, (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield database_1.pool.query("SELECT * FROM " + tableName);
            return res.status(200).json(result.rows);
        }
        catch (error) {
            console.error("post ", dicName, error);
            return res.status(500).json({ error });
        }
    }));
}
createGet("visitors", "visitors");
createGet("customers", "customers");
createGet("revenue", "revenue");
createGet("targetReality", "target_reality");
createGet("topProducts", "top_products");
createGet("salesMap", "sales_map");
createGet("volumeServices", "volume_services");
app
    .listen(port, () => {
    console.log(`[server]: Server is running at <http://localhost>:${port}`);
})
    .on("error", (error) => {
    throw new Error(error.message);
});
