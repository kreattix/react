import { createContext, useContext } from 'react'

import { defaultComponentConfig } from '../../configs'
import { DeepPartial } from '../../utils/types'
import { ComponentConfig } from './types'

export const ComponentContext = createContext<ComponentConfig>(defaultComponentConfig)
export const Provider = ComponentContext.Provider

export function createComponentConfig(config: DeepPartial<ComponentConfig>) {
  return config
}

export const useComponent = () => useContext(ComponentContext)
