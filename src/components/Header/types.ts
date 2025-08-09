export interface Props {
  readonly canGoBack?: boolean
  readonly title?: string
  readonly description?: string
  readonly children?: React.ReactNode
}

export type {
  Props as HeaderProps
}
