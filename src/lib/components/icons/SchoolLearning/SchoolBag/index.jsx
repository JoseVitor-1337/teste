import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"

import { Icon } from "lib/components"

const SchoolBag = createIcon({
  displayName: "SchoolBag",
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
        <path d="M6,18.934h-1c-1.105,0 -2,-0.895 -2,-2v-2.453c0,-1.153 0.935,-2.088 2.088,-2.088h0.912" />
        <path d="M18,18.934h1c1.105,0 2,-0.895 2,-2v-2.5c0,-1.105 -0.895,-2 -2,-2h-1" />
        <path
          strokeWidth="1.6432"
          d="M14,17.894h-4c-0.552,0 -1,-0.448 -1,-1v-2c0,-0.552 0.448,-1 1,-1h4c0.552,0 1,0.448 1,1v2c0,0.553 -0.448,1 -1,1Z"
        />
        <path d="M15,6v-1c0,-1.105 -0.895,-2 -2,-2h-2c-1.105,0 -2,0.895 -2,2v1" />
        <path d="M13,10h-2" />
        <path
          strokeWidth="1.5492"
          d="M14,6h-4c-2.209,0 -4,1.791 -4,4v9c0,1.105 0.895,2 2,2h8c1.105,0 2,-0.895 2,-2v-9c0,-2.209 -1.791,-4 -4,-4Z"
        />
      </g>
      <path xmlns="http://www.w3.org/2000/svg" fill="none" d="M0,0h24v24h-24v-24Z" />
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={SchoolBag} {...rest} />
}

export default memo(CustomIcon)
