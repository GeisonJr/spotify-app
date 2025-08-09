import AlbumCard from '@/components/AlbumCard'
import If from '@/components/If'
import link from '@/components/Link/index.module.css'
import Map from '@/components/Map'
import ScrollableLayout from '@/components/ScrollableLayout'
import { useInfiniteAlbums } from '@/hooks/useInfiniteAlbums'
import { createFileRoute } from '@tanstack/react-router'
import { useMemo } from 'react'
import styles from './index.module.css'

export const Route = createFileRoute('/artists/$artistId/')({
  component: Artist
})

function Artist() {

  const { artistId } = Route.useParams()
  const { name, image } = Route.useSearch() as {
    name?: string
    image?: string
  }

  const {
    data,
    status,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useInfiniteAlbums(artistId)

  const albums = useMemo(() => {
    return data?.pages?.flatMap(page => page.data.items) || []
  }, [data])

  const isLoading = status === 'pending'

  return (
    <>
      <ScrollableLayout
        header={{
          canGoBack: true,
          title: name,
          children: (
            <If condition={!!image}>
              <img
                className={styles.image}
                alt={'Artista'}
                src={image}
              />
            </If>
          )
        }}
      >
        <div className={styles.content}>
          <If condition={isLoading}>
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
          </If>
          <Map data={albums}>
            {(album) => {
              return <AlbumCard
                key={album.id}
                album={album}
              />
            }}
          </Map>
          <div className={styles.loadMore}>
            <button
              className={link.container}
              disabled={!hasNextPage || isFetchingNextPage || isLoading}
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
