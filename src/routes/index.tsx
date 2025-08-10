import link from '@/components/Link/index.module.css'
import { createFileRoute } from '@tanstack/react-router'
import styles from './index.module.css'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
const url = new URL('/auth/login', BACKEND_URL)

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
          href={url.toString()}
        >
          {'Entrar'}
        </a>
      </div>
    </>
  )
}
