import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"
import { Icon } from "lib/components"

const Moon1 = createIcon({
  displayName: "Moon1",
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
          d="M18.395 13.027c.33-.155.682.17.59.523 -.314 1.202-.931 2.346-1.881 3.296 -2.821 2.821-7.334 2.88-10.082.132 -2.748-2.748-2.688-7.262.133-10.083 .95-.95 2.093-1.567 3.296-1.881 .353-.092.677.26.523.59 -1.002 2.139-.673 4.701 1.024 6.398 1.696 1.698 4.258 2.027 6.397 1.025Z"
        ></path>
      </g>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={Moon1} {...rest} />
}

export default memo(CustomIcon)
