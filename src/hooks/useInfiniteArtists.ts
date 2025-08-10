import { get } from '@/functions'
import type { ArtistResponse } from '@/types'
import { useInfiniteQuery } from '@tanstack/react-query'

const fetchArtists = async (offset: number): Promise<ArtistResponse> => {
  const response = await get('/artist/me/top-artists', {
    params: {
      offset: offset.toString()
    }
  })

  if (!response.ok) {
    throw new Error('Failed to load artists')
  }

  return response.json()
}

export const useInfiniteArtists = () => {
  return useInfiniteQuery({
    queryKey: ['artists'],
    queryFn: ({ pageParam }) => fetchArtists(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.data.offset >= lastPage.data.total)
        return null

      return lastPage.data.offset + lastPage.data.limit
    }
  })
}
