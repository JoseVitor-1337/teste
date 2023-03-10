import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"

import { Icon } from "lib/components"

const PrinterCopy = createIcon({
  displayName: "PrinterCopy",
  viewBox: "0 0 24 24",
  path: (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" id="Layer_3" data-name="Layer 3" viewBox="0 0 24 24">
        <path
          d="M4,9H20a2,2,0,0,1,2,2v9a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V11A2,2,0,0,1,4,9Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <line
          x1="19"
          y1="12"
          x2="19"
          y2="12"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <line
          x1="16.5"
          y1="12"
          x2="16.5"
          y2="12"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M8.5,3h7a1,1,0,0,1,1,1V9a0,0,0,0,1,0,0h-9a0,0,0,0,1,0,0V4A1,1,0,0,1,8.5,3Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M20,9V7a1,1,0,0,0-1-1H16.5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M4,9V7A1,1,0,0,1,5,6H7.5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M19,21V16a1,1,0,0,0-1-1H6a1,1,0,0,0-1,1v5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M16.5,15v1.875A1.125,1.125,0,0,1,15.375,18H8.625A1.125,1.125,0,0,1,7.5,16.875V15"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <rect width="24" height="24" fill="none" />
      </svg>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={PrinterCopy} {...rest} />
}

export default memo(CustomIcon)
