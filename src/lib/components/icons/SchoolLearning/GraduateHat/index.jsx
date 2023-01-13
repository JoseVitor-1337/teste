import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"

import { Icon } from "lib/components"

const GraduateHat = createIcon({
  displayName: "GraduateHat",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g
        xmlns="http://www.w3.org/2000/svg"
        strokeLinecap="round"
        strokeWidth="1.419"
        stroke="currentColor"
        fill="none"
        strokeLinejoin="round"
      >
        <path d="M9.703,4.095l-6.174,3.43c-1.298,0.721 -1.298,2.587 0,3.308l6.174,3.43c1.428,0.793 3.165,0.793 4.594,0l6.174,-3.43c1.298,-0.721 1.298,-2.587 0,-3.308l-6.174,-3.43c-1.429,-0.793 -3.165,-0.793 -4.594,-8.88178e-16Z" />
        <path
          strokeWidth="1.4167"
          d="M5.991,12.2v3.924c0,0.949 0.475,1.834 1.264,2.359l1.607,1.069c1.901,1.264 4.375,1.264 6.275,0l1.607,-1.069c0.79,-0.525 1.264,-1.411 1.264,-2.359v-3.924"
        />
      </g>
      <path xmlns="http://www.w3.org/2000/svg" fill="none" d="M0,0h24v24h-24Z" />
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={GraduateHat} {...rest} />
}

export default memo(CustomIcon)
