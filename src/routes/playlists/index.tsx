import Header from '@/components/Header'
import If from '@/components/If'
import Layout from '@/components/Layout'
import link from '@/components/Link/index.module.css'
import Map from '@/components/Map'
import PlaylistCard from '@/components/PlaylistCard'
import { useInfinitePlaylists } from '@/hooks/useInfinitePlaylists'
import { createFileRoute } from '@tanstack/react-router'
import { useMemo } from 'react'
import styles from './index.module.css'

export const Route = createFileRoute('/playlists/')({
  component: Playlists
})

function Playlists() {
  const {
    data,
    status,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useInfinitePlaylists()

  const playlists = useMemo(() => {
    return data?.pages?.flatMap(page => page.data.items) || []
  }, [data])

  return (
    <>
      <Layout>
        <Header
          title={'Minhas Playlists'}
          description={'Sua coleção pessoal de playlists'}
        />
        <div className={styles.content}>
          <If condition={status === 'pending'}>
            <p>
              {'Carregando playlists...'}
            </p>
          </If>
          <Map data={playlists}>
            {(playlist) => {
              return <PlaylistCard
                key={playlist.id}
                playlist={playlist}
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
              {'Não há mais playlists'}
            </If>
          </button>
        </div>
      </Layout>
    </>
  )
}
