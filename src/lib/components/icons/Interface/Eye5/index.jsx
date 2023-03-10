import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"
import { Icon } from "lib/components"

const Eye5 = createIcon({
  displayName: "Eye5",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M14.122 9.88c1.171 1.171 1.171 3.072 0 4.245 -1.171 1.171-3.072 1.171-4.245 0 -1.171-1.171-1.171-3.072 0-4.245 1.173-1.173 3.073-1.173 4.245 1.77636e-15"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3 12c0-.659.152-1.311.446-1.912v0c1.515-3.097 4.863-5.088 8.554-5.088 3.691 0 7.039 1.991 8.554 5.088v0c.294.601.446 1.253.446 1.912 0 .659-.152 1.311-.446 1.912v0c-1.515 3.097-4.863 5.088-8.554 5.088 -3.691 0-7.039-1.991-8.554-5.088v0c-.294-.601-.446-1.253-.446-1.912Z"
        ></path>
      </g>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={Eye5} {...rest} />
}

export default memo(CustomIcon)
