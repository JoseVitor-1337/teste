import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"

import { Icon } from "lib/components"

const ShapeObject1 = createIcon({
  displayName: "ShapeObject1",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g xmlns="http://www.w3.org/2000/svg" fill="none">
        <path d="M0,0h24v24h-24Z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19.0711,9.17157c3.90524,1.5621 3.90524,4.09476 0,5.65685c-3.90524,1.5621 -10.2369,1.5621 -14.1421,0c-3.90524,-1.5621 -3.90524,-4.09476 -1.77636e-15,-5.65685c3.90524,-1.5621 10.2369,-1.5621 14.1421,-1.77636e-15"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M14.8284,4.92893c1.5621,3.90524 1.5621,10.2369 0,14.1421c-1.5621,3.90524 -4.09476,3.90524 -5.65685,0c-1.5621,-3.90524 -1.5621,-10.2369 -1.77636e-15,-14.1421c1.5621,-3.90524 4.09476,-3.90524 5.65685,-1.77636e-15"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19.0711,4.92893c3.90524,3.90524 3.90524,10.2369 0,14.1421c-3.90524,3.90524 -10.2369,3.90524 -14.1421,0c-3.90524,-3.90524 -3.90524,-10.2369 -1.77636e-15,-14.1421c3.90524,-3.90524 10.2369,-3.90524 14.1421,-1.77636e-15"
        />
      </g>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={ShapeObject1} {...rest} />
}

export default memo(CustomIcon)
