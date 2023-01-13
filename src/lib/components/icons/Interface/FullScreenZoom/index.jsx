import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"
import { Icon } from "lib/components"

const FullScreenZoom = createIcon({
  displayName: "FullScreenZoom",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g strokeLinecap="round" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinejoin="round">
        <path d="M19 21h-14c-1.105 0-2-.895-2-2v-14c0-1.105.895-2 2-2h14c1.105 0 2 .895 2 2v14c0 1.105-.895 2-2 2Z"></path>
        <polyline points="14,6 18,6 18,10"></polyline>
        <polyline points="10,18 6,18 6,14"></polyline>
      </g>
      <rect width="24" height="24" fill="none"></rect>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={FullScreenZoom} {...rest} />
}

export default memo(CustomIcon)
