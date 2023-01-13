import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"
import { Icon } from "lib/components"

const Book1 = createIcon({
  displayName: "Book1",
  viewBox: "0 0 24 24",
  path: (
    <>
      <defs>
        <path d="M0,0h24v24h-24v-24Z" id="a"></path>
      </defs>
      <g strokeLinecap="round" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinejoin="round">
        <path d="M17,18h-11"></path>
        <path d="M3,18v-12c0,-1.657 1.343,-3 3,-3h10c1.105,0 2,0.895 2,2v9c0,0.552 -0.448,1 -1,1h-11c-1.657,0 -3,1.343 -3,3v0c0,1.657 1.343,3 3,3h13c1.105,0 2,-0.895 2,-2v-14"></path>
      </g>
      <use fill="none" xlinkHref="#a"></use>
      <use xlinkHref="#a" fill="none"></use>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={Book1} {...rest} />
}

export default memo(CustomIcon)
