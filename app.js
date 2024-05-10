"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const BUNNY_KEY = (_a = process.env.BUNNY_KEY) !== null && _a !== void 0 ? _a : "";
const playlist = "239636";
const page = "1";
const itemsPerPage = "10000";
const url = `https://video.bunnycdn.com/library/${playlist}/videos?page=${page}&itemsPerPage=${itemsPerPage}&orderBy=date`;
const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        AccessKey: BUNNY_KEY,
    },
};
(0, node_fetch_1.default)(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));
