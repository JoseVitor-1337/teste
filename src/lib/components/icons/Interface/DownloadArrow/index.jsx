import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"
import { Icon } from "lib/components"

const DownloadArrow = createIcon({
  displayName: "DownloadArrow",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g strokeLinecap="round" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinejoin="round">
        <polyline points="15.556,11.111 12,14.667 8.444,11.111"></polyline>
        <line x1="12" x2="12" y1="4" y2="14.67"></line>
        <path d="M20 16.444v0l3.55271e-15 3.55271e-15c0 1.96392-1.59208 3.556-3.556 3.556 0 0-3.55271e-15 0-3.55271e-15 0h-8.888l-1.55438e-07-3.55271e-15c-1.96392-8.58459e-08-3.556-1.59208-3.556-3.556 0 0 0-7.10543e-15 0-7.10543e-15h-3.55271e-15"></path>
      </g>

      <rect width="24" height="24" fill="none"></rect>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={DownloadArrow} {...rest} />
}

export default memo(CustomIcon)
