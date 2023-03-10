import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"

import { Icon } from "lib/components"

const RoomKey = createIcon({
  displayName: "RoomKey",
  viewBox: "0 0 24 24",
  path: (
    <>
      <defs>
        <path d="M0,0h24v24h-24v-24Z" id="a"></path>
      </defs>
      <g fill="none">
        <use xlinkHref="#a"></use>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M8,21v0c1.108,0 2.007,-0.898 2.008,-2.006l0.004,-4.044c0.964,-0.422 1.835,-1.128 2.411,-2.234c0.914,-1.754 0.739,-3.958 -0.504,-5.496c-2.03,-2.511 -5.828,-2.505 -7.849,0.018c-1.237,1.543 -1.406,3.748 -0.483,5.497c0.578,1.096 1.447,1.8 2.409,2.219l-0.004,4.035c-0.001,1.11 0.898,2.011 2.008,2.011Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M8.273,10.346c0,-0.163 -0.132,-0.294 -0.294,-0.294c-0.163,0.001 -0.294,0.133 -0.294,0.295c0,0.163 0.132,0.294 0.294,0.294c0.162,0 0.294,-0.132 0.294,-0.295"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M13.263,5.632c0,-1.454 -1.178,-2.632 -2.632,-2.632v0c-1.453,0 -2.631,1.178 -2.631,2.632v4.42"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M11.398,6.666l0.45,-0.45c0.781,-0.781 2.047,-0.781 2.828,0l5.737,5.737c0.781,0.781 0.781,2.047 0,2.828l-2.647,2.647c-0.781,0.781 -2.047,0.781 -2.828,0l-3.453,-3.453"
        ></path>
        <use xlinkHref="#a"></use>
      </g>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={RoomKey} {...rest} />
}

export default memo(CustomIcon)
