import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"
import { Icon } from "lib/components"

const ImagePictureUpload = createIcon({
  displayName: "ImagePictureUpload",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g strokeLinecap="round" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinejoin="round">
        <path d="M21 10v7 0c0 2.2-1.8 4-4 4H7l-.01-.001c-2.21-.01-4-1.8-4-4.01 0 0 0 0 0 0v-10l0 0c-.01-2.21 1.79-4.01 3.99-4.01h6" />
        <path d="M3 13l1.29-1.3 -.01 0c.94-.95 2.46-.95 3.4-.01 0 0 0 0 0 0l4.29 4.29" />
        <path d="M7.003 21l6.29-6.3 0-.01c.94-.95 2.46-.95 3.4 0l3.93 3.93" />
        <path d="M18 3l-2.5 2.5" />
        <path d="M20.5 5.5L18 3" />
        <path d="M18 3l0 5" />
      </g>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={ImagePictureUpload} {...rest} />
}

export default memo(CustomIcon)
