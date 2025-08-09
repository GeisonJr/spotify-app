import If from '@/components/If'
import link from '@/components/Link/index.module.css'
import Map from '@/components/Map'
import Modal from '@/components/Modal'
import PlaylistCard from '@/components/PlaylistCard'
import ScrollableLayout from '@/components/ScrollableLayout'
import { post } from '@/functions'
import { useInfinitePlaylists } from '@/hooks/useInfinitePlaylists'
import type { Playlist, PlaylistCreateResponse, PlaylistResponse } from '@/types'
import { useQueryClient, type InfiniteData } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import styles from './index.module.css'

export const Route = createFileRoute('/playlists/')({
  component: Playlists
})

function Playlists() {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const queryClient = useQueryClient()

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

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('playlist-name') as string

    if (!name) {
      alert('Por favor, insira um nome para a playlist.')
      return
    }

    const response = await post('/playlist/me', {
      body: JSON.stringify({
        name
      })
    })

    if (!response.ok) {
      alert('Erro ao criar a playlist. Tente novamente.')
      return
    }

    const newPlaylist = await response.json() as PlaylistCreateResponse

    const optimisticPlaylist: Playlist = {
      ...newPlaylist.data,
      primary_color: null
    }

    // Atualiza o cache imediatamente
    queryClient.setQueryData<InfiniteData<PlaylistResponse>>(['playlists'], (oldData) => {
      if (!oldData) {
        return oldData
      }

      return {
        ...oldData,
        pages: oldData.pages.map((page, index) => {
          if (index === 0) {
            return {
              ...page,
              data: {
                ...page.data,
                items: [
                  optimisticPlaylist,
                  ...page.data.items
                ]
              }
            }
          }
          return page
        })
      }
    })

    setIsModalOpen(false)
  }

  return (
    <>
      <ScrollableLayout
        header={{
          title: 'Minhas Playlists',
          description: 'Sua coleção pessoal de playlists',
          children: (
            <button
              className={link.container}
              onClick={() => setIsModalOpen(true)}
            >
              {'Criar Playlist'}
            </button>
          )
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

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <form
          className={styles.modal}
          onSubmit={handleSubmit}
        >
          <div className={styles.modalContent}>
            <label htmlFor={'playlist-name'}>
              {'Dê um nome a sua playlist'}
            </label>
            <input
              autoFocus
              id={'playlist-name'}
              name={'playlist-name'}
            />
          </div>
          <button
            className={link.container}
            type={'submit'}
          >
            {'Criar'}
          </button>
        </form>
      </Modal>
    </>
  )
}
