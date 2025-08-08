import ArtistCard from '@/components/ArtistCard'
import Header from '@/components/Header'
import If from '@/components/If'
import Layout from '@/components/Layout'
import link from '@/components/Link/index.module.css'
import Map from '@/components/Map'
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
      <Layout>
        <Header
          title={'Top Artistas'}
          description={'Aqui você encontra seus artistas preferidos'}
        />
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
              {'Não há mais artistas'}
            </If>
          </button>
        </div>
      </Layout>
    </>
  )
}
