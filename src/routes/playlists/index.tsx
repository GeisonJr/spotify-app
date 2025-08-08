import Header from '@/components/Header'
import Layout from '@/components/Layout'
import Map from '@/components/Map'
import PlaylistCard from '@/components/PlaylistCard'
import { get } from '@/functions'
import { createFileRoute } from '@tanstack/react-router'

import type { PlaylistResponse } from '@/types'
import styles from './index.module.css'

export const Route = createFileRoute('/playlists/')({
  loader: async () => {

    const response = await get('/playlist/me')

    if (!response.ok) {
      throw new Error('Failed to load playlists')
    }

    const playlists = await response.json() as PlaylistResponse

    return {
      playlists
    }
  },
  component: Playlists
})

function Playlists() {

  const { playlists } = Route.useLoaderData()

  return (
    <>
      <Layout>
        <Header
          title={'Minhas Playlists'}
          description={'Sua coleção pessoal de playlists'}
        />
        <div className={styles.content}>
          <Map data={playlists.data.items}>
            {(playlist) => {
              return <PlaylistCard
                key={playlist.id}
                playlist={playlist}
              />
            }}
          </Map>
        </div>
      </Layout>
    </>
  )
}
