import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"

import { Icon } from "components"

const Minus1 = createIcon({
  displayName: "Minus1",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g xmlns="http://www.w3.org/2000/svg" fill="none">
        <path d="M0 0h24v24h-24Z" />
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 12h-8" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 21v0c-4.971 0-9-4.029-9-9v0c0-4.971 4.029-9 9-9v0c4.971 0 9 4.029 9 9v0c0 4.971-4.029 9-9 9Z"
        />
      </g>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={Minus1} {...rest} />
}

export default memo(CustomIcon)
