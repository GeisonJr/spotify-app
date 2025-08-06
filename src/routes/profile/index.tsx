import Layout from '@/components/Layout'
import { createFileRoute, Link } from '@tanstack/react-router'

import link from '@/components/Link/index.module.css'
import styles from './index.module.css'

export const Route = createFileRoute('/profile/')({
  component: Profile
})

function Profile() {

  return (
    <>
      <Layout>
        <div className={styles.content}>
          <img
            className={styles.avatar}
            alt={'Avatar'}
            src={'/avatar.png'}
          />
          <h2 className={styles.username}>
            {'Nome do Usuário'}
          </h2>
          <Link className={link.container} to={'/'}>
            {'Sair'}
          </Link>
        </div>
      </Layout>
    </>
  )
}
