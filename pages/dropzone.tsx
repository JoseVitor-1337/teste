import { Center, VStack } from "@chakra-ui/react"

import { Dropzone } from "@lib/components/Dropzone"
import { FormatedFile } from "@lib/components/Dropzone/hooks/useDropzoneUpload"

export default function DropzonePage() {
  async function onUpload(files: FormatedFile[]) {
    console.log("files", files)
  }

  return (
    <Center height="100vh">
      <VStack maxWidth="500px">
        <Dropzone onUpload={onUpload} />
      </VStack>
    </Center>
  )
}
