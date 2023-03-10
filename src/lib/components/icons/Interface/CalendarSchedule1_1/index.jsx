import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"
import { Icon } from "lib/components"

const CalendarSchedule1_1 = createIcon({
  displayName: "CalendarSchedule1_1",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g strokeLinecap="round" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinejoin="round">
        <path d="M7.5 3l0 3" />
        <path d="M16.5 3l0 3" />
        <path d="M3 9.5l18 0" />
        <rect width="18" height="16.5" x="3" y="4.5" rx="3" />
      </g>
      <path fill="none" d="M0 0h24v24H0Z" />
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={CalendarSchedule1_1} {...rest} />
}

export default memo(CustomIcon)
