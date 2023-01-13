import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"

import { Icon } from "lib/components"

const MobileDevices = createIcon({
  displayName: "MobileDevices",
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
        <path d="M10,4v1.8c0,0.331 0.224,0.6 0.5,0.6h3c0.276,0 0.5,-0.269 0.5,-0.6v-1.8" />
        <path d="M10.88,17.5h2.24" />
        <path d="M9,4h6c1.105,0 2,0.895 2,2v12c0,1.105 -0.895,2 -2,2h-6c-1.105,0 -2,-0.895 -2,-2v-12c0,-1.105 0.895,-2 2,-2Z" />
      </g>
      <path xmlns="http://www.w3.org/2000/svg" fill="none" d="M0,0h24v24h-24Z" />
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={MobileDevices} {...rest} />
}

export default memo(CustomIcon)
