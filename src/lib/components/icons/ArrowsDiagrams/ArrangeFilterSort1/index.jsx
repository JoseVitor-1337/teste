import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"

import { Icon } from "lib/components"

const ArrangeFilterSort1 = createIcon({
  displayName: "ArrangeFilterSort1",
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
        <path d="M10,8l-3,-3l-3,3" />
        <path d="M7,19v-14" />
        <path d="M14,16l3,3l3,-3" />
        <path d="M17,5v14" />
      </g>
      <path xmlns="http://www.w3.org/2000/svg" fill="none" d="M0,0h24v24h-24Z" />
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={ArrangeFilterSort1} {...rest} />
}

export default memo(CustomIcon)
