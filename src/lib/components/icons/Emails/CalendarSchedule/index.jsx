import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"

import { Icon } from "lib/components"

const CalendarSchedule = createIcon({
  displayName: "CalendarSchedule",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g xmlns="http://www.w3.org/2000/svg" fill="none">
        <path d="M0,0h24v24h-24Z" />
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16,2v4" />
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8,2v4" />
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3,9h18" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19,4h-14c-1.105,0 -2,0.895 -2,2v13c0,1.105 0.895,2 2,2h14c1.105,0 2,-0.895 2,-2v-13c0,-1.105 -0.895,-2 -2,-2Z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7.013,12.729c-0.138,0 -0.25,0.112 -0.249,0.25c0,0.138 0.112,0.25 0.25,0.25c0.138,0 0.25,-0.112 0.25,-0.25c0,-0.138 -0.112,-0.25 -0.251,-0.25"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12.013,12.729c-0.138,0 -0.25,0.112 -0.249,0.25c0,0.138 0.112,0.25 0.25,0.25c0.138,0 0.25,-0.112 0.25,-0.25c0,-0.138 -0.112,-0.25 -0.251,-0.25"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M17.013,12.729c-0.138,0 -0.25,0.112 -0.249,0.25c0,0.138 0.112,0.25 0.25,0.25c0.138,0 0.25,-0.112 0.25,-0.25c-3.55271e-15,-0.138 -0.112,-0.25 -0.251,-0.25"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7.013,16.729c-0.138,0 -0.25,0.112 -0.249,0.25c0,0.138 0.112,0.25 0.25,0.25c0.138,0 0.25,-0.112 0.25,-0.25c0,-0.138 -0.112,-0.25 -0.251,-0.25"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12.013,16.729c-0.138,0 -0.25,0.112 -0.249,0.25c0,0.138 0.112,0.25 0.25,0.25c0.138,0 0.25,-0.112 0.25,-0.25c0,-0.138 -0.112,-0.25 -0.251,-0.25"
        />
      </g>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={CalendarSchedule} {...rest} />
}

export default memo(CustomIcon)
