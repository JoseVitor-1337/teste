import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"

import { Icon } from "components"

const BrokenLinkUnlinkAttachment5 = createIcon({
  displayName: "BrokenLinkUnlinkAttachment5",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g strokeLinecap="round" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinejoin="round">
        <path d="M10.92 16.646l-1.971 1.971c-1.361 1.361-3.567 1.361-4.928 0v0c-1.361-1.361-1.361-3.567 0-4.928l1.971-1.971"></path>
        <path d="M14.728 8.762h2.788c1.924 0 3.485 1.56 3.485 3.485v0c0 1.924-1.56 3.485-3.485 3.485h-2.788"></path>
        <path d="M8.41 4.36l.5 1.48"></path>
        <path d="M12.44 4.49l-.78 1.58"></path>
        <path d="M5.39 6.96l1.47.73"></path>
      </g>
      <path fill="none" d="M24 0h-24v24h24v-24Z"></path>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={BrokenLinkUnlinkAttachment5} {...rest} />
}

export default memo(CustomIcon)
