import fetch from "node-fetch"
import dotenv from "dotenv"
import { PrismaClient } from "@prisma/client"
import { ItemType, VideoListType } from "./type"

dotenv.config()
const prisma = new PrismaClient()
const assets = prisma.assets

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

const videoList: VideoListType[] = []

function removeFileExtension(fileName: string): string {
  return fileName.replace(/\.[^/.]+$/, "")
}

const res: any = await fetch(url, options)
  .then((res) => res.json())
  .then((data) => {
    data.items.forEach((item: ItemType) => {
      videoList.push({
        thumbnail: removeFileExtension(item.title),
        libraryId: item.videoLibraryId.toString(),
        videoId: item.guid,
        meta: `${Math.floor(item.length / 60)}:${item.length % 60}`,
      })
    })
  })

console.log("video list: ", videoList)

videoList.forEach(async (video) => {
  await prisma.assets
    .updateMany({
      where: {
        thumbnail: video.thumbnail,
      },
      data: {
        playlist: video.libraryId,
        video: video.videoId,
        meta: video.meta,
      },
    })
    .catch((e) => {
      console.log(e)
    })
})
