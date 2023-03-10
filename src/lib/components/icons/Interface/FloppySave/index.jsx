import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"
import { Icon } from "lib/components"

const FloppySave = createIcon({
  displayName: "FloppySave",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g strokeLinecap="round" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinejoin="round">
        <path d="M16.164 3h-11.157c-1.11 0-2.008.904-2 2.015l.104 14c.008 1.099.901 1.985 2 1.985h13.881c1.105 0 2-.895 2-2v-11.172c0-.53-.211-1.039-.586-1.414l-2.828-2.828c-.375-.375-.883-.586-1.414-.586Z"></path>
        <path d="M15.993 3v3.909c0 .552-.448 1-1 1h-6c-.552 0-1-.448-1-1v-3.909"></path>
        <path d="M7 21v-7.714c0-.71.576-1.286 1.286-1.286h7.429c.709 0 1.285.576 1.285 1.286v7.714"></path>
      </g>
      <path fill="none" d="M0 0h24v24h-24v-24Z"></path>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={FloppySave} {...rest} />
}

export default memo(CustomIcon)
