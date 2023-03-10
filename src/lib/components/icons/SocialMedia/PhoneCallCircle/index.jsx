import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"

import { Icon } from "components"

const PhoneCallCircle = createIcon({
  displayName: "PhoneCallCircle",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g fill="none">
        <path d="M0,0h24v24h-24Z"></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19.0711,4.92893c3.90524,3.90524 3.90524,10.2369 0,14.1421c-3.90524,3.90524 -10.2369,3.90524 -14.1421,0c-3.90524,-3.90524 -3.90524,-10.2369 -1.77636e-15,-14.1421c3.90524,-3.90524 10.2369,-3.90524 14.1421,-1.77636e-15"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9.651,14.346c2.183,2.184 4.949,3.576 6.594,1.938c0,0 0.399,-0.399 0.399,-0.399c0.532,-0.531 0.458,-1.411 -0.16,-1.84c-0.389,-0.271 -0.807,-0.562 -1.269,-0.887c-0.478,-0.336 -1.133,-0.283 -1.548,0.128l-0.451,0.448c-0.559,-0.354 -1.112,-0.809 -1.626,-1.322l-0.002,-0.002c-0.513,-0.513 -0.968,-1.067 -1.322,-1.626l0.448,-0.451c0.412,-0.414 0.463,-1.07 0.128,-1.548c-0.326,-0.462 -0.617,-0.88 -0.887,-1.269c-0.429,-0.617 -1.309,-0.691 -1.84,-0.16c0,0 -0.399,0.399 -0.399,0.399c-1.637,1.645 -0.246,4.409 1.937,6.594"
        ></path>
      </g>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={PhoneCallCircle} {...rest} />
}

export default memo(CustomIcon)
