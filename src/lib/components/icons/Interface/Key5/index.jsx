import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"
import { Icon } from "lib/components"

const Key5 = createIcon({
  displayName: "Key5",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g strokeLinecap="round" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinejoin="round">
        <path d="M15.031 9.342c0-.207-.168-.374-.375-.374 -.207.001-.375.169-.375.376 0 .207.168.375.375.374 .207 0 .375-.168.375-.375"></path>
        <path d="M12.499 14.785l-1.03 1.032c0 0-1.832 0-1.832 0v1.469h-1.465v1.836l-1.374 1.378h-3.298v-3.305c0 0 5.723-5.736 5.723-5.736 -.806-2.094-.374-4.556 1.311-6.245 2.28-2.285 5.977-2.285 8.257 0 2.28 2.285 2.28 5.99 0 8.276 -1.702 1.704-4.19 2.134-6.292 1.295Z"></path>
      </g>
      <rect width="24" height="24" fill="none"></rect>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={Key5} {...rest} />
}

export default memo(CustomIcon)
