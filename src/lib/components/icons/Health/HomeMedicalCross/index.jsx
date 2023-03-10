import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"

import { Icon } from "lib/components"

const HomeMedicalCross = createIcon({
  displayName: "HomeMedicalCross",
  viewBox: "0 0 24 24",
  path: (
    <>
      <path d="M0,0H24V24H0Z" fill="none" />
      <path
        d="M19.84184,8.29889,13.8419,3.632a3,3,0,0,0-3.6838,0L4.15816,8.29889A3.00015,3.00015,0,0,0,3,10.667V18a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3h0V10.667A3.00015,3.00015,0,0,0,19.84184,8.29889Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M15.75,12.5a.75.75,0,0,0-.75-.75H13.5v-1.5a.75.75,0,0,0-.75-.75h-1.5a.75.75,0,0,0-.75.75v1.5H9a.75.75,0,0,0-.75.75V14a.75.75,0,0,0,.75.75h1.5v1.5a.75.75,0,0,0,.75.75h1.5a.75.75,0,0,0,.75-.75v-1.5H15a.75.75,0,0,0,.75-.75Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={HomeMedicalCross} {...rest} />
}

export default memo(CustomIcon)
