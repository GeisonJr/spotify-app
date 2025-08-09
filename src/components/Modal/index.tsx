import styles from './index.module.css'
import type { ModalProps } from './types'

function Modal({ isOpen, onClose, ...rest }: ModalProps) {

  function handleClose() {
    onClose?.()
  }

  if (!isOpen) {
    return null
  }

  return (
    <div
      className={styles.overlay}
      {...rest}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <img
              className={styles.close}
              alt={'Fechar'}
              src={'/icons/x.svg'}
              onClick={handleClose}
            />
          </div>
          {rest.children}
        </div>
      </div>
    </div>
  )
}

export default Modal
