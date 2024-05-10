export type ItemType = {
  videoLibraryId: number
  guid: string
  title: string
  dateUploaded: string
  views: number
  isPublic: boolean
  length: number
  status: number
  framerate: number
  rotation: number
  width: number
  height: number
  availableResolutions: string
  thumbnailCount: number
  encodeProgress: number
  storageSize: number
  captions: []
  hasMP4Fallback: boolean
  collectionId: string
  thumbnailFileName: string
  averageWatchTime: number
  totalWatchTime: number
  category: string
  chapters: []
  moments: []
  metaTags: []
  transcodingMessages: []
}

export type VideoListType = {
  libraryId: string
  videoId: string
  thumbnail: string
}
