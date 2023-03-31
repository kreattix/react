import { createContext, useContext } from 'react'

import { defaultAppConfig } from '../../configs'
import { KreattixConfig } from './types'

export const KreattixContext = createContext<KreattixConfig>(defaultAppConfig)
export const Provider = KreattixContext.Provider

export function defineAppConfig(config: KreattixConfig) {
  return config
}

export const useKreattix = () => useContext(KreattixContext)
