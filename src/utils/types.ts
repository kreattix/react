export type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T
export type Sizes = 'small' | 'medium' | 'large'
export type Weights = 'light' | 'normal' | 'bold'
