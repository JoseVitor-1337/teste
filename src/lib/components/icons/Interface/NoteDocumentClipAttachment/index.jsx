import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"
import { Icon } from "lib/components"

const NoteDocumentClipAttachment = createIcon({
  displayName: "NoteDocumentClipAttachment",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g fill="none">
        <path d="M0 0h24v24h-24Z"></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M5 9v-5.5c0-.828.672-1.5 1.5-1.5v0c.828 0 1.5.672 1.5 1.5v6.5c0 1.657-1.343 3-3 3v0c-1.657 0-3-1.343-3-3v-5"
        ></path>
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 8h5"></path>
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 12h5"></path>
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 16h7"></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M5 13v6c0 1.105.895 2 2 2h11c1.105 0 2-.895 2-2v-14c0-1.105-.895-2-2-2h-10"
        ></path>
      </g>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={NoteDocumentClipAttachment} {...rest} />
}

export default memo(CustomIcon)
