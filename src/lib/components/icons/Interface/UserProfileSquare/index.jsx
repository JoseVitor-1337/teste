import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"
import { Icon } from "lib/components"

const UserProfileSquare = createIcon({
  displayName: "UserProfileSquare",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g xmlns="http://www.w3.org/2000/svg" fill="none">
        <path d="M0 0h24v24h-24v-24Z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M13.591 7.659c.879.879.879 2.303 0 3.182 -.879.879-2.303.879-3.182 0 -.879-.879-.879-2.303 0-3.182 .879-.879 2.303-.879 3.182 8.88178e-16"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M16.321 16.541c-.221-1.389-1.415-2.453-2.865-2.453h-2.912c-1.451 0-2.644 1.064-2.865 2.453"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M17 21h-10c-2.209 0-4-1.791-4-4v-10c0-2.209 1.791-4 4-4h10c2.209 0 4 1.791 4 4v10c0 2.209-1.791 4-4 4Z"
        />
      </g>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={UserProfileSquare} {...rest} />
}

export default memo(CustomIcon)
