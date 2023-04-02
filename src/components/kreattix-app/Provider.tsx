import { createContext, useContext } from 'react'

import { defaultAppConfig } from '../../configs'
import { ComponentConfig } from './types'

export const ComponentContext = createContext<ComponentConfig>(defaultAppConfig)
export const Provider = ComponentContext.Provider

export function createComponent(config: ComponentConfig) {
  return config
}

export const useComponent = () => useContext(ComponentContext)
