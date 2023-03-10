import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"

import { Icon } from "lib/components"

const CameraPhoto = createIcon({
  displayName: "CameraPhoto",
  viewBox: "0 0 24 24",
  path: (
    <>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M14.58579,4.58579l1.12132,1.12132A1,1,0,0,0,16.41421,6H19a2,2,0,0,1,2,2v9a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V8A2,2,0,0,1,5,6H7.58579a1,1,0,0,0,.7071-.29289L9.41421,4.58579A2,2,0,0,1,10.82843,4h2.34314A2,2,0,0,1,14.58579,4.58579Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <circle
        xmlns="http://www.w3.org/2000/svg"
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M18.05006,9.00007A.05.05,0,1,1,18,8.95a.05.05,0,0,1,.05006.05007"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <rect xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" />
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={CameraPhoto} {...rest} />
}

export default memo(CustomIcon)
