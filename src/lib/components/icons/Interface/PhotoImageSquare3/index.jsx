import { memo } from "react"
import { createIcon } from "@chakra-ui/icons"
import { Icon } from "lib/components"

const PhotoImageSquare3 = createIcon({
  displayName: "PhotoImageSquare3",
  viewBox: "0 0 24 24",
  path: (
    <>
      <g strokeLinecap="round" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinejoin="round">
        <path d="M3 7l4.61853e-14 6.03983e-07c-3.33571e-07-2.20914 1.79086-4 4-4h10l-1.74846e-07 3.55271e-15c2.20914-9.65645e-08 4 1.79086 4 4v10 0c0 2.20914-1.79086 4-4 4h-10l-1.74846e-07-3.55271e-15c-2.20914-9.65645e-08-4-1.79086-4-4 0 0 0 0 0 0Z"></path>
        <path d="M12 16l4.586-4.586 -1.23061e-07 1.23024e-07c.781-.780764 2.047-.780764 2.828-2.46048e-07l1.586 1.586"></path>
        <circle cx="7.5" cy="7.5" r="1.5"></circle>
        <path d="M3.353 18.644l4.23-4.23 -1.23061e-07 1.23024e-07c.781-.780764 2.047-.780764 2.828-2.46048e-07l6.417 6.417"></path>
      </g>
      <path fill="none" d="M0 0h24v24h-24Z"></path>
    </>
  ),
})

function CustomIcon({ ...rest }) {
  return <Icon as={PhotoImageSquare3} {...rest} />
}

export default memo(CustomIcon)
