import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"
import { Icon } from "lib/components"

const Bold = createIcon({
  displayName: "Bold",
  viewBox: "0 0 24 24",
  path: (
    <>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M6.75 12h7c1.933 0 3.5 1.567 3.5 3.5v0c0 1.933-1.567 3.5-3.5 3.5h-7v-14h5.833c1.933 0 3.5 1.567 3.5 3.5v0c0 1.933-1.567 3.5-3.5 3.5"
        strokeLinecap="round"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinejoin="round"
      />
      <path xmlns="http://www.w3.org/2000/svg" fill="none" d="M0 0h24v24h-24Z" />
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={Bold} {...rest} />
}

export default memo(CustomIcon)
