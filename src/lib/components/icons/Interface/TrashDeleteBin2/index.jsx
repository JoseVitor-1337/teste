import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"
import { Icon } from "lib/components"

const TrashDeleteBin2 = createIcon({
  displayName: "TrashDeleteBin2",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g fill="none">
        <path d="M0 0h24v24h-24v-24Z"></path>
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h8"></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15.331 20.986h-6.662c-3.131 0-5.669-2.538-5.669-5.669v-6.662c0-3.131 2.538-5.669 5.669-5.669h6.661c3.132 4.44089e-16 5.67 2.538 5.67 5.669v6.661c0 3.132-2.538 5.67-5.669 5.67Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M10 10v-1.5c0-.552.448-1 1-1h2c.552 0 1 .448 1 1v1.5"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15.25 10v5.5c0 .552-.428 1-.955 1h-4.59c-.527 0-.955-.448-.955-1v-5.5"
        ></path>
      </g>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={TrashDeleteBin2} {...rest} />
}

export default memo(CustomIcon)
