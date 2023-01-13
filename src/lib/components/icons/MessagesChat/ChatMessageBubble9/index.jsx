import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"

import { Icon } from "lib/components"

const ChatMessageBubble9 = createIcon({
  displayName: "ChatMessageBubble9",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g
        xmlns="http://www.w3.org/2000/svg"
        strokeLinecap="round"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinejoin="round"
      >
        <path d="M10.1,19.3c0,0 -3.5,1.8 -3.5,1.8c0,-1.2 0,-2.4 0,-3.2c-2.2,-1.6 -3.6,-3.9 -3.6,-6.6c0,-4.5 4,-8.2 9,-8.2c5,0 9,3.6 9,8.2v0c0,4.5 -4,8.2 -9,8.2c-0.6,0 -1.3,-0.1 -1.9,-0.2" />
        <path d="M15.9,13.7c-2.2,2.2 -5.7,2.2 -7.9,0" />
        <path d="M10,8.7v1" />
        <path d="M14,8.7v1" />
      </g>
      <path xmlns="http://www.w3.org/2000/svg" fill="none" d="M0,0h24v24h-24v-24Z" />
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={ChatMessageBubble9} {...rest} />
}

export default memo(CustomIcon)
