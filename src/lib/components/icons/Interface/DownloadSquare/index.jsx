import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"
import { Icon } from "lib/components"

const DoneCheck = createIcon({
  displayName: "DoneCheck",
  viewBox: "0 0 24 24",
  path: (
    <>
      <path
        d="M14.74643,10.75l-2.75,2.75-2.75-2.75"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M17,15.5V16a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1v-.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        strokeWidth="1.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <line
        x1="11.99643"
        y1="7"
        x2="11.99643"
        y2="13.5"
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
  return <Icon as={DoneCheck} {...rest} />
}

export default memo(CustomIcon)
