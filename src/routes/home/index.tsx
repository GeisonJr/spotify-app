import Layout from '@/components/Layout'
import { createFileRoute } from '@tanstack/react-router'

import styles from './index.module.css'

export const Route = createFileRoute('/home/')({
  component: Home
})

function Home() {

  return (
    <>
      <Layout>
        <h1 className={styles.title}>
          {'Bem vindo ao Spotify!'}
        </h1>
      </Layout>
    </>
  )
}
