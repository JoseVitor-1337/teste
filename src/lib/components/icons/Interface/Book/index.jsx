import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"
import { Icon } from "lib/components"

const Book = createIcon({
  displayName: "Book",
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
        <path d="M3.5 19v-14c0-1.105.895-2 2-2h13c1.105 0 2 .895 2 2v10c0 1.105-.895 2-2 2h-13c-1.105 0-2 .895-2 2v0c0 1.105.895 2 2 2h13c1.105 0 2-.895 2-2v-5" />
        <line x1="16.5" x2="7.5" y1="7.66" y2="7.66" />
        <line x1="16.5" x2="7.5" y1="12" y2="12" />
      </g>
      <path xmlns="http://www.w3.org/2000/svg" fill="none" d="M0 0h24v24h-24v-24Z" />
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={Book} {...rest} />
}

export default memo(CustomIcon)
