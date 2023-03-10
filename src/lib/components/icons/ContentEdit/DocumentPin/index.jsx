import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"
import { Icon } from "lib/components"

const DocumentPin = createIcon({
  displayName: "DocumentPin",
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
        <path d="M12,8v2" />
        <path d="M7,13h10" />
        <path d="M7,17h10" />
        <path d="M14.333,6h4.667c1.105,0 2,0.895 2,2v11c0,1.105 -0.895,2 -2,2h-14c-1.105,0 -2,-0.895 -2,-2v-11c0,-1.105 0.895,-2 2,-2h4.667" />
        <path d="M9.5,2.5v0.274c0,0.227 0.077,0.447 0.219,0.625l0.781,0.976v1l-1.08,0.81c-0.252,0.189 -0.4,0.485 -0.4,0.8v1.015h5.961v-1.015c0,-0.315 -0.148,-0.611 -0.4,-0.8l-1.08,-0.81v-1l0.781,-0.976c0.141,-0.177 0.218,-0.398 0.218,-0.625v-0.274c0,-0.276 -0.224,-0.5 -0.5,-0.5h-4c-0.276,0 -0.5,0.224 -0.5,0.5Z" />
      </g>
      <path xmlns="http://www.w3.org/2000/svg" fill="none" fillRule="evenodd" d="M0,0h24v24h-24Z" />
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={DocumentPin} {...rest} />
}

export default memo(CustomIcon)
