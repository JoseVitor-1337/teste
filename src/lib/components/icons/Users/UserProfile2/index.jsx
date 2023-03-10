import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"

import { Icon } from "lib/components"

const UserProfile2 = createIcon({
  displayName: "UserProfile2",
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
        <path d="M9.91421,10.1788c0.781049,0.781049 0.781049,2.04738 0,2.82843c-0.781049,0.781049 -2.04738,0.781049 -2.82843,0c-0.781049,-0.781049 -0.781049,-2.04738 -8.88178e-16,-2.82843c0.781049,-0.781049 2.04738,-0.781049 2.82843,0" />
        <path d="M15,11h4" />
        <path d="M18,14.5h-3" />
        <path d="M12,18.041c-0.17,-0.427 -0.433,-0.811 -0.771,-1.124v0c-0.571,-0.529 -1.321,-0.824 -2.1,-0.824h-1.258c-0.779,0 -1.529,0.294 -2.1,0.824v0c-0.338,0.312 -0.601,0.696 -0.771,1.124" />
        <path d="M13,7h-2c-0.552,0 -1,-0.448 -1,-1v-3c0,-0.552 0.448,-1 1,-1h2c0.552,0 1,0.448 1,1v3c0,0.552 -0.448,1 -1,1Z" />
        <path d="M10,5h-5.959c-1.127,0 -2.041,0.914 -2.041,2.041v11.959c0,1.105 0.895,2 2,2h16c1.105,0 2,-0.895 2,-2v-12c0,-1.105 -0.895,-2 -2,-2h-6" />
      </g>
      <path xmlns="http://www.w3.org/2000/svg" fill="none" d="M0,0h24v24h-24Z" />
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={UserProfile2} {...rest} />
}

export default memo(CustomIcon)
