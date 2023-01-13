import { memo } from "react"

import { Box, Flex, Avatar, Text } from "@chakra-ui/react"
import { capitalizeString, getFormattedAvatarUrl } from "lib/utils/transforms/string"

function PersonItem({ person, user, src, primaryText, secondaryText, ...rest }) {
  return (
    <Flex align="center" gap={2} {...rest}>
      <Avatar src={src || getFormattedAvatarUrl(person || user)} />
      <Box>
        <Text>{capitalizeString(primaryText)}</Text>
        <Text textAlign="left" variant="secondary">
          {secondaryText}
        </Text>
      </Box>
    </Flex>
  )
}

export default memo(PersonItem)
