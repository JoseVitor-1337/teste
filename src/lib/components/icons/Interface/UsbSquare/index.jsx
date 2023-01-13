import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"
import { Icon } from "lib/components"

const UsbSquare = createIcon({
  displayName: "UsbSquare",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g fill="none">
        <path d="M0 0h24v24h-24v-24Z"></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M16 11.565h-8v-4.565c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v4.565Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7 18h10c.552 0 1-.448 1-1v-3.435c0-1.105-.895-2-2-2h-8c-1.105 0-2 .895-2 2v3.435c0 .552.448 1 1 1Z"
        ></path>
        <line
          x1="13.25"
          x2="13.25"
          y1="8.5"
          y2="9"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></line>
        <line
          x1="10.75"
          x2="10.75"
          y1="8.5"
          y2="9"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></line>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M17 21h-10c-2.209 0-4-1.791-4-4v-10c0-2.209 1.791-4 4-4h10c2.209 0 4 1.791 4 4v10c0 2.209-1.791 4-4 4Z"
        ></path>
      </g>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={UsbSquare} {...rest} />
}

export default memo(CustomIcon)
