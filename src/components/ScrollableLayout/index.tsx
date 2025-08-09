import Header from '../Header'
import Menu from '../Menu'
import type { ScrollableLayoutProps } from './types'

import styles from './index.module.css'

function ScrollableLayout({ header, children }: ScrollableLayoutProps) {

  return (
    <>
      <div className={styles.container}>
        <Menu />
        <div className={styles.content}>
          <div className={styles.stickyHeader}>
            <Header {...header} />
          </div>
          <div className={styles.scrollableContent}>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default ScrollableLayout
