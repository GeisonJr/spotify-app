import Menu from '../Menu'
import type { LayoutProps } from './types'

import styles from './index.module.css'

function Layout({ children }: LayoutProps) {

  return (
    <>
      <div className={styles.container}>
        <Menu />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout
