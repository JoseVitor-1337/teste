import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"

import { Icon } from "lib/components"

const Arrow24 = createIcon({
  displayName: "Arrow24",
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
        <path d="M5,12h14" />
        <path d="M10,7l-5,5" />
        <path d="M10,17l-5,-5" />
      </g>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={Arrow24} {...rest} />
}

export default memo(CustomIcon)
