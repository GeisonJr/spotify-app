import If from '@/components/If'
import link from '@/components/Link/index.module.css'
import Map from '@/components/Map'
import PlaylistCard from '@/components/PlaylistCard'
import ScrollableLayout from '@/components/ScrollableLayout'
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

  const isLoading = status === 'pending'

  return (
    <>
      <ScrollableLayout
        header={{
          title: 'Minhas Playlists',
          description: 'Sua coleção pessoal de playlists'
        }}
      >
        <div className={styles.content}>
          <If condition={isLoading}>
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
          </If>
          <Map data={playlists}>
            {(playlist) => {
              return <PlaylistCard
                key={playlist.id}
                playlist={playlist}
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
