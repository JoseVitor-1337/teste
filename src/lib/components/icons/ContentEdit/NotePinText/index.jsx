import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"
import { Icon } from "lib/components"

const NotePinText = createIcon({
  displayName: "NotePinText",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g id="Layer_2" data-name="Layer 2">
        <path
          d="M12,5V7"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M17,4h2a1.99945,1.99945,0,0,1,2,2V19a1.99945,1.99945,0,0,1-2,2H5a1.99945,1.99945,0,0,1-2-2V6A1.99945,1.99945,0,0,1,5,4H7"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <circle
          cx="12"
          cy="3"
          r="2"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <line
          x1="17"
          y1="10"
          x2="7"
          y2="10"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <line
          x1="17"
          y1="13.5"
          x2="7"
          y2="13.5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <line
          x1="12"
          y1="17"
          x2="7"
          y2="17"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <rect width="24" height="24" fill="none" />
      </g>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={NotePinText} {...rest} />
}

export default memo(CustomIcon)
