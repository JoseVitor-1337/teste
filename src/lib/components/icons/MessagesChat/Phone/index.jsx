import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"

import { Icon } from "lib/components"

const Phone = createIcon({
  displayName: "Phone",
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
        <path d="M9.651,13.346c2.183,2.184 4.949,3.576 6.594,1.938l0.399,-0.399c0.531,-0.531 0.457,-1.41 -0.159,-1.839c-0.389,-0.271 -0.807,-0.562 -1.269,-0.887c-0.478,-0.336 -1.134,-0.285 -1.549,0.127l-0.451,0.448c-0.559,-0.354 -1.112,-0.809 -1.626,-1.322l-0.002,-0.002c-0.513,-0.513 -0.968,-1.067 -1.322,-1.626l0.448,-0.451c0.412,-0.415 0.464,-1.072 0.126,-1.55c-0.325,-0.461 -0.616,-0.878 -0.885,-1.266c-0.428,-0.618 -1.308,-0.693 -1.84,-0.161l-0.399,0.399c-1.637,1.645 -0.246,4.409 1.937,6.594" />
        <path d="M14,20l-2,2l-2,-2h-4c-1.657,0 -3,-1.343 -3,-3v-12c0,-1.657 1.343,-3 3,-3h12c1.657,0 3,1.343 3,3v12c0,1.657 -1.343,3 -3,3h-4Z" />
      </g>
      <path xmlns="http://www.w3.org/2000/svg" fill="none" d="M0,0h24v24h-24Z" />
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={Phone} {...rest} />
}

export default memo(CustomIcon)
