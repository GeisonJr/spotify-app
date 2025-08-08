import AlbumCard from '@/components/AlbumCard'
import Header from '@/components/Header'
import Layout from '@/components/Layout'
import Map from '@/components/Map'
import { get } from '@/functions'
import { createFileRoute } from '@tanstack/react-router'

import type { AlbumsResponse } from '@/types'
import styles from './index.module.css'

export const Route = createFileRoute('/artists/$artistId/')({
  loader: async ({
    params: {
      artistId
    }
  }) => {

    const response = await get(`/artist/${artistId}/albums`)

    if (!response.ok) {
      throw new Error('Failed to load albums')
    }

    const albums = await response.json() as AlbumsResponse

    return {
      albums
    }
  },
  component: Artist
})

function Artist() {

  const { albums } = Route.useLoaderData()

  return (
    <>
      <Layout>
        <Header
          canGoBack
          title={'artist.name'}
        />
        <div className={styles.content}>
          <Map data={albums.data.items}>
            {(album) => {
              return <AlbumCard key={album.id} album={album} />
            }}
          </Map>
        </div>
      </Layout>
    </>
  )
}
