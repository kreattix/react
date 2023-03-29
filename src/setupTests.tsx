// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// @jest-environment jsdom
import '@testing-library/jest-dom'
import { render as jestRender } from '@testing-library/react'
import { ReactNode } from 'react'

import { KreattixApp } from './components'

export const render = (component: ReactNode) => {
  return jestRender(<KreattixApp>{component}</KreattixApp>)
}
