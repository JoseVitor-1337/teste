import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"
import { Icon } from "lib/components"

const GridLayout12 = createIcon({
  displayName: "GridLayout12",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g fill="none">
        <path d="M0 0h24v24h-24Z"></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M5 14v0c-1.105 0-2-.895-2-2v0c0-1.105.895-2 2-2v0c1.105 0 2 .895 2 2v0c0 1.105-.895 2-2 2Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 14v0c-1.105 0-2-.895-2-2v0c0-1.105.895-2 2-2v0c1.105 0 2 .895 2 2v0c0 1.105-.895 2-2 2Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19 14v0c-1.105 0-2-.895-2-2v0c0-1.105.895-2 2-2v0c1.105 0 2 .895 2 2v0c0 1.105-.895 2-2 2Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M5 21v0c-1.105 0-2-.895-2-2v0c0-1.105.895-2 2-2v0c1.105 0 2 .895 2 2v0c0 1.105-.895 2-2 2Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 21v0c-1.105 0-2-.895-2-2v0c0-1.105.895-2 2-2v0c1.105 0 2 .895 2 2v0c0 1.105-.895 2-2 2Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19 21v0c-1.105 0-2-.895-2-2v0c0-1.105.895-2 2-2v0c1.105 0 2 .895 2 2v0c0 1.105-.895 2-2 2Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M5 7v0c-1.105 0-2-.895-2-2v0c0-1.105.895-2 2-2v0c1.105 0 2 .895 2 2v0c0 1.105-.895 2-2 2Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 7v0c-1.105 0-2-.895-2-2v0c0-1.105.895-2 2-2v0c1.105 0 2 .895 2 2v0c0 1.105-.895 2-2 2Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19 7v0c-1.105 0-2-.895-2-2v0c0-1.105.895-2 2-2v0c1.105 0 2 .895 2 2v0c0 1.105-.895 2-2 2Z"
        ></path>
      </g>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={GridLayout12} {...rest} />
}

export default memo(CustomIcon)
