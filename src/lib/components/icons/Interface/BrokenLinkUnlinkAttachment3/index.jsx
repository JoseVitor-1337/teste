import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"

import { Icon } from "lib/components"

const BrokenLinkUnlinkAttachment3 = createIcon({
  displayName: "BrokenLinkUnlinkAttachment3",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g xmlns="http://www.w3.org/2000/svg" fill="none">
        <path d="M0 0h24v24h-24Z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M16.95 12.707l2.828-2.828c1.562-1.562 1.562-4.095 0-5.657v0c-1.562-1.562-4.095-1.562-5.657 0l-2.828 2.828"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7.05 11.293l-2.828 2.828c-1.562 1.562-1.562 4.095 0 5.657v0c1.562 1.562 4.095 1.562 5.657 0l2.828-2.828"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M5.64 8.46l-2.12-.7"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M8.46 5.64l-.7-2.12"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M18.36 15.54l2.13.7"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15.54 18.36l.7 2.13"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9.17 14.83l5.66-5.66"
        />
      </g>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={BrokenLinkUnlinkAttachment3} {...rest} />
}

export default memo(CustomIcon)
