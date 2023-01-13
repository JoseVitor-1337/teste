function getAccessibilityGlobalCSS(theme, isLightMode) {
  const boxShadowFocusColor = theme.colors.blue[isLightMode ? 400 : 200]

  return {
    '.accessible': {
      borderRadius: 'md',
      cursor: 'pointer',
      transition: 'all 250ms',
      outline: '2px solid transparent',

      _focus: {
        boxShadow: `0 0 0 3px ${boxShadowFocusColor}`
      }
    },
    ".input-accessible": {
      rounded: "sm",
      transition: "all 250ms, border-width 0ms",
      cursor: "pointer",
      outline: "none",
      _focus: { borderWidth: "3px", borderColor: "blue.400 !important" },
    },
    '.tr-accessible': {
      cursor: 'pointer',
      transition: 'all 250ms',
      outline: 'none',
      _hover: {
        bg: 'lighterPrimary'
      },
      _focus: {
        bg: 'lighterPrimary'
      }
    }
  }
}

export default getAccessibilityGlobalCSS
