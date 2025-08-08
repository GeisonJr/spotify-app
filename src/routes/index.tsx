import { createFileRoute } from '@tanstack/react-router'

import link from '@/components/Link/index.module.css'
import styles from './index.module.css'

export const Route = createFileRoute('/')({
  component: App
})

function App() {

  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.logo}
          alt={'Spotify'}
          src={'/logo.svg'}
        />
        <h1 className={styles.title}>
          {'Entra com sua conta Spotify clicando no botão abaixo'}
        </h1>
        <a
          className={link.container}
          href={'http://127.0.0.1:3000/auth/login'}
        >
          {'Entrar'}
        </a>
      </div>
    </>
  )
}
