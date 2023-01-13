import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"

import { Icon } from "lib/components"

const SendMessageSendShare = createIcon({
  displayName: "SendMessageSendShare",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g xmlns="http://www.w3.org/2000/svg" fill="none">
        <path d="M0,0h24v24h-24Z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M14.644,19.908l5.456,-14.72c0.297,-0.802 -0.484,-1.582 -1.285,-1.285l-14.725,5.46c-0.921,0.342 -0.849,1.668 0.104,1.907l6.834,1.717l1.707,6.816c0.24,0.954 1.567,1.027 1.909,0.105Z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19.87,4.13l-8.84,8.86"
        />
      </g>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={SendMessageSendShare} {...rest} />
}

export default memo(CustomIcon)
