import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"
import { Icon } from "lib/components"

const FullScreenArrow = createIcon({
  displayName: "FullScreenArrow",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g strokeLinecap="round" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinejoin="round">
        <polyline points="17,3 21,3 21,7"></polyline>
        <line x1="15" x2="21" y1="9" y2="3"></line>
        <polyline points="7,21 3,21 3,17"></polyline>
        <line x1="9" x2="3" y1="15" y2="21"></line>
        <path d="M4 11v-5c0-1.105.895-2 2-2h5"></path>
        <path d="M20 13v5c0 1.105-.895 2-2 2h-6"></path>
      </g>
      <rect width="24" height="24" fill="none"></rect>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={FullScreenArrow} {...rest} />
}

export default memo(CustomIcon)
