// Component for providing the app with context providers

import React from "react"

type AppProviderProps = {
  children: React.ReactNode
}

const AppProvider = (props: AppProviderProps) => {
  return props.children
}

export default AppProvider
