import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"

import { Icon } from "lib/components"

const SendShare = createIcon({
  displayName: "SendShare",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g xmlns="http://www.w3.org/2000/svg" fill="none">
        <path d="M0,0h24v24h-24Z" />
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2,10v0" />
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3,7h-1" />
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4,4h-2" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M17.438,16h-10.588c-1.608,0 -2.761,-1.55 -2.299,-3.09l2.16,-7.2c0.305,-1.015 1.239,-1.71 2.299,-1.71h10.589c1.608,0 2.761,1.55 2.299,3.09l-2.16,7.2c-0.305,1.015 -1.24,1.71 -2.3,1.71Z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4.74,14.72l6.96,-4.63"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M14.21,10.05l5.07,5.07"
        />
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17,20h-14" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7.198,4.836l4.803,5.604c0.324,0.378 0.876,0.46 1.296,0.193l8.412,-5.348"
        />
      </g>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={SendShare} {...rest} />
}

export default memo(CustomIcon)
