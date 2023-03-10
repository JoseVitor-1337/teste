import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"

import { Icon } from "lib/components"

const Chat7 = createIcon({
  displayName: "Chat7",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g fill="none">
        <path d="M0,0h24v24h-24Z"></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12.666,2c-3.387,-0.005 -6.51,1.828 -8.157,4.788c-1.647,2.96 -1.558,6.581 0.232,9.456l-1.741,4.756l4.755,-1.741c3.364,2.085 7.678,1.821 10.762,-0.66c3.084,-2.481 4.267,-6.638 2.951,-10.371c-1.315,-3.734 -4.844,-6.23 -8.802,-6.228v0Z"
        ></path>
      </g>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={Chat7} {...rest} />
}

export default memo(CustomIcon)
