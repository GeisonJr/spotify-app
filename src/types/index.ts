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
  }[] | null
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
  }[] | null
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

export interface Playlist {
  collaborative: boolean
  description: string
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  images: {
    url: string
    height: number | null
    width: number | null
  }[] | null
  name: string
  owner: {
    external_urls: {
      spotify: string
    }
    href: string
    id: string
    type: string
    uri: string
    display_name: string
  }
  public: boolean
  snapshot_id: string
  tracks: {
    href: string
    total: number
  }
  type: string
  uri: string
  primary_color: string | null
}

export type PlaylistResponse = ResponseWithPagination<{
  href: string
  limit: number
  next: string | null
  offset: number
  previous: string | null
  total: number
  items: Playlist[]
}>

export interface PlaylistCreate {
  collaborative: boolean
  description: string
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  images: {
    url: string
    height: number
    width: number
  }[]
  name: string
  owner: {
    external_urls: {
      spotify: string
    }
    href: string
    id: string
    type: string
    uri: string
    display_name: string
  }
  public: boolean
  snapshot_id: string
  tracks: {
    href: string
    limit: number
    next: string
    offset: number
    previous: string
    total: number
    items: {
      added_at: string
      added_by: {
        external_urls: {
          spotify: string
        }
        href: string
        id: string
        type: string
        uri: string
      }
      is_local: boolean
      track: {
        album: Album
        artists: {
          external_urls: {
            spotify: string
          }
          href: string
          id: string
          name: string
          type: string
          uri: string
        }[]
        available_markets: string[]
        disc_number: number
        duration_ms: number
        explicit: boolean
        external_ids: {
          isrc: string
          ean: string
          upc: string
        }
        external_urls: {
          spotify: string
        }
        href: string
        id: string
        is_playable: boolean
        linked_from: {
          external_urls: {
            spotify: string
          },
          href: string
          id: string
          type: string
          uri: string
        }
        restrictions: {
          reason: string
        }
        name: string
        popularity: number
        preview_url: string
        track_number: number
        type: string
        uri: string
        is_local: boolean
      }
    }[]
  }
  type: string
  uri: string
}

export interface PlaylistCreateResponse {
  message: string
  data: PlaylistCreate
}

export interface User {
  country: string
  display_name: string
  email: string
  explicit_content: {
    filter_enabled: boolean
    filter_locked: boolean
  }
  external_urls: {
    spotify: string
  }
  followers: {
    href: string | null
    total: number
  }
  href: string
  id: string
  images:
  {
    url: string
    height: number
    width: number
  }[]
  product: string
  type: string
  uri: string
}

export interface UserResponse {
  message: string
  data: User
}
