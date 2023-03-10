import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"
import { Icon } from "lib/components"

const AlarmClockTime3 = createIcon({
  displayName: "AlarmClockTime3",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g strokeLinecap="round" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinejoin="round">
        <path d="M16.641 16l-4.922-2.936v-6.328"></path>
        <path d="M18.364 5.63604c3.51472 3.51472 3.51472 9.2132 0 12.7279 -3.51472 3.51472-9.2132 3.51472-12.7279 0 -3.51472-3.51472-3.51472-9.2132-1.77636e-15-12.7279 3.51472-3.51472 9.2132-3.51472 12.7279-1.77636e-15"></path>
      </g>
      <path fill="none" d="M0 0h24v24h-24Z"></path>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={AlarmClockTime3} {...rest} />
}

export default memo(CustomIcon)
