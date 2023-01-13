import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"
import { Icon } from "lib/components"

const QrQrcode = createIcon({
  displayName: "QrQrcode",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g fill="none">
        <path d="M0,0h24v24h-24Z"></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M6.196,6.196h3.804v3.804h-3.804Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M6.12,14.12h3.88v3.88h-3.88Z"
        ></path>
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14,16v-2"></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M17.8,17.8h-2"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M14,6h3.88v3.88h-3.88Z"
          transform="matrix(-1,-1.22465e-16,1.22465e-16,-1,31.8797,15.8797)"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M21.5,7.978v-3.478c0,-1.105 -0.895,-2 -2,-2h-3.478"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M16.3,14h1.5"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7.978,2.5h-3.478c-1.105,0 -2,0.895 -2,2v3.478"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M2.5,16.022v3.478c0,1.105 0.895,2 2,2h3.478"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M16.022,21.5h3.478c1.105,0 2,-0.895 2,-2v-3.478"
        ></path>
      </g>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={QrQrcode} {...rest} />
}

export default memo(CustomIcon)
