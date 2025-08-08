import ArtistCard from '@/components/ArtistCard'
import If from '@/components/If'
import link from '@/components/Link/index.module.css'
import Map from '@/components/Map'
import ScrollableLayout from '@/components/ScrollableLayout'
import { useInfiniteArtists } from '@/hooks/useInfiniteArtists'
import { createFileRoute } from '@tanstack/react-router'
import { useMemo } from 'react'
import styles from './index.module.css'

export const Route = createFileRoute('/artists/')({
  component: Artists
})

function Artists() {
  const {
    data,
    status,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useInfiniteArtists()

  const artists = useMemo(() => {
    return data?.pages?.flatMap(page => page.data.items) || []
  }, [data])

  return (
    <>
      <ScrollableLayout
        header={{
          title: 'Top Artistas',
          description: 'Aqui você encontra seus artistas preferidos',
        }}
      >
        <div className={styles.content}>
          <If condition={status === 'pending'}>
            <p>
              {'Carregando artistas...'}
            </p>
          </If>
          <Map data={artists}>
            {(artist) => {
              return <ArtistCard
                key={artist.id}
                artist={artist}
              />
            }}
          </Map>
          <div className={styles.loadMore}>
            <button
              className={link.container}
              disabled={!hasNextPage || isFetchingNextPage}
              onClick={() => fetchNextPage()}
            >
              {'Carregar mais'}
            </button>
          </div>
        </div>
      </ScrollableLayout>
    </>
  )
}
