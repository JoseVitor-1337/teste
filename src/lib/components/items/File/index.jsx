import { memo } from "react"

import { Box, Flex, Image, Text } from "@chakra-ui/react"

import { convertSizeNumberToBytes } from "lib/utils/transforms/number"
import { getFileImage } from "lib/utils/assets"

function FileItem({ file }) {
  const fileImage = getFileImage(file.extension)
  return (
    <Flex align="center" gap={2}>
      <Image boxSize="40px" backgroundSize="cover" src={fileImage} alt={file.name} />
      <Box>
        <Text>{file.name}</Text>
        <Text textAlign="left" variant="secondary">
          {file.extension.toUpperCase()}, {convertSizeNumberToBytes(file.size)}
        </Text>
      </Box>
    </Flex>
  )
}

export default memo(FileItem)
