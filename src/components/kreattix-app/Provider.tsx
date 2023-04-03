import { createContext, useContext } from 'react'

import { defaultComponentConfig } from '../../configs'
import { ComponentConfig } from './types'

export const ComponentContext = createContext<ComponentConfig>(defaultComponentConfig)
export const Provider = ComponentContext.Provider

export function createComponentConfig(config: ComponentConfig) {
  return config
}

export const useComponent = () => useContext(ComponentContext)
