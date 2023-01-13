import { useState } from "react"
import { Center } from "@chakra-ui/react"

import UploadImage from "@lib/components/uploads/UploadImage"
import { Image } from "@lib/components/uploads/UploadImage/types"

export default function Home() {
  const [image, setImage] = useState("")
  const [images, setImages] = useState<Image[]>([
    { avatarId: 1, url: "https://randomuser.me/api/portraits/women/44.jpg" },
    { avatarId: 2, url: "https://randomuser.me/api/portraits/men/46.jpg" },
    { avatarId: 3, url: "https://randomuser.me/api/portraits/men/97.jpg" },
  ])

  async function onDelete(deleterdAvatarId: number) {
    setImages((oldImages) => {
      return oldImages.filter(({ avatarId }) => {
        return avatarId !== deleterdAvatarId
      })
    })
    return true
  }

  async function onUpdate(newImage: Image) {
    console.log("onUpdate", newImage)
    setImage(newImage.url)
    return true
  }

  async function onUpload(file: File) {
    setImage(URL.createObjectURL(file))
    return true
  }

  return (
    <Center height="100vh">
      <UploadImage onDelete={onDelete} onUpdate={onUpdate} onUpload={onUpload} defaultImage={image} images={images} />
    </Center>
  )
}
