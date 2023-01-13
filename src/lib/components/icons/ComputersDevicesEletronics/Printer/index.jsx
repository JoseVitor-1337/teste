import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"

import { Icon } from "lib/components"

const Printer = createIcon({
  displayName: "Printer",
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
        <path d="M16.814,8v-4c0,-0.552 -0.448,-1 -1,-1h-7.628c-0.552,0 -1,0.448 -1,1v4" />
        <path d="M17,11h1" />
        <path d="M7,17h-3c-0.552,0 -1,-0.448 -1,-1v-7c0,-0.552 0.448,-1 1,-1h16c0.552,0 1,0.448 1,1v7c0,0.552 -0.448,1 -1,1h-3" />
        <path d="M16,21h-8c-0.552,0 -1,-0.448 -1,-1v-6h10v6c0,0.552 -0.448,1 -1,1Z" />
      </g>
      <path xmlns="http://www.w3.org/2000/svg" fill="none" d="M0,0h24v24h-24Z" />
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={Printer} {...rest} />
}

export default memo(CustomIcon)
