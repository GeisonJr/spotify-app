import If from '../If'
import Skeleton from '../Skeleton'
import styles from './index.module.css'
import type { HeaderProps } from './types'

function Header(props: HeaderProps) {

  const canGoBack = props.canGoBack ?? false

  function handleClick() {
    window.history.back()
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.group}>
          <If condition={canGoBack}>
            <img
              className={styles.back}
              alt={'Voltar'}
              src={'/icons/arrow-left.svg'}
              onClick={handleClick}
            />
          </If>
          <div className={styles.content}>
            <Skeleton isLoading={!props.title}>
              <h1 className={styles.title}>
                {props.title ?? 'Carregando...'}
              </h1>
            </Skeleton>
            <If condition={!!props.description}>
              <h2 className={styles.description}>
                {props.description}
              </h2>
            </If>
          </div>
        </div>
        <div className={styles.group}>
          {props.children}
        </div>
      </div>
    </>
  )
}

export default Header
