import fetch from "node-fetch"
import dotenv from "dotenv"

dotenv.config()
const BUNNY_KEY: string = process.env.BUNNY_KEY ?? ""

const playlist = "239636"
const page = "1"
const itemsPerPage = "10000"

const url = `https://video.bunnycdn.com/library/${playlist}/videos?page=${page}&itemsPerPage=${itemsPerPage}&orderBy=date`

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    AccessKey: BUNNY_KEY,
  },
}

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err))
