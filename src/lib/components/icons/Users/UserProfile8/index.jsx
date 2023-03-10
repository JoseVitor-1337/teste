import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"

import { Icon } from "lib/components"

const UserProfile8 = createIcon({
  displayName: "UserProfile8",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g strokeLinecap="round" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinejoin="round">
        <path d="M10.091,8.15901c0.87868,0.87868 0.87868,2.3033 0,3.18198c-0.87868,0.87868 -2.3033,0.87868 -3.18198,0c-0.87868,-0.87868 -0.87868,-2.3033 0,-3.18198c0.87868,-0.87868 2.3033,-0.87868 3.18198,0"></path>
        <path d="M2,18.5v-12.959c0,-1.127 0.914,-2.041 2.041,-2.041h15.959c1.105,0 2,0.895 2,2v13c0,1.105 -0.895,2 -2,2h-16c-1.105,0 -2,-0.895 -2,-2Z"></path>
        <path d="M15,9.5h4"></path>
        <path d="M17.4,13.5h-2.4"></path>
        <path d="M12.095,16.5c-0.175,-0.439 -0.445,-0.833 -0.792,-1.154v0c-0.587,-0.544 -1.357,-0.846 -2.157,-0.846h-1.292c-0.8,0 -1.57,0.302 -2.157,0.846v0c-0.347,0.321 -0.617,0.715 -0.792,1.154"></path>
      </g>
      <path fill="none" d="M0,0h24v24h-24Z"></path>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={UserProfile8} {...rest} />
}

export default memo(CustomIcon)
