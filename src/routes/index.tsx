import { createFileRoute, Link } from '@tanstack/react-router'

import link from '@/components/Link/index.module.css'
import styles from './index.module.css'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {

  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.logo}
          alt={'Spotify'}
          src={'/logo.png'}
        />
        <h1 className={styles.title}>
          {'Entra com sua conta Spotify clicando no botão abaixo'}
        </h1>
        <Link className={link.container} to={'/home'}>
          {'Entrar'}
        </Link>
      </div>
    </>
  )
}
