import ArtistCard from '@/components/ArtistCard'
import Header from '@/components/Header'
import Layout from '@/components/Layout'
import Map from '@/components/Map'
import { get } from '@/functions'
import { createFileRoute } from '@tanstack/react-router'

import type { ArtistResponse } from '@/types'
import styles from './index.module.css'

export const Route = createFileRoute('/artists/')({
  loader: async () => {

    const response = await get('/artist/me/top-artists')

    if (!response.ok) {
      throw new Error('Failed to load artists')
    }

    const artists = await response.json() as ArtistResponse

    return {
      artists
    }
  },
  component: Artists
})

function Artists() {

  const { artists } = Route.useLoaderData()

  return (
    <>
      <Layout>
        <Header
          title={'Top Artistas'}
          description={'Aqui você encontra seus artistas preferidos'}
        />
        <div className={styles.content}>
          <Map data={artists.data.items}>
            {(artist) => {
              return <ArtistCard
                key={artist.id}
                artist={artist}
              />
            }}
          </Map>
        </div>
      </Layout>
    </>
  )
}
