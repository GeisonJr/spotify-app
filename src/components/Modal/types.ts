export interface Props {
  readonly isOpen: boolean
  readonly children?: React.ReactNode
  readonly onClose?: () => void
}

export type {
  Props as ModalProps
}
