import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"

import { Icon } from "lib/components"

const EmailLettersMail = createIcon({
  displayName: "EmailLettersMail",
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
        <path d="M3,6.782v0c0,0.591 0.293,1.144 0.782,1.475l5.981,4.053c1.355,0.918 3.133,0.918 4.488,0l5.966,-4.044c0.49,-0.33 0.783,-0.883 0.783,-1.474v-0.01c0,-0.984 -0.798,-1.782 -1.782,-1.782h-14.436c-0.984,0 -1.782,0.798 -1.782,1.782Z" />
        <path d="M3,7v10c0,1.105 0.895,2 2,2h14c1.105,0 2,-0.895 2,-2v-10" />
        <path d="M3.586,18.414l6.14,-6.14" />
        <path d="M14.281,12.281l6.13,6.13" />
      </g>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={EmailLettersMail} {...rest} />
}

export default memo(CustomIcon)
