import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"
import { Icon } from "lib/components"

const MonitorDisplaySquare = createIcon({
  displayName: "MonitorDisplaySquare",
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
        <path d="M15.876 14.5h-7.752c-.621 0-1.124-.503-1.124-1.124v-4.752c0-.621.503-1.124 1.124-1.124h7.752c.621 0 1.124.503 1.124 1.124v4.752c0 .621-.503 1.124-1.124 1.124Z" />
        <line x1="15" x2="9" y1="17.5" y2="17.5" />
        <line x1="13.5" x2="13.5" y1="17.5" y2="14.5" />
        <line x1="10.5" x2="10.5" y1="17.5" y2="14.5" />
        <path d="M17 21h-10c-2.209 0-4-1.791-4-4v-10c0-2.209 1.791-4 4-4h10c2.209 0 4 1.791 4 4v10c0 2.209-1.791 4-4 4Z" />
      </g>
      <path fill="none" d="M0 0h24v24h-24Z"></path>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={MonitorDisplaySquare} {...rest} />
}

export default memo(CustomIcon)
