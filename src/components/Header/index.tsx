import If from '../If'
import type { HeaderProps } from './types'

import styles from './index.module.css'

function Header(props: HeaderProps) {

  const canGoBack = props.canGoBack ?? false

  function handleClick() {
    window.history.back()
  }

  return (
    <>
      <div className={styles.container}>
        <If condition={canGoBack}>
          <img
            className={styles.back}
            alt={'Voltar'}
            src={'/icons/arrow-left.svg'}
            onClick={handleClick}
          />
        </If>
        <div className={styles.content}>
          <h1 className={styles.title}>
            {props.title}
          </h1>
          <If condition={!!props.description}>
            <h2 className={styles.description}>
              {props.description}
            </h2>
          </If>
        </div>
      </div>
    </>
  )
}

export default Header
