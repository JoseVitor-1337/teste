import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"
import { Icon } from "lib/components"

const BellNotifications3 = createIcon({
  displayName: "BellNotifications3",
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
        <path d="M9.569 19.01l.119.345c.412 1.197 1.716 1.833 2.913 1.421v0c1.197-.412 1.833-1.716 1.421-2.913l-.119-.345" />
        <path d="M10.985 5.204l-.299-.868c-.33-.957-1.373-1.466-2.331-1.136v0c-.957.33-1.466 1.373-1.137 2.33l.299.868" />
        <path d="M5.554 11.766v0c-.815-2.366.443-4.945 2.809-5.76l1.714-.59c2.366-.815 4.945.443 5.76 2.809v0l.91 2.644c.173.502.538.914 1.014 1.146l.815.397c.477.233.842.645 1.014 1.146v0c.34.987-.185 2.063-1.172 2.403l-10.135 3.49c-.987.34-2.063-.185-2.403-1.172v0c-.173-.502-.139-1.051.093-1.528l.397-.815c.233-.477.266-1.026.093-1.528l-.909-2.642Z" />
      </g>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={BellNotifications3} {...rest} />
}

export default memo(CustomIcon)
