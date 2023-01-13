import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"
import { Icon } from "lib/components"

const Fingerprint = createIcon({
  displayName: "Fingerprint",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g strokeLinecap="round" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinejoin="round">
        <path d="M6.399 8.343c3.124-3.124 8.19-3.124 11.314 0"></path>
        <path d="M14.667 16.667c-1.473 0-2.667-1.194-2.667-2.667"></path>
        <path d="M11.23 18c-1.123-.972-1.841-2.396-1.841-4 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667"></path>
        <path d="M7.797 18c-.682-1.177-1.075-2.542-1.075-4 0-2.946 2.388-5.333 5.333-5.333 2.945 0 5.333 2.388 5.333 5.333"></path>
        <path d="M3 17v2c0 1.105.895 2 2 2h2"></path>
        <path d="M21 7v-2c0-1.105-.895-2-2-2h-2"></path>
        <path d="M7 3h-2c-1.105 0-2 .895-2 2v2"></path>
        <path d="M17 21h2c1.105 0 2-.895 2-2v-2"></path>
      </g>
      <path fill="none" d="M0 0h24v24h-24v-24Z"></path>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={Fingerprint} {...rest} />
}

export default memo(CustomIcon)
