import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"
import { Icon } from "lib/components"

const DropCircle = createIcon({
  displayName: "DropCircle",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g strokeLinecap="round" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinejoin="round">
        <path d="M13.574 3.145c-.512-.089-1.036-.145-1.574-.145 -.538 0-1.062.056-1.574.145"></path>
        <path d="M20.518 8.973c.353.969.555 2.01.555 3.1"></path>
        <path d="M18.948 6.243c-.678-.807-1.497-1.49-2.415-2.021"></path>
        <path d="M7.467 4.222c-.918.531-1.736 1.214-2.415 2.021"></path>
        <path d="M2.927 12.073c0-1.091.202-2.132.555-3.1"></path>
        <path d="M7.467 19.924c.9.521 1.897.89 2.959 1.076"></path>
        <path d="M3.482 15.173c.366 1.004.896 1.927 1.57 2.73"></path>
        <path d="M13.574 21c1.062-.186 2.058-.555 2.959-1.076"></path>
        <path d="M18.948 17.903c.674-.803 1.204-1.726 1.57-2.73"></path>
        <path d="M12.8 7.401l2.396 3.206c1.971 2.636.092 6.393-3.196 6.393v0c-3.288 0-5.167-3.757-3.197-6.393l2.397-3.206c.4-.535 1.2-.535 1.6 0Z"></path>
      </g>
      <rect width="24" height="24" fill="none"></rect>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={DropCircle} {...rest} />
}

export default memo(CustomIcon)
