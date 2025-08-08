import AlbumCard from '@/components/AlbumCard'
import Header from '@/components/Header'
import If from '@/components/If'
import Layout from '@/components/Layout'
import link from '@/components/Link/index.module.css'
import Map from '@/components/Map'
import { useInfiniteAlbums } from '@/hooks/useInfiniteAlbums'
import { createFileRoute } from '@tanstack/react-router'
import { useMemo } from 'react'
import styles from './index.module.css'

export const Route = createFileRoute('/artists/$artistId/')({
  component: Artist
})

function Artist() {

  const { artistId } = Route.useParams()

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


  return (
    <>
      <Layout>
        <Header
          canGoBack
          title={'artist.name'}
        />
        <div className={styles.content}>
          <If condition={status === 'pending'}>
            <p>
              {'Carregando artistas...'}
            </p>
          </If>
          <Map data={albums}>
            {(album) => {
              return <AlbumCard
                key={album.id}
                album={album}
              />
            }}
          </Map>
          <button
            className={link.container}
            disabled={!hasNextPage || isFetchingNextPage}
            onClick={() => fetchNextPage()}
          >
            <If condition={isFetchingNextPage}>
              {'Carregando mais...'}
            </If>
            <If condition={!isFetchingNextPage && hasNextPage}>
              {'Carregar mais'}
            </If>
            <If condition={!hasNextPage}>
              {'Não há mais albums'}
            </If>
          </button>
        </div>
      </Layout>
    </>
  )
}
