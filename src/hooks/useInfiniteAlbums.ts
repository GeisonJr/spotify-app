import { get } from '@/functions'
import type { AlbumsResponse } from '@/types'
import { useInfiniteQuery } from '@tanstack/react-query'

const fetchAlbums = async (artistId: string, offset: number): Promise<AlbumsResponse> => {
  const response = await get(`/artist/${artistId}/albums`, {
    params: {
      offset
    }
  })

  if (!response.ok) {
    throw new Error('Failed to load albums')
  }

  const albums = await response.json() as AlbumsResponse

  for (const album of albums.data.items) {
    const locale = navigator.language

    const releaseDate = new Date(album.release_date)
    album.release_date = releaseDate.toLocaleDateString(locale, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
  }

  return albums
}

export const useInfiniteAlbums = (artistId: string) => {
  return useInfiniteQuery({
    queryKey: ['albums', artistId],
    queryFn: ({ pageParam }) => fetchAlbums(artistId, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.data.offset >= lastPage.data.total)
        return null

      return lastPage.data.offset + lastPage.data.limit
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}
