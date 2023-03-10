import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"

import { Icon } from "components"

const HomeHouse = createIcon({
  displayName: "HomeHouse",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g
        xmlns="http://www.w3.org/2000/svg"
        strokeLinecap="round"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinejoin="round"
      >
        <line x1="20" x2="20" y1="10.55" y2="21" />
        <path d="M22 12l-9.375-6.815 -2.48389e-08-1.79863e-08c-.349944-.253401-.823056-.253401-1.173 3.59727e-08l-9.452 6.815" />
        <path d="M19.5 9.743v-5.243 0c0-.276142-.223858-.5-.5-.5h-3l-2.18557e-08 8.88178e-16c-.276142 1.20706e-08-.5.223858-.5.5 0 0 0 0 0 0v2.609" />
        <line x1="22" x2="2" y1="21" y2="21" />
        <line x1="4" x2="4" y1="10.56" y2="21" />
        <rect width="4" height="3" x="13.5" y="15" rx=".27614" ry="0" />
        <path d="M7 21v-5.5l5.32907e-15 7.54979e-08c-4.16963e-08-.276142.223858-.5.5-.5h2.5 -2.18557e-08c.276142-1.20706e-08.5.223858.5.5v5.5" />
      </g>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={HomeHouse} {...rest} />
}

export default memo(CustomIcon)
