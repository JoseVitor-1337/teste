import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"

import { Icon } from "lib/components"

const TargetGoal = createIcon({
  displayName: "TargetGoal",
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
        <path d="M14.04 9.96l-2.51 2.51" />
        <polygon points="14,6 14,10 18,10 22,6 19.333,4.667 18,2 14,6" />
        <path d="M11 3.975l1.01331e-07-6.21936e-09c-4.69663.288262-8.27031 4.32931-7.98205 9.02594 .288262 4.69663 4.32931 8.27031 9.02594 7.98205 4.29481-.2636 7.71899-3.68815 7.98211-7.98299" />
        <path d="M16.21 13l1.28235e-10-1.17432e-09c-.283279 2.59412-2.61588 4.46743-5.21 4.18415 -2.59412-.283279-4.46743-2.61588-4.18415-5.21 .240623-2.2035 1.98065-3.94353 4.18415-4.18415" />
      </g>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={TargetGoal} {...rest} />
}

export default memo(CustomIcon)
