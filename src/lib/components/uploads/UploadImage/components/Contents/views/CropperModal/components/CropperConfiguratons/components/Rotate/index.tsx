import { FC, memo } from "react"
import { Flex, IconButton, Text } from "@chakra-ui/react"

import { RotateRefreshLoading2 } from "lib/components/icons/Interface"

type Props = {
  cropper: Cropper
}

const RotateImage: FC<Props> = ({ cropper }) => {
  return (
    <Flex p={1} w="100%" borderBottomWidth="1px" borderColor="borderColor" justify="space-between" align="center">
      <Text>Rotação</Text>

      <Flex align="center" gap={2}>
        <IconButton
          variant="ghost"
          aria-label="Rotacionar 180° para esquerda"
          onClick={() => cropper.rotate(45)}
          icon={<RotateRefreshLoading2 transform="rotate(180deg)" />}
        />

        <IconButton
          variant="ghost"
          aria-label="Rotacionar 180° para direita"
          onClick={() => cropper.rotate(-45)}
          icon={<RotateRefreshLoading2 />}
        />
      </Flex>
    </Flex>
  )
}

export default memo(RotateImage)
