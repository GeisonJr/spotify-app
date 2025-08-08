import { get } from '@/functions'
import type { PlaylistResponse } from '@/types'
import { useInfiniteQuery } from '@tanstack/react-query'

const fetchPlaylists = async (offset: number): Promise<PlaylistResponse> => {
  const response = await get('/playlist/me', {
    params: {
      offset
    }
  })

  if (!response.ok) {
    throw new Error('Failed to load playlists')
  }

  return response.json()
}

export const useInfinitePlaylists = () => {
  return useInfiniteQuery({
    queryKey: ['playlists'],
    queryFn: ({ pageParam }) => fetchPlaylists(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.data.offset >= lastPage.data.total)
        return null

      return lastPage.data.offset + lastPage.data.limit
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}
