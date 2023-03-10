import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"
import { Icon } from "lib/components"

const CloudStorageDownload = createIcon({
  displayName: "CloudStorageDownload",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g strokeLinecap="round" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinejoin="round">
        <path d="M6.324,9.068c-2.439,0.333 -4.324,2.402 -4.324,4.932c0,2.761 2.239,5 5,5h11c2.209,0 4,-1.791 4,-4c0,-2.209 -1.791,-4 -4,-4c0,-3.314 -2.686,-6 -6,-6c-2.637,0 -4.871,1.703 -5.676,4.068Z"></path>
        <path d="M14.167,13.333l-2.167,2.167l-2.167,-2.167"></path>
        <path d="M12,10.5v5"></path>
      </g>
      <path fill="none" d="M0,0h24v24h-24Z"></path>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={CloudStorageDownload} {...rest} />
}

export default memo(CustomIcon)
