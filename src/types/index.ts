interface ResponseWithPagination<T> {
  message: string
  data: T
  pagination: {
    hasNext: boolean
    hasPrevious: boolean
    currentPage: number
    totalPages: number
  }
}

export interface Artist {
  external_urls: {
    spotify: string
  }
  followers: {
    href: string | null
    total: number
  }
  genres: string[]
  href: string
  id: string
  images: {
    url: string
    height: number
    width: number
  }[]
  name: string
  popularity: number
  type: string
  uri: string
}

export type ArtistResponse = ResponseWithPagination<{
  href: string
  limit: number
  next: string | null
  offset: number
  previous: string | null
  total: number
  items: Artist[]
}>
