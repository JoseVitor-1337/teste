import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"
import { Icon } from "lib/components"

const Dots = createIcon({
  displayName: "Dots",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g strokeLinecap="round" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinejoin="round">
        <path d="M11.997 17.5c-.275 0-.5.225-.497.5 0 .275.225.5.5.5 .275 0 .5-.225.5-.5 0-.275-.225-.5-.503-.5"></path>
        <path d="M11.997 11.5c-.275 0-.5.225-.497.5 0 .275.225.5.5.5 .275 0 .5-.225.5-.5 0-.275-.225-.5-.503-.5"></path>
        <path d="M11.997 5.5c-.275 0-.5.225-.497.5 0 .275.225.5.5.5 .275 0 .5-.225.5-.5 0-.275-.225-.5-.503-.5"></path>
      </g>
      <path fill="none" d="M0 0h24v24h-24v-24Z"></path>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={Dots} {...rest} />
}

export default memo(CustomIcon)
