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

export interface Album {
  album_type: string
  total_tracks: number
  available_markets: string[]
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  images: {
    url: string
    height: number | null
    width: number | null
  }[]
  name: string
  release_date: string
  release_date_precision: string
  restrictions?: {
    reason: string
  }
  type: string
  uri: string
  artists:
  {
    external_urls: {
      spotify: string
    }
    href: string
    id: string
    name: string
    type: string
    uri: string
  }[]
  album_group: string
}

export type AlbumsResponse = ResponseWithPagination<{
  href: string
  limit: number
  next: string | null
  offset: number
  previous: string | null
  total: number
  items: Album[]
}>

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
