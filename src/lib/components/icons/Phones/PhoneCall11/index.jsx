import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"

import { Icon } from "lib/components"

const PhoneCall11 = createIcon({
  displayName: "PhoneCall11",
  viewBox: "0 0 24 24",
  path: (
    <>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M10.856,13.144c-1.17,-1.17 -2.052,-2.48 -2.638,-3.809c-0.124,-0.281 -0.051,-0.61 0.166,-0.827l0.819,-0.818c0.671,-0.671 0.671,-1.62 0.085,-2.206l-1.174,-1.174c-0.781,-0.781 -2.047,-0.781 -2.828,0l-0.652,0.652c-0.741,0.741 -1.05,1.81 -0.85,2.87c0.494,2.613 2.012,5.474 4.461,7.923c2.449,2.449 5.31,3.967 7.923,4.461c1.06,0.2 2.129,-0.109 2.87,-0.85l0.651,-0.651c0.781,-0.781 0.781,-2.047 0,-2.828l-1.173,-1.173c-0.586,-0.586 -1.536,-0.586 -2.121,0l-0.903,0.904c-0.217,0.217 -0.546,0.29 -0.827,0.166c-1.329,-0.587 -2.639,-1.47 -3.809,-2.64Z"
        strokeLinecap="round"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinejoin="round"
      />
      <path xmlns="http://www.w3.org/2000/svg" fill="none" d="M0,0h24v24h-24Z" />
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={PhoneCall11} {...rest} />
}

export default memo(CustomIcon)
