import Layout from '@/components/Layout'
import { createFileRoute } from '@tanstack/react-router'

import Header from '@/components/Header'

export const Route = createFileRoute('/home/')({
  component: Home
})

function Home() {

  return (
    <>
      <Layout>
        <Header
          title={'Bem vindo ao Spotify'}
          description={'Veja seus artistas favoritos e playlists.'}
        />
      </Layout>
    </>
  )
}
