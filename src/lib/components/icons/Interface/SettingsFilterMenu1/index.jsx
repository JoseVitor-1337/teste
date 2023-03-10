import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"
import { Icon } from "lib/components"

const SettingsFilterMenu1 = createIcon({
  displayName: "SettingsFilterMenu1",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g fill="none">
        <path d="M0 0h24v24h-24v-24Z"></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12.944 9.697c.996.996.996 2.61 0 3.606 -.996.996-2.61.996-3.606 0 -.996-.996-.996-2.61 0-3.606 .995-.996 2.61-.996 3.606 0"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M17.516 11.5c0-.281-.025-.561-.059-.833l1.5-1.173c.332-.261.423-.726.212-1.092l-1.334-2.307c-.211-.365-.658-.519-1.05-.363l-1.34.538c-.266.107-.563.062-.803-.096 -.208-.137-.422-.262-.644-.374 -.256-.128-.443-.362-.484-.645l-.204-1.428c-.059-.417-.417-.727-.839-.727h-2.66c-.421 0-.779.31-.839.727l-.206 1.43c-.04.282-.226.515-.48.644 -.223.114-.439.241-.646.378 -.239.157-.535.199-.8.093l-1.342-.54c-.392-.157-.84-.003-1.05.363l-1.334 2.307c-.212.366-.121.832.211 1.092l1.5 1.173c-.034.272-.06.552-.06.833 0 .28.025.561.06.833l-1.5 1.173c-.332.261-.423.726-.212 1.092l1.334 2.307c.211.365.658.519 1.05.363l1.343-.539c.265-.107.561-.064.799.094 .208.138.423.264.646.378 .255.129.44.361.481.644l.205 1.429c.06.416.418.726.839.726h1.331"
        ></path>
        <line
          x1="15"
          x2="21"
          y1="16"
          y2="16"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></line>
        <line
          x1="15"
          x2="21"
          y1="18.5"
          y2="18.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></line>
        <line
          x1="15"
          x2="21"
          y1="21"
          y2="21"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></line>
      </g>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={SettingsFilterMenu1} {...rest} />
}

export default memo(CustomIcon)
