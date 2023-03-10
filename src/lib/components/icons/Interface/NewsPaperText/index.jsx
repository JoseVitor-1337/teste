import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"
import { Icon } from "lib/components"

const NewsPaperText = createIcon({
  displayName: "NewsPaperText",
  viewBox: "0 0 24 24",
  path: (
    <>
      <line
        x1="12"
        y1="11"
        x2="17"
        y2="11"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <line
        x1="12"
        y1="14"
        x2="17"
        y2="14"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <line
        x1="12"
        y1="17"
        x2="17"
        y2="17"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M8,6H19a2,2,0,0,1,2,2V19a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2H3a2,2,0,0,1,2-2H6a2,2,0,0,0,2-2V5.5A2.5,2.5,0,0,0,5.5,3h0A2.5,2.5,0,0,0,3,5.5V19"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <rect width="24" height="24" fill="none" />
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={NewsPaperText} {...rest} />
}

export default memo(CustomIcon)
