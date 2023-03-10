import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"

import { Icon } from "components"

const DocumentsFileNew = createIcon({
  displayName: "DocumentsFileNew",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g strokeLinecap="round" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinejoin="round">
        <path d="M18.414,6.414l-2.828,-2.828c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586h-7.172c-1.105,0 -2,0.895 -2,2v14c0,1.105 0.895,2 2,2h10c1.105,0 2,-0.895 2,-2v-11.172c0,-0.53 -0.211,-1.039 -0.586,-1.414Z"></path>
        <path d="M19,8h-4c-0.552,0 -1,-0.448 -1,-1v-4"></path>
        <path d="M8,18v-2l4.293,-4.293c0.391,-0.391 1.024,-0.391 1.414,0l0.586,0.586c0.391,0.391 0.391,1.024 0,1.414l-4.293,4.293h-2Z"></path>
        <path d="M14,18h2"></path>
      </g>
      <path fill="none" d="M0,0h24v24h-24Z"></path>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={DocumentsFileNew} {...rest} />
}

export default memo(CustomIcon)
