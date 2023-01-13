import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"
import { Icon } from "lib/components"

const UsbCableCopy = createIcon({
  displayName: "UsbCableCopy",
  viewBox: "0 0 24 24",
  path: (
    <>
      <rect
        x="2.5"
        y="12"
        width="5"
        height="5"
        rx="1"
        strokeWidth="1.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M3.5,17h3a0,0,0,0,1,0,0v2.75a.25.25,0,0,1-.25.25H3.75a.25.25,0,0,1-.25-.25V17A0,0,0,0,1,3.5,17Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M4.5,9h1a1,1,0,0,1,1,1v2a0,0,0,0,1,0,0h-3a0,0,0,0,1,0,0V10A1,1,0,0,1,4.5,9Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <rect
        x="16.5"
        y="3"
        width="5"
        height="7"
        rx="1"
        strokeWidth="1.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M17.5,10h3a0,0,0,0,1,0,0v2a1,1,0,0,1-1,1h-1a1,1,0,0,1-1-1V10A0,0,0,0,1,17.5,10Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M5,9V5.5A3.5,3.5,0,0,1,8.5,2h0A3.5,3.5,0,0,1,12,5.5v13A3.5,3.5,0,0,0,15.5,22h0A3.5,3.5,0,0,0,19,18.5V13"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path d="M0,0H24V24H0Z" fill="none" />
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={UsbCableCopy} {...rest} />
}

export default memo(CustomIcon)
