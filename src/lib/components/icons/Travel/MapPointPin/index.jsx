import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"

import { Icon } from "lib/components"

const MapPointPin = createIcon({
  displayName: "MapPointPin",
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
        <path d="M17.327,7.179c0,-2.86 -2.385,-5.179 -5.327,-5.179c-2.942,0 -5.327,2.319 -5.327,5.179c0,3.023 3.226,6.27 4.657,7.562c0.383,0.345 0.957,0.345 1.34,0c1.431,-1.292 4.657,-4.539 4.657,-7.562Z" />
        <path d="M13.2537,6.08056c0.6924,0.683418 0.6924,1.79146 0,2.47487c-0.6924,0.683418 -1.815,0.683418 -2.5074,0c-0.6924,-0.683418 -0.6924,-1.79146 0,-2.47487c0.6924,-0.683418 1.815,-0.683418 2.5074,-8.88178e-16" />
        <path d="M7.556,10.177l-4.556,1.823v8l5,-2l4,3l4,-3l5,2v-8l-4.556,-1.823" />
      </g>
      <path xmlns="http://www.w3.org/2000/svg" fill="none" d="M0,0h24v24h-24Z" />
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={MapPointPin} {...rest} />
}

export default memo(CustomIcon)
