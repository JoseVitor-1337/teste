import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"

import { Icon } from "components"

const FileBlankCopyAddPlus = createIcon({
  displayName: "FileBlankCopyAddPlus",
  viewBox: "0 0 24 24",
  path: (
    <>
      <path d="M0,0H24V24H0Z" fill="none" />
      <path
        d="M17,17v2a1.99945,1.99945,0,0,1-2,2H6a1.99945,1.99945,0,0,1-2-2V8A1.99945,1.99945,0,0,1,6,6H8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M19.3593,5.47041,17.52959,3.6407A2.1875,2.1875,0,0,0,15.9828,3H10.1875A2.1875,2.1875,0,0,0,8,5.1875v9.625A2.1875,2.1875,0,0,0,10.1875,17h7.625A2.1875,2.1875,0,0,0,20,14.8125V7.0172A2.1875,2.1875,0,0,0,19.3593,5.47041Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        fillRule="evenodd"
      />
      <line
        x1="12.5"
        y1="11.5"
        x2="15.5"
        y2="11.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <line
        x1="14"
        y1="10"
        x2="14"
        y2="13"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M20,7.5H17A1.5,1.5,0,0,1,15.5,6V3"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={FileBlankCopyAddPlus} {...rest} />
}

export default memo(CustomIcon)
